import React, { useState, useEffect } from 'react'
import WithAdmin from '../Layouts/WithAdmin';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Modal from '../Components/modal/Modal';
import {api} from '../services/Config'
import ModalEdit from '../Components/modal/ModalEdit';

function Product() {
  const [product, setProduct] = useState([])
  const [categroys, setCategorys] = useState([])
  const url = 'http://localhost:3002/products';




  async function getProduct() {
    try {
      const products = await api.get("/products");
      const category = await api.get("/category");
      setProduct(products.data);
      setCategorys(category.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { getProduct() }, [])


  const deleteUser = React.useCallback(
    (id) => () => {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      const request = axios.delete(`http://localhost:3002/products/${id}`)
    },
    [],
  );




  let [rows, setRows] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'نام محصول', width: 150 },
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => <img className='productImg' src={params.value} />, // renderCell will render the component
    },
    { field: 'category', headerName: ' دسته بندی', width: 150 },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteUser(params.id)}
        />
      ],
    },
    // {
    //   field: 'actions',
    //   type: 'actions',
    //   width: 80,
    //   getActions: (params) => [
    //     <ModalEdit
    //       // icon={<DeleteIcon />}
    //       // label="Edite"
    //       // onClick={Edit(params.id)}
    //     />
    //   ],
    // },
  ]
// function Edit(id){
//   console.log(id)
// }

  rows = product.map(item => {
    const container = {};
    container['id'] = item.id;
    container['name'] = item.name;
    container['image'] = `http://localhost:3002/files/${item.image}`;
    {
      categroys.map(categroyItem => {
        if (categroyItem.id == item.category) {
          container['category'] = categroyItem.name;
        }
      })
    }

    return container;
  })


  return (
    <>
      <Modal />
      <h2>مدیریت کالاها</h2>
      <div style={{ height: 400, width: '100%' }}>
        {product == null ? "هیچ کالایی انتخاب نشده است" :
          <>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                rowHeight={100}
              />

            </div>
          </>
        }
      </div>
    </>
  )
}
export default WithAdmin(Product)

