import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "timeline",
                element: <Timeline/>
            },
            {
                path: "stats",
                element:<Stats/>
            }
        ]
    }
])

export default router;