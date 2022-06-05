import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import WithAdmin from '../Layouts/WithAdmin'
import Resived from './Resived'
import WaitingOrder from '../Components/WaitingOrder'

function OutletOrder() {
    // if(orderRadio == checked){
    //     console.log("checked")
    // }
    const [radioBtn, setRadioBtn] = useState(null);
//   const   handleCheked = e => {
//         const { name, value } = e.target;
//         console.log(name)
//         console.log(value)
//     }
// if (radioBtn == "waiting") {
//     console.log("waiting");
//   } else {
//     console.log("resive");
//   }
let [valueRadio,setValueRadio] = useState("")
function onChangeValue(event) {

    setValueRadio(event.target.value);
   

  }

    return (

        
        <>
         <div onChange={onChangeValue}>

         <input type="radio"  name="orderRadio" value="waiting"  />سفارش های در حال انتظار

<input type="radio" name="orderRadio" value="resive" />سفارش های تحویل داده شده

</div>
{valueRadio == "waiting" ? <WaitingOrder/> : <Resived/>}
            {/* <Link to={`/paneladmin/orders`} ><input type="radio"  name="orderRadio" value="waiting"  /></Link>
            <Link to={`/paneladmin/orders/resived`} ><input type="radio" name="orderRadio" value="resive" /></Link> */}
            <Outlet />
        </>

    )
}
export default WithAdmin(OutletOrder)
