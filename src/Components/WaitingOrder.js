// import React, { useState, useEffect,useMemo } from 'react'
// import { useDispatch } from 'react-redux';
// import { setOrder } from '../Redux/orderSlice'
// import { useSelector } from 'react-redux'
// import axios from 'axios'
// import ModalStatus from './modal/ModalStatus';
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// const columns = [
//   { field: 'id', headerName: 'ID', width: 90, sortable: false
//  },
//   {
//     field: 'firstName',
//     headerName: 'نام کاربر',
//     width: 150,
//   },
//   {
//     field: 'lastName',
//     headerName: 'مجموع مبلغ',
//     width: 150,
//   },
//   {
//     field: 'age',
//     headerName: 'زمان ثبت سفارش',
//     type: 'number',
//     width: 110,
//   },
//   {
//     field: 'fullName',
//     headerName: 'وضعیت',
//     description: 'This column has a value getter and is not sortable.',
//     width: 160,
//   },
// ];

// // const rows=[

// //   { internalId: 1, firstName : 'React' },
// //   { internalId: 2, firstName: 'MUI' }
// // ]


// export default function WaitingOrder() {
//   const order = useSelector((state) => state.order)
//   const dispatch = useDispatch()
//   const url = 'http://localhost:3002/orders';
// // let arr=[]
// let [products,setProducts] =  useState([{}])
// const rowss = useMemo(
//   () => products.map((row, index) => ({ ...row, id: row._id })),
//   [products]
// );
// const getRowId = params => params.data.id;
//   function getData() {
//     axios({
//       url: url,
//       method: 'get',
//       params: {
//         token: 'TOP-SECRET'
//       }
//     })
//       .then(function (response) {
//         dispatch(setOrder(response.data))
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   useEffect(() =>  { getData() }, [])
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'نام کاربر', width: 150 },
//     { field: 'purchaseTotal', headerName: 'مجموع مبلغ', width: 150 },
  
//     { field: 'orderDate', headerName: 'زمان ثبت سفارش ', width: 150 },
//     // {
//     //   field: 'actions',
//     //   type: 'actions',
//     //   width: 80,
//     //   getActions: (params) => [
//     //     <GridActionsCellItem
//     //       icon={<DeleteIcon />}
//     //       label="Delete"
//     //       onClick={deleteUser(params.id)}
//     //     />
//     //   ],
//     // },
 
//   ]
//   let [rows,setRows] =  useState([])
//   if(order.order == null ){
// return "سفارشی وجود ندارد" 
//   }

  
// //   }
// rows =  order.order?.map((item, index) => {
//   const container = {};
//   if (item.orderStatus == 1) {
//    container['id'] = index;
//     container['firstName'] = item.customerDetail.firstName;
//     container['purchaseTotal'] = item.purchaseTotal;
//     container['orderDate'] = item.orderDate;
 
//   }
//   return container;
// })
// console.log(rows)
//   return (
//     <>

//         <div>
//         <h2>مدیریت سفا  رشات</h2>
//         {rows == null ? "سفارشی وجود ندارد" :

//         "hhh"
//         // <DataGrid
//         //         rows={rows}
//         //         columns={columns}
//         //         pageSize={5}
//         //         rowsPerPageOptions={[5]}
//         //       />
//         }

 
//         </div>
// {/*         
//         <div style={{ height: 400, width: '100%' }}>
//       {products == null ? "loading" : 
//       <DataGrid
//       rows={products}
//       columns={columns}
//       getRowId={(row) => row.id}
//             pageSize={5}
//       rowsPerPageOptions={[5]}
//                />
//       }
//     </div> */}
//     </>
//   )
// }



import React, { useState, useEffect } from "react";
import Admin from "../Layouts/WithAdmin"
import {
  Box,
  Grid,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import TableOrders from "./TableOrders";
import axios from "axios";

function WaitingOrder() {
  const [row, setRow] = useState([]);

  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/orders?orderStatus=${selectedValue}`)
      .then((res) => setRow(res.data));
  }, [selectedValue]);

  console.log(row);

  return (
    <Grid container  >
      <Grid item xs={12} md={8}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ mr:30, mt:5 }}
          >
            <FormControlLabel
              onChange={handleChange}
              value="1"
              control={<Radio />}
              label="سفارشات تحویل داده شده"
              sx={{mr:10}}
            />
            <FormControlLabel
              onChange={handleChange}
              value="2"
              control={<Radio />}
              label="سفارشات در حال تحویل "
              sx={{mr:10}}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8}>
        <TableOrders row={row} />
      </Grid>
    </Grid>
  );
}
export default Admin(WaitingOrder) ;

