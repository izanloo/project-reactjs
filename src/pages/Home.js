import React, { useEffect, useState, useContext } from "react";
import {  Navigate } from 'react-router-dom'
import WithUser from '../Layouts/WithUser'
import axios from 'axios'
import {api} from '../services/Config'
import { Box } from "@mui/material";
import { Linkstyle } from "../Assest/Style/abstracts/Stylecomponent";
import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux/ProductSlice'
import Main from '../Components/Home/Main'


function Home() {
  const dispatch = useDispatch()
  const url = 'http://localhost:3002/products';

  function getProduct() {
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
  useEffect(() => { getProduct() }, [])


  /////////////////////////////////////////////////////
  const [category, setCategory] = useState([]);
  useEffect(() => {

    getData();
  }, []);
  async function getData() {
    try {
      const category = await api.get("/category");
      setCategory(category.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Box >
      {category == null ? <Navigate to='/' /> :
        category.map((item,i) => (
          <>
            <Linkstyle to='/category'   state={{ from: item }}>
             <h2> {item.name}</h2>
            </Linkstyle>
            <Main idCategory={item.id} key={item.id} sx={{color:'red'}} /></>
        ))
      }
    </Box>
  )
} export default WithUser(Home)
