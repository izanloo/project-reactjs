import React from 'react'
import WithUser from '../Layouts/WithUser'
import { useNavigate } from 'react-router-dom'

 function Cart() {
  const navigate = useNavigate()
  function handlePyment(){
   return navigate('/finalbuy')
  }
  return (
    <div>
        <p>سبد خرید</p>
        <p>جدول/ لیستی از سبد خرید</p>
        <button  onClick={handlePyment}>نهایی کردن خرید</button>
    </div>
  )
}
export default WithUser(Cart)
