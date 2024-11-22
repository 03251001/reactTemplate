import myCss from './index.module.less'
import Header from "@pages/Home/components/Header";
import {Flex, Image} from "antd";
import {desc, list, slogan} from "@type/home";
import Card from "@pages/Home/components/Card";
import banner from '@assets/banner.png'
import Footer from "@pages/Home/components/Footer";

function Index() {
    return (
        <div className={myCss.container}>
            <Header mobile={false}/>

            <Flex justify={'center'} className={myCss.title} align={'center'} gap={100}>
                <Flex vertical>
                    <h1>{slogan}</h1>
                    <h5>{desc}</h5>
                </Flex>

                <Image src={banner} width={300} preview={false}/>
            </Flex>


            <div className={myCss.inner}>
                <Flex className={myCss.cardBox} justify={'center'} gap={30}>
                    {
                        list?.map((item,index) => (
                            <Card item={item} key={index}/>
                        ))
                    }
                </Flex>
            </div>

            <Footer mobile={false}/>
        </div>
    );
}

export default Index;