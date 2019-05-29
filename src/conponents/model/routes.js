import RHome from "../home/Home";
import User from "../user/User";
import News from "../user/News";
import Main from "../user/Main";
import Info from "../user/Info";

let routes = [
    {path:'/',component: RHome,exact: true},
    {
        path:'/user',
        component: User,
        exact: false,
        routes: [
            {
                path:'/user',
                component: Main,
                exact: true,
            },
            {
                path:'/user/info',
                component: Info,
                exact: false,
            }
        ]
    },
    {path:'/news',component: News,exact: false},
]

export default routes;