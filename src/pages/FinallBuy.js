import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { useSelector, useDispatch } from "react-redux";
import WithUser from "../Layouts/WithUser";
import finallBuy from '../Assest/Images/finallBuy.png';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  firstName: yup.string().required(" فیلد ضروری است"),
  lastName: yup.string().required(" فیلد ضروری است"),
  billingAddress: yup.string().required(" فیلد ضروری است"),
  phone: yup.string().matches(phoneRegExp, "شماره همراه درست وارد نشده"),
});

function FinallBuy() {


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      billingAddress: "",
      shippingAddress: "",
      phone: "",
      dateDeliver: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const customer = {
        "orderStatus": "1",
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        billingAddress: values.billingAddress,
        "delivery": values.dateDeliver,
      };
      localStorage.setItem('customer', JSON.stringify([customer]));
      window.location.replace("http://127.0.0.1:5500/public/payment.html");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} >
      <Grid container sx={{ padding: '41px', display: 'block' }} align="center">
        <Grid >
          <img src={finallBuy} alt="فرم پرداخت" style={{ height: '185px' }} />
        </Grid>
        <Grid item justifyContent="center" alignItems="center">
          <Grid item  >
            <TextField
              margin="dense"
              size="small"
              sx={{ width: { xs: '100%', sm: '50%' } }}
              required
              id="firstName"
              name="firstName"
              autoComplete="firstName"
              color="success"
              placeholder="نام"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              helperText={
                formik.errors.firstName &&
                formik.touched.firstName &&
                formik.errors.firstName
              }
            />
          </Grid>
        </Grid>
        <Grid item alignItems="center" >
          <Grid item >
            <TextField
              sx={{ width: { xs: '100%', sm: '50%' } }}
              margin="dense"
              size="small"
              required
              id="lastName"
              name="lastName"
              placeholder=" نام خانوادگی  "
              autoComplete="lastName"
              color="success"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              helperText={
                formik.errors.lastName &&
                formik.touched.lastName &&
                formik.errors.lastName
              }
            />
          </Grid>
        </Grid>
        <Grid item alignItems="center"  >
          <Grid item >
            <TextField
              sx={{ width: { xs: '100%', sm: '50%' } }}
              margin="dense"
              size="small"
              required
              id="billingAddress"
              name="billingAddress"
              placeholder="آدرس"
              multiline
              autoComplete="billingAddress"
              color="success"
              onChange={formik.handleChange}
              value={formik.values.billingAddress}
              helperText={
                formik.errors.billingAddress &&
                formik.touched.billingAddress &&
                formik.errors.billingAddress
              }
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: { xs: '100%', sm: '50%' } }}
            margin="dense"
            size="small"
            required
            id="phone"
            name="phone"
            autoComplete="phone"
            color="success"
            placeholder="تلفن همراه"
            onChange={formik.handleChange}
            value={formik.values.phone}
            helperText={
              formik.errors.phone &&
              formik.touched.phone &&
              formik.errors.phone
            }
          />
        </Grid>
        <Grid item alignItems="center"
          sx={{ width: { sx: '100%', sm: '50%' }, marginTop: '5px', display: 'flex', justifyContent: 'space-between' }}>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ تحویل"
            calendarPosition="bottom-right"
            weekPicker={false}
            onChange={(e) => formik.setFieldValue("dateDeliver", e.unix * 1000, true)}
            value={formik.values.dateDeliver}
            helperText={
              formik.errors.dateDeliver &&
              formik.touched.dateDeliver &&
              formik.errors.dateDeliver
            }
            minDate={new DateObject({ calendar: persian })}
          />
          <Button variant="contained" type="submit">پرداخت </Button>
        </Grid>
      </Grid>
    </form>
  );
}
export default WithUser(FinallBuy);
