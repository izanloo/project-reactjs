import React, { useState, useEffect } from 'react'
import WithUser from '../Layouts/WithUser'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Box } from "@mui/material";




function Sidebar() {
  // const product = useSelector((state) => state.product)
  const [product,setProduct]  = useState([])
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
  useEffect(() =>  { getData() }, [])



  return (

    <Box>

    {product == null ? "loding" :
      <Box textAlign='center'>
          {product.map((item,i) => {
            if (item.category == 1) {
              return (

                <p key={i}>{item.name}</p>
              )
            }
            if (item.category == 2) {
              return (

                <p >{item.name}</p>
              )
            
            }
            if (item.category == 3) {
              return (

                <p>{item.name}</p>
              )
            }
          })}

      </Box>


    }


  </Box>


  )
}
export default Sidebar



