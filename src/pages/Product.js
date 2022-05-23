import React, { useState, useEffect } from 'react'
import WithAdmin from '../Layouts/WithAdmin'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Modal from '../Components/modal/Modal'

import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// import Todo, {ToDoList} from '../Components/Todo'

function Product() {
  const [product, setProduct] = useState([])
  const [categroys, setCategorys] = useState([])
  const url = 'http://localhost:3002/products';
const [item,setItem] = useState([])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'عکس کالا', width: 130 },
    { field: 'count', headerName: 'نام کالا', width: 130 },
    {
      field: 'price',
      headerName: 'دسته بندی',
      type: 'number',
      width: 70,
    },
    { field: 'count', headerName: 'ویرایش', width: 130 },
    { field: 'delete', headerName: 'حذف', width: 70 },
  
  
  ];
  const rows = [
    { id:1, name: ' ریزمیوه', count: 2, price: 35520 , delete:'حذف' },
  ];
  console.log(rows)

  function getProduct(){
    axios({
      url: url,
      method: 'get',
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  useEffect(() => {getProduct() }, [])


  useEffect(() => {
    axios({
      url: 'http://localhost:3002/category',
      method: 'get',

    })
      .then(function (response) {
        setCategorys(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });




  }, [])

    const handeDelete = (e)=>{
     const id=e.target.value
     const request = axios.delete(`http://localhost:3002/products/${id}`)
     return request.then(getProduct())
    }

  return (
    <>
  
    {/* <Todo/> */}
<Modal/>
      <h2>مدیریت کالاها</h2>
      {product  == null ? "loding" :
        <div>
          <table dir="rtl">
            <tr>
              <th>تصویر</th>
              <th>نام کالا</th>
              <th>دسته بندی</th>
              <th>لینک</th>
            </tr>
            {product.map((item,i) => {

                return (
                  <tr key={i}>
                    <td><img className='productImg' src={`http://localhost:3002${item.thumbnail}`}/></td>
                    <td>{item.name}</td>
                    {categroys.map(categroyItem => {
                      if (categroyItem.id == item.category) {
                        return (
                          <>
                            <td>{categroyItem.name}</td>
                            <td>
                              <Link to='/'>ویرایش </Link>
                              <button value={item.id} onClick={handeDelete}>حذف</button>
                            </td>
                          </>

                        )
                      }

                    })}
                  </tr>
                )
          
          })}
          </table>


        </div>

      }
    {/* <Box sx={{padding:5}}>
        <h1>مدیریت کالا</h1>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div> 
    </Box> */}
    </>
  )
}
export default WithAdmin(Product)
