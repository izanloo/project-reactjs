import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import WithUser from '../Layouts/WithUser'
import { useSelector } from 'react-redux'


 function Detail() {
  const cardid = useSelector((state) => state.cardid)
  const product = useSelector((state) => state.product)



  const navigate = useNavigate()
   function handleAdd(){
    return navigate('/cart')
   }
  return (
    <div>




    {product.product == null ? "loding" :
        <div textAlign='center'>
            {product.product.map((item,i) => {
          
               
              if (item.id == cardid.cardid) {
                return (
                  <>
                  
                  <Card sx={{ maxWidth: 345, mt:15 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="281"
                      image={`http://localhost:3002${item.thumbnail}`}                      alt="green iguana"
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
                  <div>{item.description}</div>
                  </>

                )
              }
            })
          }

            </div>
          }


        <button  onClick={handleAdd}>افزودن به سبد خرید</button>
    </div>
  )
}
export default WithUser(Detail)





