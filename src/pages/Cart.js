import React from 'react'
import WithUser from '../Layouts/WithUser'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'نام کالا', width: 130 },
  { field: 'count', headerName: 'تعداد', width: 130 },
  {
    field: 'price',
    headerName: 'قیمت',
    type: 'number',
    width: 70,
  },
  { field: 'count', headerName: 'تعداد', width: 130 },
  { field: 'delete', headerName: 'حذف', width: 70 },


];

const rows = [
  { id:1, name: 'دمنوش ریزمیوه', count: 2, price: 35520 , delete:'حذف' },
  { id:2, name: 'بلوبری',  count: 3, price: 4202 , delete:'حذف'},
  { id:3, name: 'هات چاکلت', count: 5, price: 45000, delete:'حذف'},
  { id:4, name: 'دمنوش چای ترش',  count: 1, price: 16000, delete:'حذف' },
  { id:5, name: 'چای سبز و گزنه',  count: 1, price: 15000 , delete:'حذف'},
  { id:6, name: 'چای سیاه و وانیل',  count: 2, price: 15000 , delete:'حذف'},
  {id:7,  name: 'چای سیاه و پرتقال', count: 4, price: 4400 , delete:'حذف'},
  {id:8,  name: 'چای سیاه و توت فرنگی', count: 5, price: 3600 , delete:'حذف'},
  {id:9,  name: 'کافی میکس خامه', count: 6, price: 650  ,delete:'حذف' },
];





 function Cart() {
  const navigate = useNavigate()
  function handlePyment(){
   return navigate('/finalbuy')
  }
  return (
    <Box sx={{padding:5}}>
        <h1>سبد خرید</h1>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>       
    <h2>جمع:
      <span>1040030 تومان</span>
      </h2>
     <Button  onClick={handlePyment} variant="contained" color="success">
        نهایی کردن خرید
      </Button>
    </Box>
  )
}
export default WithUser(Cart)




