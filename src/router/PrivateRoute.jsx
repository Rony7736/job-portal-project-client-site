import { useContext } from "react";
import authContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

 
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext)

    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
    return <Navigate to="/signIn" state={location?.pathname}></Navigate>
};

export default PrivateRoute;