import PhoneForm from "@pages/Login/components/PhoneForm";
import myCss from './index.module.less'
import {Flex, Image} from "antd";
import React, {useState} from "react";
import Footer, {LoginMethod} from "@pages/Login/components/Footer";
import SteamForm from "@pages/Login/components/SteamForm";
import ScanForm from "@pages/Login/components/ScanForm";


function Index() {
    const [type, setType] = useState<LoginMethod>('phone')

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
            {type === "steam" && <SteamForm/>}
            {type === "scan" && <ScanForm/>}
            <Footer
                method={type}
                steamHandler={() => setType('steam')}
                scanHandler={() => setType('scan')}
                phoneHandler={() => setType('phone')}
            />
        </Flex>
    );
}

export default Index;