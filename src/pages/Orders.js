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
      <WaitingOrder />
    </>
  )
}
export default Orders
