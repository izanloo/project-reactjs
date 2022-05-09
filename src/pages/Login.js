import React, { useState, useRef, useEffect } from 'react'
import { Formik, replace } from 'formik';
import { useNavigate } from 'react-router';
import {  useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../Redux/LoginSlice'
import axios from 'axios'

function Login() {
  const [errorlogin, setErorr] = useState({
    usernameErr: '',
    passwordErr: ''
  })
  const [dataAdmin, setAdmin] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const url = 'http://localhost:3002/whoami';

  const getInfo = () => {
    axios.get(url)
      .then(res => setAdmin(res.data))
      .catch(error => console.log(error))
  }
  useEffect(() => { getInfo() }, [])
  
  return (
    <div className='login'>
      <h1>ورود به پنل ادمین</h1>
      <Formik
        initialValues={{ name: '' }}
        validate={values => {
          let errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          else if (values.password.length < 3) {
            errors.password = "password is short"
          }
          return errors;
        }}
        onSubmit={(values) => {
          if (values.username !== dataAdmin.username) {
            setErorr({ usernameErr: "نام کاربری وارد شده اشتباه است" })
          }
          else if (values.password !== dataAdmin.password) {
            setErorr({ passwordErr: "پسورد وارد شده اشتباه است" })

          }
          else if (values.username == dataAdmin.username && values.password == dataAdmin.password) {
            dispatch(login(true))
            navigate('/paneladmin/orders', { replace })
          }


        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <div className="field">
              <input
                type="text"
                name="username"
                className='w-100 p-1'
                placeholder="پست الکترونیک"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
              />
            </div>
            <p className="error">
              {props.errors.username && props.touched.username && props.errors.username}
            </p>
            <p>{errorlogin?.usernameErr}</p>

            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="کلمه عبور"
                className='w-100 position-relative mt-4 p-1 mb-1'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
              />
              <p className="error">
                {props.errors.password && props.touched.password && props.errors.password}
              </p>
              <p>{errorlogin?.passwordErr}</p>

            </div>
            <button type="submit">ورود</button>
            <Link to='/'>بازگشت به سایت</Link>

          </form>
        )}
      </Formik>
    </div>
  )
}
export default Login