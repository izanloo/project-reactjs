import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalStatus(props) {
    const item =props
    console.log(item)
    const columns=[         
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'نام کالا', width: 150 },
        { field: 'price', headerName: ' قیمت', width: 150 },
        { field: 'valueInput', headerName: ' تعداد', width: 150 }
    ]
const rows=[
    { id: 1, name: 'Snow', price: 'Jon', valueInput: 35 },
    { id: 2, name: 'Snow', price: 'Jon', valueInput: 35 },
]
       
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>بررسی سفارش</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            نام مشتری:
            <span>{item.item.customerDetail.firstName}</span>
            <span style={{paddingRight:'2px'}}>{item.item.customerDetail.lastName} </span>

            
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             آدرس:
            <span>{item.item.customerDetail.Address}</span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             تلفن:
            <span>{item.item.customerDetail.phone}</span>
            </Typography>
          
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             زمان سفارش:
            <span>{item.item.orderDate}</span>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             زمان تحویل:
            <span>{item.item.delivery}</span>
            </Typography>
            
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
