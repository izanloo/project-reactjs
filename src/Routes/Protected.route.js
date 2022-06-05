
import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

function Protected({ element }) {

    const Localstorage = localStorage.getItem('isLogin')
    const location = useLocation()
    if (!Localstorage) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return element
}
export default Protected;
