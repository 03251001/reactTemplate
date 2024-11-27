import {Outlet} from "react-router-dom";
import {Flex} from "antd";
import {MessageProvider} from "@/context/MessageContext.tsx";

interface Props {
    header: boolean
}
function Index(props: Props) {

    return (
        <MessageProvider>
            <Flex className={'layout'} vertical>
                <Outlet/>
            </Flex>
        </MessageProvider>
    );
}

export default Index;