import { Navigate, Outlet } from "react-router";


const PrivatRoute = ({ redirectPath = '/login'}) => {
    if (!localStorage.getItem('jwt')) {
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet/> 
}

export default PrivatRoute;