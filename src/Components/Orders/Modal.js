import React, { useEffect } from "react";
import { Box, Grid, Button, Typography, Modal } from "@mui/material";
import TableOrderModal from "./TableModal.js";
import {gatAllProduct} from "../../services/Config";
import { ToastContainer, toast } from "react-toastify";
import {api} from '../../services/Config'
import { ACCESS_TOKEN } from "../../services/Config";
import { convertTimeStampToDate } from "../convetTime";
import {NeonStyle,MOdalOrderStyle} from '../../Assest/Style/abstracts/Stylecomponent';

export default function ModalOrder(props) {
  let data = props.data;
  let handleChange = props.handleChange;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [product, setProduct] = React.useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const products = await gatAllProduct();
      setProduct(products.data);
    } catch (error) {
      console.log(error)
    }
  }

  async function changeStatus() {
    try {
      data.orderStatus = "1";
      const response = await UpdateOneOrder(data.id, data);
      if (response.status == 200) {
        toast.info("وضعیت سفارش تغییر کرد");
        handleChange("1");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Box>
      <ToastContainer sx={{backgroundColor:'#7ab6c6'}} />
      <Button
        sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
        variant="text"
        onClick={handleOpen}
      >
        بررسی سفارشات
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MOdalOrderStyle >
          <NeonStyle to='/' style={{color: 'black', textDecoration: 'none'}}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h6"
            sx={{ fontFamily: " IRANSans-web", textAlign: "center" }}
            >
             وضعیت سفارش
          </Typography>
            </NeonStyle>
          <Grid item xs={12} mt={2}>
            <label>
              نام کاربر : <span style={{marginLeft:'5px'}}>{data.customerDetail.firstName}</span>{data.customerDetail.lastName} 
            </label>
          </Grid>
          <Grid item xs={12} mt={2}>
            <label>آدرس : {data.customerDetail.Address}</label>
          </Grid>
          <Grid item xs={12} mt={2}>
            <label>تلفن : {data.customerDetail.phone}</label>
          </Grid>
          <Grid item xs={12} mt={2}>
            <label>
              زمان تحویل : {convertTimeStampToDate(data.delivery)} {}
            </label>
          </Grid>
          <Grid item xs={12} mt={2}>
            <label>زمان سفارش : {convertTimeStampToDate(data.createdAt)}</label>
          </Grid>
          <Grid>
            <TableOrderModal data={data} product={product} />
          </Grid>
          <Grid align="center">
            {data.orderStatus == "2" ? (
              <Button
                sx={{
                  backgroundColor: "#62bad0",
                  mt: 2,
                  px: 3,
                  py:1,
                  fontFamily: " IRANSans-web",
                  color:'black'
                }}
                variant="outlined"
                onClick={changeStatus}
              >
                تحویل شد
              </Button>
            ) : (
              ""
            )}
          </Grid>
        </MOdalOrderStyle>
      </Modal>
    </Box>
  );
}

export  function UpdateOneOrder(selectId,data){
  const header={
       headers:{
           Authorization:`${ACCESS_TOKEN}`,
       },

   }
  return api.put(`/orders/${selectId}`,data,header)
}