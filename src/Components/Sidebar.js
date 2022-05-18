import React, { useEffect } from "react";
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
  const [product,setProduct]  = useState([])
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

      {product == null ? "loding" :
        <Box textAlign='center'>
            {product.map((item,i) => {
              if (item.category == 1) {
                // console.log(Object.keys(item).length)
                return (

                  <p key={i} item={item}>{item.name}</p>
                )
              }
              if (item.category == 2) {
                // console.log(Object.keys(item).length)
                return (

                  <p key={i} item={item}>{item.name}</p>
                )
              
              }
              if (item.category == 3) {
                // console.log(Object.keys(item).length)
                return (

                  <p key={i} item={item}>{item.name}</p>
                )
              }
            })}

        </Box>


      }


    </Box>
  )
} export default WithUser(Home)
