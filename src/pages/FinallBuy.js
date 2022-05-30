import React, { useState } from 'react'
import WithUser from '../Layouts/WithUser'
import { Formik } from 'formik';
import { Loginstyle } from '../Assest/Style/abstracts/Stylecomponent';
import { Box } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'


function FinallBuy() {
  const [newUser,setNewuser] =useState({})
  const navigate = useNavigate()

  return (
    <Loginstyle>
      <Formik
        initialValues={{name: '',family:'', address: '',tel:'',dateResive:'' }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          else{
              setNewuser({ ...newUser, 'name':values.name })
          }
          if (!values.family) {
            errors.family = 'Required';
          }
          else{
            setNewuser({ ...newUser, 'family':values.family })
        }
          if (!values.address) {
            errors.address = 'Required';
          }
          else{
            setNewuser({ ...newUser, 'address':values.address })
        }
          if (!values.tel) {
            errors.tel = 'Required';
          }
          else{
            setNewuser({ ...newUser, 'tel':values.tel })
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
          if (localStorage.getItem("userBuy") === null) {
            localStorage.setItem('userBuy', JSON.stringify([newUser]));
    
          } else {
            const previousData = JSON.parse(localStorage.getItem("userBuy"));
            localStorage.setItem('userBuy', JSON.stringify([...previousData,newUser]));
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
                  name="name"
                  className='w-100 p-1'
                  placeholder="نام "
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                />
              </div>
              <p className="error">
                {props.errors.name && props.touched.name && props.errors.name}
              </p>
              <div className="field">
                <input
                  type="text"
                  name="family"
                  className='w-100 p-1'
                  placeholder="نام خانوادگی "
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.family}
                />
              </div>
              <p className="error">
                {props.errors.family && props.touched.family && props.errors.family}
              </p>
              <div className="field">
                <input
                  name="address"
                  placeholder=" آدرس"
                  className='w-100 position-relative mt-4 p-1 mb-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.address}
                />
              </div>
                <p className="error">
                  {props.errors.address && props.touched.address && props.errors.address}
                </p>
                <div className="field">
                <input
                  name="tel"
                  type="tel"
                  placeholder=" تلفن همراه"
                  className='w-100 position-relative mt-4 p-1 mb-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.address}
                />
              </div>
                <p className="error">
                  {props.errors.address && props.touched.address && props.errors.address}
                </p>
                <div className="field">
                <input
                  name="dateResive"
                  placeholder=" تاریخ تحویل"
                  className='w-100 position-relative mt-4 p-1 mb-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.address}
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