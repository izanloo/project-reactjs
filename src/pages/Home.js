import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import WithUser from '../Layouts/WithUser'
import axios from 'axios'
// import Card from "../Components/Card";




function Home() {
const [product,setProduct] = useState()
  const url = 'http://localhost:3002/products';
  function getData() {
    axios({
      url: url,
      method: 'get',
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => { 
    axios({
      url: url,
      method: 'get',
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  



   }, [])
  return ( 
    < >
      <h2><Link to='./Category'>دمنوش های گیاهی</Link></h2>

      {product == null ? "loding": 
      <div>
         <p style={{display:'flex'}}>
           {product.slice(0,6).map((item) => {
          if (item.category == 1) {
              return(
                  <div >
                    <div >
                <p>{item.name}</p>
                <img  className="productImg"  src={item.images}/>
                <p>{item.price}</p>
                  </div>
                  </div>
              )
          }
        })}
        </p>
        <p style={{display:'flex'}}>
          
      <h2><Link to='./Category'>چای سبز</Link></h2>
           {product.slice(0,6).map((item) => {
          if (item.category == 2) {
              return(
                  <div >
                    <div >
                <p>{item.name}</p>
                <img className="productImg"   src={item.images}/>
                <p>{item.price}</p>
                  </div>
                  </div>
              )
          }
        })}
        </p>
        <p style={{display:'flex'}} >
           {product.slice(10,16).map((item) => {
          if (item.category == 2) {
              return(
                  <div >
                    <div >
                <p>{item.name}</p>
                <img  className="productImg" src={item.images}/>
                <p>{item.price}</p>
                  </div>
                  </div>
              )
          }
        })}
        </p>
        </div>
        
        
        }

 
     </>
  )
} export default WithUser(Home)
