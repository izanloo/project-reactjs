import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import WithUser from '../Layouts/WithUser'
import axios from 'axios'
import Cards from "../Components/Cards";
import { Box } from "@mui/material";
import { Linkstyle } from "../Assest/Style/abstracts/Stylecomponent";
import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux/ProductSlice'
import { useSelector } from 'react-redux'

function Home() {
  const product = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const url = 'http://localhost:3002/products';


  function getData() {
    axios({
      url: url,
      method: 'get',
      params: {
        token: 'TOP-SECRET'
      }
    })
      .then(function (response) {
        dispatch(setProduct(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() =>  { getData() }, [])
  return (
    <Box>
      <h2><Linkstyle to='./Category'>دمنوش های گیاهی</Linkstyle></h2>

      {product.product == null ? "loding" :
        <Box textAlign='center'>
            {product.product.slice(0, 6).map((item,i) => {
              if (item.category == 1) {
                return (
                  <Cards key={i} item={item} />

                )
              }
            })}

            <h2><Linkstyle to='./Category'>چای سبز</Linkstyle></h2>
            {product.product.map((item,i) => {
              if (item.category == 2) {
                return (
                  <Cards key={i} item={item} />
                )

              }
            })}
            <h2><Linkstyle to='./Category'>چای سیاه</Linkstyle></h2>
            {product.product.map((item,i) => {
              if (item.category == 3) {
                return (
                  <Cards key={i} item={item} />

                )
              }
            })}
        </Box>


      }


    </Box>
  )
} export default WithUser(Home)
