import React from 'react';
import myCss from "./index.module.less";
import Icons from "@comps/Icons";
import {Flex} from "antd";
import {List} from "@type/home/interface";

interface Props {
    item: List
    onClick:()=>void
}

function Index(props: Props) {
    return (
        <div className={myCss.container} onClick={props.onClick}>
            <div className={myCss.icon}>
                <Icons type={props.item.icon} size={30} className={myCss.icons} />
            </div>

            <Flex  vertical align={'center'} justify={'center'}>
                <h4>{props.item.title}</h4>
                <div className={myCss.desc}>
                    {props.item.desc}
                </div>
            </Flex>
        </div>
    );
}

export default Index;