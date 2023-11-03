import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <progress className="progress progress-info w-56" value="70" max="100"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate> ;
};

export default PrivateRoute;