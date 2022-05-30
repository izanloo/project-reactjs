import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { api } from '../services/Config'
import User from '../Layouts/WithUser'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TextFild } from '../Assest/Style/abstracts/Stylecomponent'
import { CardActionArea } from '@mui/material';


const Detail = () => {
  let params = useParams();
  const [products, setproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [nameCategory, setNameCategory] = useState({})
  const [valueInput, setValueinput] = useState()
  const [massege, setMassage] = useState("")

  let navigate = useNavigate()

  useEffect(() => {
    api.get(`/products/${params.productId}`).then(product => setproducts(product.data))
      .catch(error => console.log(error))
    api.get(`/category`).then(category => setcategory(category.data))
      .catch(error => console.log(error))
  }, [])

  const categoryId = products.category

  useEffect(() => {
    category.map(categories => {
      if (categories.id === categoryId) {
        setNameCategory(categories)
      }
    })
  }, [category]);


console.log(valueInput)
  const handleAdd = () => {
    if (valueInput > parseInt(products.count)) {
      setMassage("موجودی کم است")
    }
     if(valueInput <= 0 ){
      setMassage("عدد وارد شده نادرست است")
    }
  

    if (valueInput <= parseInt(products.count)) {
      let items = { 'valueInput': valueInput }
      let newList = Object.assign(products, items)
      if (localStorage.getItem("cart")) {
        const LocalStorage = JSON.parse(localStorage.getItem("cart"));
        const findItem = LocalStorage.findIndex(i => i.id == newList.id)
        if (findItem >= 0) {
          LocalStorage.splice(findItem, 1)
          localStorage.setItem('cart', JSON.stringify(LocalStorage));
          const newLocal = JSON.parse(localStorage.getItem("cart"));
          localStorage.setItem('cart', JSON.stringify([...newLocal, newList]));
        }
        localStorage.setItem('cart', JSON.stringify([...LocalStorage, newList]));
      }
      else {
        localStorage.setItem('cart', JSON.stringify([newList]));
      }
      return navigate('/cart')
    }
  }


  return (
    <Box textAlign='center' sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center' }}>

      <Card sx={{ maxWidth: 345, mt: 15 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="281"
            image={`http://localhost:3002/files/${products.images}`} alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {products.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box sx={{ paddingTop: { xs: '5%', sm: '15%' }, width: { xs: '100%', sm: '50%' } }} >
        <Box>{products.description}</Box>
        <TextFild type="number" min="1" max="100" onChange={(e) => setValueinput(e.target.value)} />
        <Box>موجودی انبار:{products.count}</Box>

        {massege != null ? <p>{massege}</p> : null}
        <Button onClick={handleAdd} variant="contained" color="success">
          نهایی کردن خرید
        </Button>
      </Box>
    </Box>
  )

}

export default User(Detail);
