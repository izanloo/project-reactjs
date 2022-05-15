import React, { Children, useEffect, useState } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function Protected({ element }) {
    const stateLogin = useSelector((state) => state.isLogin.isLogin)
    const location = useLocation()
    if (!stateLogin) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return (
        element
    )
}
export default Protected;