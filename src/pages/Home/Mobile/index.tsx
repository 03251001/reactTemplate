import myCss from './index.module.less'
import Header from "@pages/Home/components/Header";
import {Flex} from "antd";
import Footer from "@pages/Home/components/Footer";
import {desc, list, slogan} from "@type/home";
import MobileCard from "@pages/Home/components/MobileCard";
import {useNavigate} from "react-router-dom";
import {needTokenMobileClick} from "@handle/user.ts";

function Index() {

    const navigate = useNavigate()

    function onClick(path: string) {
        needTokenMobileClick(() => navigate('/mobile/login'), () => navigate(path))
    }

    return (
        <div className={myCss.container}>
            <Header mobile={true}/>
            <div className={myCss.inner}>
                <Flex className={myCss.title} vertical gap={10}>
                    <h1>{slogan}</h1>
                    <h5>{desc}</h5>
                </Flex>

                <Flex className={myCss.cardBox} vertical justify={'center'} gap={15}>
                    {
                        list?.map((item, index) => (
                            <MobileCard onClick={() => onClick(item.mobilePath)} item={item} key={index}/>
                        ))
                    }
                </Flex>

                <Footer mobile={true}/>
            </div>
        </div>
    );
}

export default Index;