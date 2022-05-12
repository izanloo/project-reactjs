import React, { Children, useEffect, useState } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function Protected({ element }) {
    const state = useSelector((state) => {
        return state.admin.isLogin
    })
    console.log(state);
    const location=useLocation()
if(!state){
    return <Navigate to="/login" state={{from:location}}replace />
}
        
return (
    element   
     )
}
export default Protected;