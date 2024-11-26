import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
export default function ProtectedRoute(props ) {
    const token=localStorage.getItem("token")
    if(token===null){
        return <Navigate to="/login"/>
    }else{
        return <Outlet/>
    }
}
