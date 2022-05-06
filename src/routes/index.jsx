import {Navigate} from 'react-router-dom'
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";

const routes = [
    {
        path: '/',
        exact: true,
        element: <Navigate to="/page1"/>
    },
    {
        path: '/page1',
        exact: true,
        element: <Page1/>
    },
    {
        path: '/page2',
        exact: true,
        element: <Page2/>
    },
]

export default routes