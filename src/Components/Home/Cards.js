import  React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import { Cardstyle } from '../../Assest/Style/abstracts/Stylecomponent';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setIdcard } from '../../Redux/CardidSlice'
import { Link } from "react-router-dom";


export default function Cards(props) {
  const { item } = props
  const dispatch = useDispatch()
  const cardid = useSelector((state) => state.cardid)

  // if(cardid.cardid >0){
  //   return <Navigate to="/detail" replace={false}/>
  // }
  console.log(cardid.cardid)

  return (
    <>
    <Box  sx={{width:{xs:'90%' , sm:'30%' }, display:{xs:'block' , sm:'inline-block;'}}} >
      <Cardstyle  onClick={()=>dispatch(setIdcard(item.id))}>
        <CardActionArea  >
        <Link to='/detail'  >
          <CardMedia
            component="img"
            height="140"
            image={`http://localhost:3002${item.thumbnail}`}
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
