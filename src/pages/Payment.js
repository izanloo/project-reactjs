import React from 'react'
import WithAdmin from '../Layouts/WithAdmin'
import Button from "@mui/material/Button";
import axios from 'axios'
import {Navigate} from 'react-router-dom'


function Payment() {

   function successPayment(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
     const LocalStorage = JSON.parse(localStorage.getItem("customer"));
     const LocalCart = JSON.parse(localStorage.getItem("cart"));
      let customerDetail={
        customerDetail:{
          'firstName' : LocalStorage[0].firstName,
          'lastName' : LocalStorage[0].lastName,
          'Address' : LocalStorage[0].Address,
          'phone' : LocalStorage[0].phone,
        }
        //تاریخ سفارش
        // 'orderDate' : date,
        // 'purchaseTotal':220000,
        // "orderStatus": 1,
        //تاریخ تحویل
        
      }
      console.log(LocalCart[0].name)
      const  url= 'http://localhost:3002/orders';
      {Object.values(LocalCart).map(item=>
        
        
{        axios({
          method: 'post',
          url: url,
          data:{
             customerDetail,
              "orderItem":
{              'name':item.name,
              'price': item.price,
              'quantity': item.valueInput}
          },
        
      })
      .then(function (response) {
        return <Navigate to='/resultPay' state={{from:'succsess'}}/>
      })
      .catch(function (error) {
          console.log(error);
      });}
        )}

        
   }
   function cancelPayment(){
    return <Navigate to='/resultPay' state={{from:'cancel'}}/>

   }
  return (
    <>
    <Button onClick={successPayment}>پرداخت</Button>
    <Button onClick={cancelPayment}>انصراف</Button>
    </>
    )
}
export default WithAdmin(Payment)
