import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import CheckLogin from "../context/checkLogin";
// import { useDispatch } from "react-redux";
// import { setUser } from "../store/UserSlice";
import { Link } from 'react-router-dom'
import WithUser from '../Layouts/WithUser'
import axios from 'axios'
import Card from "../Components/Card";
import { valueContext } from '../Context/Contexts'

function Home() {
  const [products, setProduct] = useState()
  const { data, setData } = useContext(valueContext);

  // const url = 'http://localhost:3002/orders';
  // function getData() {
  //   axios({
  //     url: 'http://localhost:3002/orders',
  //     method: 'get',
  //     params: {
  //       token: 'TOP-SECRET'
  //     }
  //   })
  //     .then(function (response) {
  //       setData(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // useEffect(() => { getData() }, [])
  // console.log(data != null ? data : "kkk")
  return (
    <div>
      <p><Link to='./Category'> دمنوش های گیاهی</Link></p>
      {/* <p>{products[0]?.name}</p> */}
      {/* {product.map((products, i) => {
          return (
           <Card products={products} key={i} />
          )
        })} */}

      {/* <p>
          {Object.keys(products).map((item, i) => (
            <p key={i} >
              {item}
            </p>
          ))
          }
        </p> */}

      <p><Link to='/detail'>عکس محصولات</Link></p>
    </div>
  )
} export default WithUser(Home)
