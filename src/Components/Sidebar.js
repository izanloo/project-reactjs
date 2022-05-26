import React, { useState, useEffect } from 'react'
import WithUser from '../Layouts/WithUser'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Box } from "@mui/material";
import {Link} from 'react-router-dom'
import {api} from '../services/Config'




function Sidebar() {
  // const product = useSelector((state) => state.product)
  const [product,setProduct]  = useState([])
  const [category,setCategoryId]  = useState([])
  // const url = 'http://localhost:3002/products';
  // function getData() {
  //   axios({
  //     url: url,
  //     method: 'get',
     
  //   })
  //     .then(function (response) {
  //     setProduct(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  // useEffect(() =>  { getData() }, [])
  async function getCategory() {
    try {
      const category = await api.get("/category");
      setCategoryId(category.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>  { getCategory() }, [])
  return (

    <Box>
      {category == null ? "loding" :
      <>{category.map((item,i)=>
<Link to='/category'  state={{ from: item }} sx={{display:'flex',width:'30%',justifyContent:' space-between'}}>{item.name}</Link>
        )}</>
      }

    {/* {product == null ? "loding" :
      <Box textAlign='center'>

          {product.map((item,i) => {
            if (item.category == 1) {
              return (

                <p key={i}>{item.name}</p>
              )
            }
       
          })}
          {product.map((item,i) => {
            if (item.category == 2) {
              return (

                <p key={i}>{item.name}</p>
              )
            }
       
          })}
          {product.map((item,i) => {
            if (item.category == 3) {
              return (

                <p key={i}>{item.name}</p>
              )
            }
       
          })}
      </Box>


    }
 */}

  </Box>


  )
}
export default Sidebar



