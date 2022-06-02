import React, { useState,useEffect } from 'react'
import WithUser from '../Layouts/WithUser'
import Button from "@mui/material/Button";
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material';
import { Link } from '@mui/material';
import CancelPayment from './CancelPayment';
import { useNavigate, useSearchParams } from "react-router-dom";



function Payment() {
  const [post, setPost] = useState(false)
  function successPayment() {
    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const LocalStorage = JSON.parse(localStorage.getItem("customer"));
    const LocalCart = JSON.parse(localStorage.getItem("cart"));
    let customerDetail = {
      'firstName': LocalStorage[0].firstName,
      'lastName': LocalStorage[0].lastName,
      'Address': LocalStorage[0].billingAddress,
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
        "orderStatus": 1,
        "delivery":LocalStorage[0].delivery
      },

    })
      .then(function (response) {
        console.log(response)
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
            {searchParams.get("status") == "success" ? "با موفقیت پرداخت شد" :"کنسل شد"}
    </>
  )
}
export default WithUser(Payment)
