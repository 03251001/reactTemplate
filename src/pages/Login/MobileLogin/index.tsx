import PhoneForm from "@pages/Login/components/PhoneForm";
import myCss from './index.module.less'
import {Button, Flex, Image} from "antd";
import React, {useState} from "react";
import Footer, {LoginMethod} from "@pages/Login/components/Footer";
import SteamForm from "@pages/Login/components/SteamForm";
import ScanForm from "@pages/Login/components/ScanForm";
import {useNavigate} from "react-router-dom";
import {RouterPath} from "@/routes/routerPath.ts";


function Index() {
    const navigate = useNavigate()
    const routerPath = RouterPath()
    const [type, setType] = useState<LoginMethod>('phone')

    function toHome() {
        navigate(routerPath.home,{replace:true})
    }

    return (
        <Flex vertical gap={50} className={myCss.container}>
            <Flex justify={'center'}>
                <Image
                    src={'https://r0csgo.com/logo1.png'}
                    preview={false}
                    width={200}
                />
            </Flex>

            {type === "phone" && <PhoneForm/>}
            {type === "steam" && <SteamForm link={false}/>}
            {type === "scan" && <ScanForm/>}

            <Footer
                method={type}
                steamHandler={() => setType('steam')}
                scanHandler={() => setType('scan')}
                phoneHandler={() => setType('phone')}
            />
            <Button size={'small'} type={'link'} onClick={toHome}>返回首页</Button>

        </Flex>
    );
}

export default Index;