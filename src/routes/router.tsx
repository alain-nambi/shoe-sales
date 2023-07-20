import { createBrowserRouter, Navigate } from "react-router-dom";

import NavBar from "../components/navbar/navbar";
import NotFound from "../components/not-found"

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
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