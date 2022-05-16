import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios'
import { setCategoryId } from '../../Redux/CategoryIdSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'



const url = 'http://localhost:3002/products'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




function getStyles(item, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MultipleSelectChip() {
  const [category, setCategory] = useState([])
  const dispatch = useDispatch()
  //requset for show category in selectBox
  useEffect(() => {
    axios.get('http://localhost:3002/category')
      .then(function (response) {
        setCategory(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])



  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">دسته بندی</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {category.map((item, i) => (
            <MenuItem
              key={i}
              value={item.name}
              style={getStyles(item, personName, theme)}
              onClick={(e) => dispatch(setCategoryId(item.id))}
            >
              {item.name}

            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default function FormPropsTextFields() {
  const categoryId = useSelector((state) => state.categoryId)
  const [newImage, setNewImage] = useState()
  const [newProduct, setNewproduct] = React.useState({
    nameProduct: '',
    description: '',
  })




  function handlepost() {
    const formData = new FormData();
    formData.append("thumbnail", newImage);
    axios.post(url,{
        'nameProduct': newProduct.nameProduct,
        'description': newProduct.description,
        'category': categoryId.categoryId, 
    })
  }


  function handleChange(e) {
    setNewproduct({ ...newProduct, [e.target.name]: e.target.value })

  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>عکس کالا</Typography>
      <Button variant="contained" component="label" color="primary">
        Upload a image
        <input type="file" id="file" accept="image/*" hidden onChange={(e) => setNewImage(e.target.files[0])} />
      </Button>
      <Typography>نام کالا</Typography>
      <TextField name='nameProduct' onChange={handleChange} />
      <Typography>دسته بندی</Typography>
      <MultipleSelectChip style={{ width: '100%' }} />
      <Typography>توضیحات:</Typography>
      <TextareaAutosize
        name="description"
        onChange={handleChange}
        aria-label="minimum height"
        minRows={5}
        style={{ width: '100%' }}
      />
      <Button variant="contained" color="success" onClick={handlepost}>
        ذخیره
      </Button>
    </Box>
  );
}
