import React, { useState } from 'react'
import { Box } from "@mui/material";
import WithAdmin from '../Layouts/WithAdmin'
import Resived from './Resived'
import WaitingOrder from '../Components/WaitingOrder'

function Orders() {
  let [valueRadio, setValueRadio] = useState("waiting")
  function onChangeValue(event) {
    setValueRadio(event.target.value);
  }
  return (
    <>
      <Box onChange={onChangeValue} m={5}>
        <input type="radio" name="orderRadio" value="waiting" />سفارش های در حال انتظار
        <input type="radio" name="orderRadio" value="resive" />سفارش های تحویل داده شده
      </Box>
      {valueRadio == "waiting" ? <WaitingOrder /> : <Resived />}
    </>
  )
}
export default WithAdmin(Orders)
