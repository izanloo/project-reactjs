// import React, { useState, useEffect } from 'react'
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';
// import WithAdmin from '../Layouts/WithAdmin';
// import Modal from '../Components/modal/Modal';
// import {api} from '../services/Config'
// import ModalEdit from '../Components/modal/ModalEdit';

// function Product() {
//   const [product, setProduct] = useState([])
//   const [categroys, setCategorys] = useState([])
//   const url = 'http://localhost:3002/products';

//   async function getProduct() {
//     try {
//       const products = await api.get("/products");
//       const category = await api.get("/category");
//       setProduct(products.data);
//       setCategorys(category.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => { getProduct() }, [])

//   const deleteUser = React.useCallback(
//     (id) => () => {
//       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//       const request = axios.delete(`http://localhost:3002/products/${id}`)
//           window.location.reload();
//     },
//     [],
//   );

//   let [rows, setRows] = useState([]);
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'نام محصول', width: 150 },
//     {
//       field: 'image',
//       headerName: 'Image',
//       width: 150,
//       renderCell: (params) => <img className='productImg' src={params.value} />, // renderCell will render the component
//     },
//     { field: 'category', headerName: ' دسته بندی', width: 150 },
//     {
//       field: 'actions',
//       type: 'actions',
//       width: 80,
//       getActions: (params) => [
//         <GridActionsCellItem
//           icon={<DeleteIcon />}
//           label="Delete"
//           onClick={deleteUser(params.id)}
//         />
//       ],
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       width: 80,
//       getActions: (params) => [
//         <ModalEdit
//           // icon={<DeleteIcon />}
//           // label="Edite"
//           // onClick={Edit(params.id)}
//         />
//       ],
//     },
//   ]
//  function Edit(id){
//     console.log(id)
//  }

//   rows = product.map(item => {
//     const container = {};
//     container['id'] = item.id;
//     container['name'] = item.name;
//     container['image'] = `http://localhost:3002/files/${item.image}`;
//     {
//       categroys.map(categroyItem => {
//         if (categroyItem.id == item.category) {
//           container['category'] = categroyItem.name;
//         }
//       })
//     }

//     return container;
//   })


//   return (
//     <>
//       <Modal />
//       <h2>مدیریت کالاها</h2>
//       <div style={{ height: 400, width: '100%' }}>
//         {product == null ? "هیچ کالایی انتخاب نشده است" :
//           <>
//             <div style={{ height: 400, width: '100%' }}>
//               <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//                 rowHeight={100}
//               />

//             </div>
//           </>
//         }
//       </div>
//     </>
//   )
// }
// export default WithAdmin(Product)

import React ,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tablee from "../Components/Admin/Tablee";
import Delete  from '../Components/Admin/Button-Admin';
import Edit from '../Components/Admin/Button-Admin';
import {api} from '../services/Config'

// import http from 'Services/Http-service';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Form from "../Components/Admin/ProductMangment/Modals.Admin";
import axios from 'axios';
// import Swal from 'sweetalert2'





const columns = [
    { id: 'image', label: 'تصویر', minWidth: 120 ,align: 'right' },
    { id: 'product', label: 'نام کالا', minWidth: 230, align: 'right' },
    { id: 'category', label: 'دسته بندی', minWidth: 250, align: 'right' },
    { id: 'edit', label: 'ویرایش', minWidth: 60, align: 'right' },
    { id: 'deletes', label: 'حذف', minWidth: 60, align: 'right' }
];

function createData(image, product, category,deletes ,edit ) {
    return { image, product, category, deletes,edit };
}
  

const Managementproduct = () => {
    const [products,setproducts] = useState([]);
    const [category,setcategory] = useState([]);
    const [categorySet, setcategorySet] = useState();
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false)
    const [productInfo, setProductInfo] = useState({
        id: null,
        name: "",
        price: null,
        quantity: null,
        category: null,
        image: null,
        description: ""
    })
    const handel = async () => {
        await api.get("/products?_sort=id&_order=desc").then(product =>setproducts(product.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        api.get("/products?_sort=id&_order=desc").then(product =>setproducts(product.data))
        .catch(error => console.log(error))
        api.get("/category").then(category =>setcategory(category.data))
        .catch(error => console.log(error))
    },[])
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenEdit = () => setOpenEdit(true)
    const handleCloseEdit = () => setOpenEdit(false)

    // const handleDelete = async (e) =>{
    //     Swal.fire({
    //         title: 'مطمعنی؟',
    //         text: "بعد از حذف هیچ راه بازگشتی نیست!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'حذف کن',
    //         cancelButtonText:'لغو عملیات'
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             await axios.delete(`products/${e.id}`)
    //             await api.get("/products?_sort=id&_order=desc").then(product =>setproducts(product.data))
    //             .catch(error => console.log(error))
    //             Swal.fire(
    //                 'پاک شد!',
    //                 'محصول مورد نظر با موفقیت حذف شد.',
    //                 'success'
    //             )
    //         }
    //     })
       
    // }
    const rows =products.map(objProduct => {
        const categoryset = category.map(it=>{
            if (it.id==objProduct.category) {
                return it.name
            }
        })
        return createData(
            <img className='image' src={`Http://localhost:3002/files/${objProduct.image}`} />, 
            objProduct.name, 
            categoryset ,
            <Button className='btn-component' 
            // onClick={() => handleDelete(objProduct)}
            >
                <Delete name="حذف"/>
            </Button>,
            <Button className='btn-component'  
                onClick={() => {
                    handleOpenEdit()
                    setProductInfo({
                        id:objProduct.id,
                        name: objProduct.name,
                        price: objProduct.price,
                        count: objProduct.count,
                        category: categoryset,
                        image: objProduct.image,
                        description: objProduct.description
                    })
                }}>
                <Edit  name="ویرایش"/>
            </Button>
        )}
    )
    
    return (
        <div>
            
            <div className='p-flex' style={{color:'#122c91'}}>
                <h3>صفحه مدیریت محصول </h3>
                <Button 
                    className='p-btn'  
                    onClick={()=>{
                        handleOpen()
                    }}>
                    <Typography variant="h6" component="div" sx={{color:'#122c91'}}>
                        افزودن کالا
                    </Typography>
                </Button>
            </div> 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "min(600px,100%)",
                    height: '500px',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    maxHeight: '700px',
                    overflowY: 'auto',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Form onClose={handleClose} category={category} products={null} handel={handel}/>
                </Box>
            </Modal>
            
            <Tablee columns={columns} rows={rows}/>
            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: '500px',
                    transform: 'translate(-50%, -50%)',
                    width: "min(600px,100%)",
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    maxHeight: '700px',
                    overflowY: 'auto',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Form onClose={handleCloseEdit} category={category} products={productInfo} handel={handel}/>
                </Box>
            </Modal>
        </div>
    );
}

export default Managementproduct;
