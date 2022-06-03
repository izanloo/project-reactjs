import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setOrder } from '../Redux/orderSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'
import ModalStatus from './modal/ModalStatus';

export default function WaitingOrder() {
  const order = useSelector((state) => state.order)
  const dispatch = useDispatch()
  const url = 'http://localhost:3002/orders';

  function getData() {
    axios({
      url: url,
      method: 'get',
      params: {
        token: 'TOP-SECRET'
      }
    })
      .then(function (response) {
        dispatch(setOrder(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() =>  { getData() }, [])

  return (
    <>
        <div>
        <h2>مدیریت سفارشات</h2>
        <table dir="rtl" style={{ border: '1' }}>
          <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ</th>
            <th>زمان ثبت سفارش</th>
            <th>وضعیت</th>
          </tr>
          {order.order == null ? "kk" : order.order?.map((item, id) => {
            if (item.orderStatus == 1) {
              return (
                <>
                  <tr>
                    <td>{item.customerDetail.firstName}<span style={{ paddingRight: '3px' }}>{item.customerDetail.lastName}</span></td>
                    <td>{item.purchaseTotal}</td>
                    <td>{item.orderDate}</td>
                    <td><ModalStatus item={item}/></td>
                  </tr>
                </>)
            }

          })}


        </table>
        </div>
    </>
  )
}
