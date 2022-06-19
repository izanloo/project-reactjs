import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import axios from 'axios'
import Main from '../Components/Home/Main'
import { Linkstyle,TitleStyle} from "../Assest/Style/abstracts/Stylecomponent";
import { api } from '../services/Config'
import WithUser from '../Layouts/WithUser'
import { setProduct } from '../Redux/ProductSlice'
import Carausell from "../Components/Carausell";

function Home() {
  const dispatch = useDispatch()
  const [category, setCategory] = useState([]);
  useEffect(() => { getData();}, []);
  async function getData() {
    try {
      const category = await api.get("/category");
      const products = await api.get("/products");
      setCategory(category.data);
      dispatch(setProduct(products.data))
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box style={{marginButtom:'10px'}}> 
       <Carausell /> 
      {category == null ? <Navigate to='/' /> :
        category.map((item, i) => (
          <>
            <Linkstyle to='/category' state={{ from: item }}>
              <TitleStyle variant="h4">{item.name}</TitleStyle>
            </Linkstyle>
            <Box  style={{textAlign:'center'}}>
            <Main idCategory={item.id} key={item.id}  />
              </Box>
            </>
        ))
      }
    </Box>
  )
} export default WithUser(Home)
