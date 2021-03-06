import React from 'react'
import User from '../Layouts/WithUser'
import Sidebar from '../Components/Sidebar'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import { CategoryStyle } from '../Assest/Style/abstracts/Stylecomponent';
import Cards from '../Components/Home/Cards'


  function Category() {
    const product = useSelector((state) => state.product)
    const location = useLocation()
    const { from } = location.state
    return (
      <CategoryStyle className='category'>
        {product.product == null ? <Navigate to='/category' /> :
          <>
            <h1>{from.name}</h1>
            {product.product.map((item, i) => {
              if (item.category == from.id) {
                return (
                    <Cards item={item} key={i}  />
                )
              }
  
            })}
          </>
        }
      </CategoryStyle>
  
    )
  }
export default User(Category)
