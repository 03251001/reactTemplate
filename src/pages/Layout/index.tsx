import {Outlet, useNavigate,} from "react-router-dom";
import {Flex} from "antd";
import Header from "@pages/Home/components/Header";
import {isMobile} from "@utils/loginMethod";
import {MessageProvider} from "@/context/MessageContext.tsx";
import {useEffect, useState} from "react";
import {updateSteamStatus, updateToken, updateVerifyInfo} from "@slice/UserSlice";
import {updateGlobalError, updateLoginModal} from "@slice/GlobalSlice";
import {RouterPath} from "@/routes/routerPath.ts";
import {persistor, store, useAppDispatch, useAppSelector} from "@store/Index";
import {InitVerity} from "@type/user";
import {initialState} from "@slice/UserSlice/interface.ts";

interface Props {
    header: boolean
}

function Index(props: Props) {
    const mobile = isMobile()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        verifyInfo
    } = useAppSelector(state => state.UserSlice||initialState)

    const [time, setTime] = useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        window.addEventListener("storage", function (e) {
            const value = e.newValue
            const data = value ? JSON.parse(value) : null
            if (!data) return
            switch (data?.type) {
                case 'loginSteam': // 使用steam登录
                    dispatch(updateToken(data.token))
                    dispatch(updateSteamStatus(data.status))

                    if (data.status == 'success') {
                        dispatch(updateLoginModal(false))
                        const routerPath = RouterPath()
                        navigate(routerPath.center)
                    }
                    break
                case 'steamChange': // 换绑steam
                    dispatch(updateGlobalError({
                        type: data?.mod === '5' ? 'success' : 'error',
                        text: data?.errorTip
                    }))
                    break
            }
        });
    }, []);


    useEffect(() => {
        if (verifyInfo) {
            if (time) {
                clearTimeout(time)
            }
            const temp = setTimeout(() => {
                store.dispatch(updateVerifyInfo(InitVerity))
            }, 1000 * 60 * 5)

            setTime(temp)
        }
    }, [verifyInfo]);

    useEffect(()=>{
        persistor.flush() .then(() => {
            persistor.persist();
        });

        return ()=>{
            persistor.flush() .then(() => {
                persistor.persist();
            });
        }
    },[])

    return (
        <MessageProvider>
            <Flex className={'layout'} vertical>
                {
                    props.header && <Header mobile={mobile}/>
                }
                <Outlet/>
            </Flex>
        </MessageProvider>
    );
}

export default Index;