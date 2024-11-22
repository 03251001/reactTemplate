import React from 'react';
import myCss from "./index.module.less";
import Icons from "@comps/Icons";
import {Flex} from "antd";
import {List} from "@type/home/interface";

interface Props {
    item: List
}

function Index(props: Props) {
    return (
        <Flex className={myCss.container} align={'center'} gap={'1rem'}>
            <div className={myCss.icon}>
                <Icons type={props.item.icon} size={30}/>
            </div>

            <Flex gap={5} vertical justify={'center'}>
                <h4>{props.item.title}</h4>
                <div className={myCss.desc}>
                    {props.item.desc}
                </div>
            </Flex>
        </Flex>
    );
}

export default Index;