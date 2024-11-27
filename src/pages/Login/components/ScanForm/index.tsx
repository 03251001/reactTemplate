import {useEffect, useRef, useState} from 'react'
import {Button, Flex, Image, Spin} from 'antd'
import {store} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";
import {RouterPath} from "@/routes/routerPath.ts";
import {updateToken} from "@slice/UserSlice";
import {useNavigate} from "react-router-dom";
import _ from "lodash";
import myCss from './index.module.less'
import {getNewRequestUrl} from "@utils/request/RequestUrl.ts";

const appDownloadUrl = 'https://arena.oss.r0csgo.com:9001/client/m/r0_esport_v1.0.9.apk'

const sseUrl = getNewRequestUrl('http://192.168.9.46:10010/api/login/app/genAppQrCode')

function Index() {
    const navigate = useNavigate()

    const [qrImg, setQrImg] = useState('')
    const [qrStatus, setQrStatus] = useState('loading')
    const [loading, setLoading] = useState(false)
    const [start, setStart] = useState(false)

    const eventSource = useRef<EventSource | null>(null)

    function downApp() {
        window.open(appDownloadUrl);
    }

    function createSseConnect() {
        setLoading(true)
        if (window.EventSource && start) {

            const source = new EventSource(sseUrl)

            eventSource.current = source

            // 监听打开事件
            source.addEventListener('open', (e) => {
                console.log("打开连接 onopen==>", e)
            })

            // 监听消息事件
            source.addEventListener("message", (e) => {
                const data = JSON.parse(e.data)

                if ('type' in data) {
                    switch (data.type) {
                        case 'scanSuccess': // 二维码已被扫描
                            setQrStatus('scanned')
                            break
                        case 'scanLogin': // 登录成功
                            store.dispatch(updateLoginModal(false))
                            store.dispatch(updateToken(data.tokenInfo?.accessToken))
                            const routerPath = RouterPath()
                            navigate(routerPath?.center)
                            setTimeout(() => {
                                source.close()
                            }, 2000)
                            break
                        case 'genQrCode':
                            const base64 = 'data:image/png;base64,' + data.base64
                            setQrImg(base64)
                            setLoading(false)
                            break
                    }
                }

                console.log('sse message', data)
            })

            // 监听错误事件
            source.addEventListener("error", (e) => {
                // @ts-ignore
                const state = e?.currentTarget?.readyState
                setStart(false)
                let msg = ''
                switch (state) {
                    case 0:  // EventSource.CONNECTING  正在连接服务器，连接仍然处于建立过程中（值为 0）
                        msg = '正在连接服务器'
                        break
                    case 1: // EventSource.OPEN: 连接已成功建立，并且正在接收事件（值为 1）。
                        msg = '连接已成功建立'
                        break
                    case 2: // EventSource.CLOSED: 连接已关闭（值为 2）
                        msg = '连接已关闭'
                        setStart(false)
                        break
                }
                console.log('sse error', msg)
                source?.close()
            })

            // 关闭连接
            // @ts-ignore
            source.close = function (e) {
                setStart(false)
                console.log("断开 οnerrοr==>", e)
            }
        } else {
            alert("该浏览器不支持sse")
        }
    }

    const db_create = _.debounce(() => {
        createSseConnect()
    }, 1000)

    useEffect(() => {
        if (start) {
            createSseConnect()
        }
        return () => {
            setStart(false)
        }
    }, [start]);

    useEffect(() => {
        setStart(true)
        return () => {
            setStart(false)
            eventSource.current?.close()
        }
    }, []);

    return (
        <Flex vertical align={'center'} className={myCss.container}>
            <div className={myCss.qr}>
                {
                    loading ? (
                        <Spin/>
                    ) : (
                        <div className={`${myCss.imgWrapper} ${qrStatus === 'scanned' && myCss.scanned}`}>
                            <Image src={qrImg} preview={false}/>
                        </div>
                    )
                }
            </div>

            <p>
                使用 R0 APP 扫码登录
                <Button type={'link'} onClick={downApp}> 点击下载APP</Button>
            </p>
        </Flex>

    );
}

export default Index;