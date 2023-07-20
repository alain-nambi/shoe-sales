import { createBrowserRouter, Navigate } from "react-router-dom";

import NavBar from "../components/navbar/navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
    },
    {
        path: "/home",
        element: <Navigate to="/" />
    },
])

export default router