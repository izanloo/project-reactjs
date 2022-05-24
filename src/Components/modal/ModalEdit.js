import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Formik } from 'formik';
import { useNavigate, useLocation} from 'react-router';
// import { Loginstyle } from '../Assest/Style/abstracts/Stylecomponent';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {ModalStyle} from '../../Assest/Style/abstracts/Stylecomponent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const Dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
   
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
        initialValues={{nameProduct: '', category: '',description:'' }}
        validate={values => {
          let errors = {};
          if (!values.nameProduct) {
            errors.nameProduct = 'Required';
          }
          if (!values.category) {
            errors.category = 'Required';
          }
          if (!values.description) {
            errors.description = 'Required';
          }

          return errors;
        }}
        onSubmit={(values) => {
         
        }}
      >
        {props => (
          <Box sx={{ pt: '120px', maxWidth: { xs: '100%' } }}>
            <form onSubmit={props.handleSubmit} >
              <div className="field">
              <label for="nameProduct">نام محصول</label>
                <input
                  type="text"
                  name="nameProduct"
                  placeholder='نام کالا'
                  className='w-100 p-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.nameProduct}
                  id="nameProduct"
                />
              </div>
              <p className="error">
                {props.errors.nameProduct && props.touched.nameProduct && props.errors.nameProduct}
              </p>
              
              <div className="field">
              <label for="category">دسته بندی </label>
                <input
                  type="text"
                  name="category"
                  placeholder='دسته بندی'
                  className='w-100 p-1'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.category}
                  id="category"
                />
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
                  value={props.values.description}
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
