import {Outlet} from "react-router-dom";
import {Flex} from "antd";
import Header from "@pages/Home/components/Header";
import {isMobile} from "@utils/loginMethod";

interface Props{
    header:boolean
}

function Index(props:Props) {
    const mobile = isMobile()

    return (
        <Flex style={{width: '100%', background: '#f9fbff', height: '100vh'}} vertical>
            {
                props.header &&   <Header mobile={mobile}/>
            }
            <Outlet/>
        </Flex>
    );
}

export default Index;