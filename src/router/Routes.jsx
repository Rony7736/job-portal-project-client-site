
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplication/MyApplications";

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
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            },
            {
                path: "/myApplications",
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
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