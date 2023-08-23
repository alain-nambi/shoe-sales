import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeComponent from "../components/home/home";
import NotFound from "../components/not-found"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeComponent />,
    },
    {
        path: "/home",
        element: <Navigate to="/" />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router