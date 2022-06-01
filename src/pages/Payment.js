import React, { useState } from 'react'
import WithAdmin from '../Layouts/WithAdmin'
import Button from "@mui/material/Button";
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material';
import { Link } from '@mui/material';
import CancelPayment from './CancelPayment';


function Payment() {
  const [post, setPost] = useState(false)
  function successPayment() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const LocalStorage = JSON.parse(localStorage.getItem("customer"));
    const LocalCart = JSON.parse(localStorage.getItem("cart"));
    let customerDetail = {
      'firstName': LocalStorage[0].firstName,
      'lastName': LocalStorage[0].lastName,
      'Address': LocalStorage[0].Address,
      'phone': LocalStorage[0].phone,

      //تاریخ سفارش
      // 'orderDate' : date,
      // 'purchaseTotal':220000,
      // "orderStatus": 1,
      //تاریخ تحویل   
    }

    let orderItems = LocalCart


    const url = 'http://localhost:3002/orders';
    axios({
      method: 'post',
      url: url,
      data: {
        customerDetail,
        orderItems,
        "orderDate": 1
      },

    })
      .then(function (response) {
        return <Navigate  to={successPayment} />
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }

  
  return (
    <>
      <Button onClick={successPayment}>پرداخت</Button>
     <Link to={CancelPayment}  >انصراف</Link>
    </>
  )
}
export default WithAdmin(Payment)
