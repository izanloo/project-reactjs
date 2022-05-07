import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

function Protected({ element }) {
    const [islogin, setIslogin] = useState(true)
    function cheklogin() {
        // setIslogin(true)
    }

    return (
        islogin == true ? element : <Navigate to="/login" replace />
    );
}

export default Protected;
