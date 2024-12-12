
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement : <p>Route Not Found</p>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>,
            },
        ]
    },
]);

export default router;