import React ,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {Box, Typography} from "@mui/material";
import NumberFormat from 'react-number-format';
import Button from "@mui/material/Button";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import {api} from '../services/Config'
import User from '../Layouts/WithUser'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TextFild } from '../Assest/Style/abstracts/Stylecomponent'
import { CardActionArea } from '@mui/material';


const Detail = () => {
    let params = useParams();
    const [products,setproducts] = useState([]);
    const [category,setcategory] = useState([]);
    const [nameCategory, setNameCategory] = useState({})
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        api.get(`/products/${params.productId}`).then(product =>setproducts(product.data))
        .catch(error => console.log(error))
        api.get(`/category`).then(category =>setcategory(category.data))
        .catch(error => console.log(error))
    },[])

    const categoryId =products.category

    useEffect(() => {
        category.map(categories => {
            if(categories.id === categoryId) {
                setNameCategory(categories)
            }
        })
    },[category]);
    

    const handleCount = (e) => {
        setCount(e.target.value)
    }

    const maxLengthCheck = (e, countProduct) => {
        if (+e.target.value > countProduct) {
            return e.target.value = countProduct
        } else if (e.target.value < 0) {
            return e.target.value = 0
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
                <Button variant="contained" color="success">
                  نهایی کردن خرید
                </Button>
                <TextFild type="number" min="1" max="100"/>

              </Box>


       
        

    
      


    </Box>
    )
    
}

export default User(Detail) ;
