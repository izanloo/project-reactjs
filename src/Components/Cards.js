
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import { Cardstyle } from '../Assest/Style/abstracts/Stylecomponent';

export default function Cards(props) {
  const { item } = props

  return (
    <Box  sx={{width:{xs:'90%' , sm:'30%' }, display:{xs:'block' , sm:'inline-block;'}}}>
      <Cardstyle >
        <CardActionArea  >
          <CardMedia
            component="img"
            height="140"
            image={`http://localhost:3002/files/${item.thumbnail}`}
            alt="دمنوش گیاهی"
          />
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
  );
}
