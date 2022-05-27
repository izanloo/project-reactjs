import React, { Children, useEffect, useState } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function Protected({ element }) {
  let  localstorage=localStorage.getItem('ACCESS_TOKEN')
    // const state = useSelector((state) => {
    //     return state.admin.isLogin
    // })
    console.log(localstorage)


    // function cheklogin() {
    //     // setIslogin(true)
    // }
    // console.log(state);
    const location=useLocation()
if(localstorage ==null){
    return <Navigate to="/login" state={{from:location}}replace />
}
        
return (
    element   
     )
}
export default Protected;
