import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layout/MainLayout";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import ErrorPage from "../Pages/ErrorPage";
import FriendDetails from "../components/ui/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "friendDetails/:friendId",
        element: <FriendDetails />,
      },
    ],
  }
]);

export default router;
