import React, { useState } from 'react'
import { Formik } from 'formik';
import { useNavigate, useLocation} from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../Redux/LoginSlice'
import { Loginstyle } from '../Assest/Style/abstracts/Stylecomponent';
import axios from 'axios'
import { Box } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux'


function Login() {
  const Dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const state = useSelector((state) => state.admin.isLogin)
  const ACCESS_TOKEN="";
  const redirectaddress = location.state?.from.pathname || '/paneladmin/orders'


   
  const [errorlogin, setErorr] = useState({
    usernameErr: '',
    passwordErr: ''
  })

  return (
    <Loginstyle>
      <Formik
        initialValues={{username: '', password: '', }}
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
          axios
          .post('http://localhost:3002/auth/login',values)
    .then((res) => {
      if (res.status == 200) {
        Dispatch( login(true))

       localStorage.setItem('ACCESS_TOKEN',res.data.token)
        navigate(redirectaddress,{replace:true})
      }
    })
    .catch(() => {
      alert("با این نام کاربری کاربری ثبت نشده");
    });
        }}
      >
        {props => (
          <Box sx={{ pt: '120px', maxWidth: { xs: '100%' } }}>
            <form onSubmit={props.handleSubmit} >
              <div className="field">
                <input
                  type="text"
                  name="username"
                  className='w-100 p-1'
                  placeholder="نام کاربری"
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

          </Box>
        )}
      </Formik>
    </Loginstyle>
  )
}
export default Login