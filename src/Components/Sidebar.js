import React, { useState, useEffect } from 'react'
import WithUser from '../Layouts/WithUser'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Box } from "@mui/material";
import {api} from '../services/Config'




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


  const [category, setCategory] = useState([]);
  useEffect(() => {

    getCategory();
  }, []);
  async function getCategory() {
    try {
      const category = await api.get("/category");
      setCategory(category.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <Box>

    {product == null ? "loding" :
      <Box textAlign='center'>
        <h4>{category[0].name}</h4>
          {product.map((item,i) => {
            if (item.category == 1) {
              return (
                <p key={i}>{item.name}</p>
              )
            }
          })}

<h4>{category[1].name}</h4>
          {product.map((item,i) => {
            if (item.category == 2) {
              return (
                <p key={i}>{item.name}</p>
              )
            }
          })}

                  <h4>{category[0].name}</h4>
          {product.map((item,i) => {
            if (item.category == 1) {
              return (
                <p key={i}>{item.name}</p>
              )
            }
          })}

      </Box>


    }


  </Box>


  )
}
export default Sidebar



