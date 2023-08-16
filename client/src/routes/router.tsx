import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../components/home/home";
import NotFound from "../components/not-found"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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