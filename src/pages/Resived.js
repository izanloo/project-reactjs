import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Resived() {
  const order = useSelector((state) => state.order)
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
            if (item.orderStatus == 2) {
              return (
                <>
                  <tr>
                    <td>{item.customerDetail.firstName}<span style={{ paddingRight: '3px' }}>{item.customerDetail.lastName}</span></td>
                    <td>{item.purchaseTotal}</td>
                    <td>{item.orderDate}</td>
                    <td>بررسی سفارش</td>
                  </tr>
                </>)
            }

          })}


        </table>
        </div>
    </>
  )
}
