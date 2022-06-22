import React, { useState,useEffect } from 'react'
import Button from "@mui/material/Button";
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material';
import { Link } from '@mui/material';
// import CancelPayment from './CancelPayment';
import { useNavigate, useSearchParams } from "react-router-dom";
import WithUser from '../Layouts/WithUser'
import PaymentSuccess from '../Components/User/Payment/PaymentSuccess';
import PaymentCancel from '../Components/User/Payment/PaymentCancel';
import { api } from '../services/Config'



function Payment() {
  const [post, setPost] = useState(false)
  const dateNumber = +new Date()
//   function updateCount(){
//     try {
//       await HttpService.patch(PRODUCTS+`/${productId}`,{count: updatedMaxCount})
//   } catch (error) {
//       toast.error('خطایی در بروز رسانی موجودی محصول ایجاد شده است')
//   }
// }
const handel = async () => {
  await api.put(`http://localhost:3002/products/"id"==7`,{count:500})
  .then(res =>console.log(res.data))
  .catch(error => console.log(error))
}

  
  function successPayment() {
    

    const LocalStorage = JSON.parse(localStorage.getItem("customer"));
    const LocalCart = JSON.parse(localStorage.getItem("cart"));
    const LocalpurchaseTotal = JSON.parse(localStorage.getItem("purchaseTotal"));
    
    let customerDetail = {
      'firstName': LocalStorage[0].firstName,
      'lastName': LocalStorage[0].lastName,
      'Address': LocalStorage[0].billingAddress,
      'phone': LocalStorage[0].phone,
    }

    let orderItems = LocalCart


    const url = 'http://localhost:3002/orders';
    axios({
      method: 'post',
      url: url,
      data: {
        customerDetail,
        orderItems,
        "orderStatus": 1,
        "delivery":LocalStorage[0].delivery,
        "purchaseTotal": LocalpurchaseTotal,
        "orderDate": dateNumber,
      },

    })
      .then(function (response) {
        console.log(response)
        localStorage.removeItem("cart");    
        localStorage.removeItem("customer");    

      })
      .catch(function (error) {
        console.log(error);
      });
  
  }
  const getStatus=()=>{
    const statusPayment=searchParams.get("status")
    if(statusPayment == 'success'){
      successPayment()
    }

  }
useEffect(()=>{getStatus()},[])
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
            {searchParams.get("status") == "success" ? <PaymentSuccess/> :<PaymentCancel/>}
    </>
  )
}
export default WithUser(Payment)
