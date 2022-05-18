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



function Detail() {
  const cardid = useSelector((state) => state.cardid)
  const product = useSelector((state) => state.product)
  const [categroys, setCategorys] = useState([])


  const navigate = useNavigate()
  function handleAdd() {
    return navigate('/cart')
  }
  console.log(cardid.cardid)


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

  return (
    <>
      {product.product == null ? <Navigate to='/' /> :
        <Box textAlign='center' sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center' }}>
          {product.product.map((item, i) => {
                      
            if (item.id == cardid.cardid) {
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





