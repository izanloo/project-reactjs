import React,{useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import WithUser from '../Layouts/WithUser'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextFild } from '../Assest/Style/abstracts/Stylecomponent'
import axios from 'axios'
import { useLocation } from 'react-router-dom'




function Detail() {
  const [categroys, setCategorys] = useState([])
  const [product, setProduct] = useState([])
  const location = useLocation()
  const { from } = location.state

  const navigate = useNavigate()
  function handleAdd() {
    return navigate('/cart')
  }


//request for get category name
  useEffect(() => {
    axios({
      url: 'http://localhost:3002/category',
      method: 'get',

    })
      .then(function (response) {
        setCategorys(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])


  useEffect(() => {
    axios({
      url: 'http://localhost:3002/products',
      method: 'get',

    })
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  return (
    <>
      {product == null ? <Navigate to='/' /> :
        <Box textAlign='center' sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center' }}>
          {product.map((item, i) => {
                      
            if (item.id == from.id) {
              return (
                <>
                  <Card sx={{ maxWidth: 345, mt: 15 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="281"
                        image={`http://localhost:3002${item.thumbnail}`} alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Box sx={{ paddingTop: { xs: '5%', sm: '15%' }, width: { xs: '100%', sm: '50%' } }} >
                    <Box>{item.description}</Box>
                    <Button onClick={handleAdd} variant="contained" color="success">
                      نهایی کردن خرید
                    </Button>
                    <TextFild type="number" min="1" max="100" />


                  </Box>

                </>
             
              )
           
            }

          })
          }


        </Box>
      }


    </>
  )
}
export default WithUser(Detail)





