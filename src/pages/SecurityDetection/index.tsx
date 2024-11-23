import React from 'react';
import myCss from './index.module.less'
import {Outlet} from "react-router-dom";

interface Props{

}

/**
 * todo:等待跟后端沟通，是否要做，功能前验证
 * @param props
 * @constructor
 */
function Index(props:Props) {
    // 先进行验证
    return (
        <div className={myCss.container}>
            111
            <Outlet/>
        </div>
    );
}

export default Index;