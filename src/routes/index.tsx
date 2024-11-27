import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout header={false}/>,
        children: [
            // 首页
            {
                index: true,
                element: <Home/>
            },
        ]
    },
]);

export default router

