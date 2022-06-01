import React, { useState } from 'react'
import WithUser from '../Layouts/WithUser'
import { Formik } from 'formik';
import { Loginstyle } from '../Assest/Style/abstracts/Stylecomponent';
import { Box } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
// import persian from "react-date-object/calendars/persian"
// import persian_fa from "react-date-object/locales/persian_fa"


function FinallBuy() {

// const date = new DateObject({ calendar: persian, locale: persian_fa })

// console.log(date.format()) //۱۴۰۰/۰۴/۱۳
// console.log(date.month.name) //تیر
  const [newUser,setNewuser] =useState({})
  const navigate = useNavigate()

  return (
    <Loginstyle>
      <Formik
        initialValues={{firstName: '',lastName:'', Address: '',phone:'',dateResive:'' }}
        validate={values => {
          let errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          else{
              setNewuser({ ...newUser, 'firstName':values.firstName })
          }
          if (!values.lastName) {
            errors.lastName = 'Required';
          }
          else{
            setNewuser({ ...newUser, 'lastName':values.lastName })
        }
          if (!values.Address) {
            errors.Address = 'Required';
          }
          else{
            setNewuser({ ...newUser, 'Address':values.Address })
        }
          if (!values.phone) {
            errors.phone = 'Required';
          }
          else{
            setNewuser({ ...newUser, 'phone':values.phone })
        }
          if (!values.dateResive) {
            errors.dateResive = 'Required';
          }
          else{
            setNewuser({ ...newUser, 'dateResive':values.dateResive })
        }
         console.log(newUser) 
        }}
        onSubmit={(values) => {
          if (localStorage.getItem("customer") === null) {
            localStorage.setItem('customer', JSON.stringify([newUser]));
    
          } else {
            // localStorage.removeItem("customer")
            // localStorage.setItem('customer', JSON.stringify([newUser]));

            const previousData = JSON.parse(localStorage.getItem("customer"));
            localStorage.setItem('customer', JSON.stringify([...previousData,newUser]));
          }
          return navigate('/payment')
        }}
      >
        {props => (
          <Box sx={{ pt: '120px', maxWidth: { xs: '100%' } }}>
            <form onSubmit={props.handleSubmit} >
              <h1>نهایی کردن خرید</h1>
              <div className="field">
                <input
                  type="text"
                  name="firstName"
                  className='w-100 p-1'
                  placeholder="نام "
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.firstName}
                />
              </div>
              <p className="error">
                {props.errors.firstName && props.touched.firstName && props.errors.firstName}
              </p>
              <div className="field">
                <input
                  type="text"
                  name="lastName"
                  className='w-100 p-1'
                  placeholder="نام خانوادگی "
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.lastName}
                />
              </div>
              <p className="error">
                {props.errors.lastName && props.touched.lastName && props.errors.lastName}
              </p>
              <div className="field">
                <input
                  name="Address"
                  placeholder=" آدرس"
                  className='w-100 position-relative mt-4 p-1 mb-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.Address}
                />
              </div>
                <p className="error">
                  {props.errors.Address && props.touched.Address && props.errors.Address}
                </p>
                <div className="field">
                <input
                  name="phone"
                  type="phone"
                  placeholder=" تلفن همراه"
                  className='w-100 position-relative mt-4 p-1 mb-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.phone}
                />
              </div>
                <p className="error">
                  {props.errors.phone && props.touched.Address && props.errors.phone}
                </p>
                <div className="field">
                <input
                  name="dateResive"
                  placeholder=" تاریخ تحویل"
                  className='w-100 position-relative mt-4 p-1 mb-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.dateResive}
                />
                
              </div>
                <p className="error">
                  {props.errors.dateResive && props.touched.dateResive && props.errors.dateResive}
                </p>
              <button type="submit">پرداخت</button>

            </form>

          </Box>
        )}
      </Formik>
    </Loginstyle>
  )
}
export default WithUser(FinallBuy)