import React, { useState, useEffect } from "react";
import Admin from "../../Layouts/WithAdmin"
import {
  Box,
  Grid,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import TableOrders from "./Table";
import axios from "axios"

function WaitingOrder() {
  const [row, setRow] = useState([]);
  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/orders?orderStatus=${selectedValue}`)
      .then((res) => setRow(res.data));
  }, [selectedValue]);


  return (
    <Grid container sx={{textAlign:'center',mt:5}} >
      <Grid item xs={12} md={8}>
        <FormControl xs={{display:'contents'}} md={{display:'flex'}}>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"  defaultValue="1">
            <FormControlLabel onChange={handleChange} value="1" control={<Radio />} label="سفارشات تحویل داده شده"/>
            <FormControlLabel onChange={handleChange} value="2" control={<Radio />} label="سفارشات در حال تحویل "/>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8} sx={{margin: '48px',justifyContent: 'center'}}>
        <TableOrders row={row}  />
      </Grid>
    </Grid>
  );
}
export default Admin(WaitingOrder) ;

