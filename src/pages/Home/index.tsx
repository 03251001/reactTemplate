import myCss from './index.module.less'
import Header from "@pages/Home/components/Header";
import {Flex, Image} from "antd";
import {desc, list, slogan} from "@type/home";
import Card from "@pages/Home/components/Card";
import banner from '@assets/banner.png'
import Footer from "@pages/Home/components/Footer";
import {useNavigate} from "react-router-dom";
import {needTokenClick} from "@handle/user.ts";
import {isMobile} from "@utils/loginMethod";
import {useAppDispatch} from "@store/Index";
import {updateLoginModal} from "@slice/GlobalSlice";
import {RouterPath} from "@/routes/routerPath.ts";

function Index() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const routerPath = RouterPath()

    function onClick() {
        needTokenClick((mobile) => {
            if (mobile) {
                navigate(routerPath.mobileLogin)
                return
            }
            dispatch(updateLoginModal(true))
        }, () => navigate(routerPath.center))
    }

    return (
        <div className={myCss.container}>
            <Header mobile={false}/>

            <div className={myCss.inner}>
                <Flex className={myCss.title} vertical>
                    <Flex vertical gap={10}>
                        <h1>{slogan}</h1>
                        <h5>{desc}</h5>
                    </Flex>

                    {
                        !isMobile() && (
                            <Image src={banner} width={300} height={300} preview={false}/>
                        )
                    }
                </Flex>

                <Flex className={myCss.cardBox} justify={'center'}>
                    {
                        list?.map((item, index) => (
                            <Card onClick={onClick} item={item} key={index}/>
                        ))
                    }
                </Flex>
            </div>

            <Footer mobile={false}/>
        </div>
    );
}

export default Index;