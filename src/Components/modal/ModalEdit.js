import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Formik } from 'formik';
import { useNavigate, useLocation } from 'react-router';
// import { Loginstyle } from '../Assest/Style/abstracts/Stylecomponent';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ModalStyle } from '../../Assest/Style/abstracts/Stylecomponent';
import { Navigate } from 'react-router-dom'
import { api } from '../../services/Config'
import axios from 'axios'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const { value } = props

  const [valueInput, setValueInput] = useState({})
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  // const [inputPervio, SetInputPervio] = useState([])
  let namePrevio = ""
  let desPrevio = ""
  let imgPrevio = ""
  products.map((item, i) => {
    if (item.id == value) {
      imgPrevio = item.image
      namePrevio = item.name
      desPrevio = item.description
    }})
  //requset for show category in selectBox
  useEffect(() => {

    getData();
  }, []);
  async function getData() {
    try {
      const category = await api.get("/category");
      const products = await api.get("/products");
      setCategory(category.data);
      setProducts(products.data)
    } catch (error) {
      console.log(error);
    }
  }


  
  const [errorlogin, setErorr] = useState({
    usernameErr: '',
    passwordErr: ''
  })
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalStyle>
      <Button variant="outlined" onClick={handleClickOpen}>
        ویرایش
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ nameProduct: '', category: '', description: '' }}
            validate={values => {
              let errors = {};
              if (!values.nameProduct) {
                errors.nameProduct = 'Required';
              } else {
                setValueInput({ ...valueInput, ['nameProduct']: values.nameProduct })
              }
              if (!values.category) {
                errors.category = 'Required';
              }

              if (!values.description) {
                errors.description = 'Required';
              } else {
                setValueInput({ ...valueInput, ['description']: values.description })

              }

              return errors;
              //  const handleChange = (e) =>{
              //   setValueInput({ ...valueInput, [e.target.name]: e.target.value })

              // }
            }}
            onSubmit={(values) => {
              console.log(value)
              products.map((item, i) => {
                if (item.id == value) {

                  let formData = new FormData()
                  let imagefile = document.querySelector('#file')
                  formData.append('image', imagefile.files[0])
                  axios({
                    method: 'post',
                    data: formData,
                    url: 'http://localhost:3002/upload',
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    },
                    params: {
                      token: 'TOP-SECRET'
                    }
                  }
                  )
              
                    .then((res) => {
                      axios({
                        method: 'patch',
                        data: {
                          "name": "newProduct.",
                          "category": "categoryId.categoryId",
                          "price": "25000",
                          "count": "12",
                          "description": "newProduct.description",
                          'images': "d06866922fc21d90e6830ec31f63cae5",
                          'image': res.data.filename
                        },
                        url: 'http://localhost:3002/products',
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                      }
                      )
                    })
                    .catch((error) => {
                      // error.response.status Check status code
                    }).finally(() => {
                      //Perform action in always
                    });
              
              
                }
              })
            }}
            handleIdOptin={() => {
              console.log("hjgggj")
            }}
          >
            {props => (
              <Box sx={{ pt: '120px', maxWidth: { xs: '100%' } }}>
                <form onSubmit={props.handleSubmit} >
                  <img className='productImg' src={`http://localhost:3002/files/${imgPrevio}`} />
                  <Button variant="contained" component="label" color="primary">
                    change  image
                    <input type="file" name="file" id="file" accept="image/*" hidden />
                  </Button>

                  <div className="field">
                    <label for="nameProduct">نام محصول</label>
                    <input
                      type="text"
                      name="nameProduct"
                      placeholder='نام کالا'
                      className='w-100 p-1'
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={namePrevio}
                      id="nameProduct"
                      contenteditable="true"
                    />
                  </div>
                  <p className="error">
                    {props.errors.nameProduct && props.touched.nameProduct && props.errors.nameProduct}
                  </p>

                  <div className="field">
                    <label for="category">دسته بندی </label>

                    {category == null ? <Navigate to='/paneleadmin/product' /> :
                      <select
                        type="text"

                        placeholder='دسته بندی'
                        className='w-100 p-1'
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        name="category" value={props.values.category}
                        id="category"
                      >
                        {category.map((item, i) => <option key={i} >{item.name}</option>


                        )}
                      </select>}
                  </div>
                  <p className="error">
                    {props.errors.category && props.touched.category && props.errors.category}
                  </p>

                  <div className="field">
                    <label for="description"> توضیحات</label>
                    <textarea
                      type="text"
                      name="description"
                      placeholder='توضیحات'
                      className='w-100 p-1'
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={desPrevio}
                      id="description"
                    />
                  </div>
                  <p className="error">
                    {props.errors.description && props.touched.description && props.errors.description}
                  </p>
                  {/* <p>{errorlogin?.usernameErr}</p> */}


                  <button type="submit">ورود</button>

                </form>

              </Box>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </ModalStyle>
  );
}
