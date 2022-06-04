import  React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';
import { Cardstyle } from '../../Assest/Style/abstracts/Stylecomponent';
import {baseURL} from '../../services/Config'

export default function Cards(props) {
  const { item } = props
  return (
    <>
    <Box   sx={{width:{xs:'90%' , sm:'30%' }, display:{xs:'block' , sm:'inline-block;'}}} >
      <Cardstyle >
        <CardActionArea  >
        <Link to={`/detail/${item.id}`}     >
          <CardMedia
            component="img"
            image={`${baseURL}/files/${item.image}`}
            alt="دمنوش گیاهی"
          />
              </Link>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              قیمت : {item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Cardstyle>
    </Box>
    </>


  


)}
