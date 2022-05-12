import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import WithAdmin from '../Layouts/WithAdmin'


function OutletOrder() {
    return (
        <>

           <span>سفارش های در حال انتظار ارسال</span>  
            <Link to={`/paneladmin/orders`} ><input type="radio"  name="orderRadio" value="waiting"  /></Link>
            <Link to={`/paneladmin/orders/resived`} ><input type="radio" name="orderRadio" value="resive" /></Link>
            <span>سفارش های تحویل داده شده</span>
           
            <Outlet />

        </>

    )
}
export default WithAdmin(OutletOrder)
