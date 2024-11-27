import React from 'react';
import myCss from './index.module.less'
import {Avatar, Flex} from "antd";
import Icons from "@comps/Icons";

interface Props {
    label: string,
    right: string
    src: string
    onClick: () => void
}

function Index(props: Props) {

    return (
        <Flex className={myCss.container} justify={'space-between'} onClick={props.onClick}>
            <Flex align={'center'} gap={15} className={myCss.left}>
                {
                    props.src?.startsWith('r-') ? (
                        <Icons type={props.src} size={40}/>
                    ) : (
                        <Avatar src={props.src} size={40}/>
                    )
                }
                <Flex vertical justify={'space-between'} gap={5}>
                    {
                        props.src?.startsWith('r-') ? (
                            <h5>{props.label}</h5>
                        ) : (
                            <h4>{props.label}</h4>
                        )
                    }

                    {
                        props.label === 'Steam换绑' && <p className={myCss.desc}>
                            如您未开启 <span>Steam加速器</span>，可能会导致Steam网站无法访问！
                        </p>
                    }
                </Flex>
            </Flex>

            <Flex className={myCss.right} align={'center'} gap={5}>
                <span>{props.right}</span>
                <Icons type={'r-arrow'} size={12} color={'#6971ff'}/>
            </Flex>
        </Flex>
    );
}

export default Index;