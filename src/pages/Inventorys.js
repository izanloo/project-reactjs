// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import WithAdmin from '../Layouts/WithAdmin'
// import { Link } from 'react-router-dom'

// function Inventory() {
//   const [product, setProduct] = useState()
//   const url = 'http://localhost:3002/products';
//   function getData() {
//     axios({
//       url: url,
//       method: 'get',
//       // params: {
//       //   token: 'TOP-SECRET'
//       // }
//     })
//       .then(function (response) {
//         setProduct(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   useEffect(() => {
//     axios({
//       url: url,
//       method: 'get',
//       // params: {
//       //   token: 'TOP-SECRET'
//       // }
//     })
//       .then(function (response) {
//         setProduct(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });




//   }, [])
//   return (
//     < >
//       <button ><Link to='' />ذخیره</button>
//       <h2>قیمت و موجودی</h2>
//       {product == null ? "loding" :
//         <div>
//           <table dir="rtl">
//             <tr>
//               <th>نام کالا</th>
//               <th>قیمت</th>
//               <th>موجودی</th>
//             </tr>
//             {product.map((item) => {
//                 return (
//                   <tr>
//                     <td>{item.name}</td>
//                     <td>{item.price}</td>
//                     <td>{item.count}</td>
//                   </tr>
//                 )
              
//             })}
//           </table>


//         </div>


//       }



//     </>
//   )
// }
// export default WithAdmin(Inventory)


// import React, { useState, useEffect } from "react";
// import { Grid,Button } from "@mui/material";
// import TableStack from "../Components/Inventory/TableStack";
// import axios from "axios";
//  import WithAdmin from "../Layouts/WithAdmin";
// function Stack() {
//   const [row, setRow] = useState([]);
//   const[flag,setFlag]=useState({"id":true})
//   // const getProduct = async () => {

//   //   const res = await fetch("http://localhost:3002/products");
//   //   const data = await res.json();
//   //      setRow(data)
//   // };

//   useEffect(() => {
//     axios.get("http://localhost:3002/products").then((res) => setRow(res.data));
//   }, []);

//   // console.log(row);
//   return (
//     <Grid container >
//       <Grid item xs={6} md={4} sx={{ mr:30 }}>
//         <h1 > مدیریت موجودی و قیمت ها </h1>
//       </Grid>
//       <Grid item xs={6} md={4}>
//       <Button sx={{backgroundColor:"#86efac", width:'100px', m:3 }} variant="outlined" > ذخیره</Button>
//       </Grid>

//       <Grid item xs={12} md={8}>
//         <TableStack row={row} flag={flag} setFlag={setFlag}/>
//       </Grid>
//     </Grid>
//   );
// }
// export default WithAdmin(Stack)  ;

import WithAdmin from "../Layouts/WithAdmin";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import {api} from "../services/Config";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import PriceEditmode from "../Components/PriceStock/priceEditmode";
import CountEditmode from "../Components/PriceStock/countEditmode";
import { CircularProgress } from "@mui/material";
function Price_Stock() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [editdata, seteditdata] = useState();
  const [editId, seteditId] = useState()
  const handleChange = (event, value) => {
    setPage(value);
  };
  function productdata(page, items) {
    api
      .get(`/products`, {params:{
        _page:`${page}`,
        _limit:`${items}`,
        _sort:"createdAt",
        _order:"desc",
        // orderStatus:`${status}`
      }})
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let  [arr,setArr] = useState([])

  let  [kala,setKala] = useState ([])
  const container = {};
  function editCount(id,data) {
    let item = { data }
    // setKala({...kala,data})
    // kala={...kala,data}
    container['name'] = data.name;
    container['category'] = data.category;
    container['price'] = data.price;
    container['count'] = data.price;
    container['description'] = data.description;
    container['images'] = data.images;
    container['image'] = data.image;
    container['createdAt'] = data.createdAt;
    container['id'] = data.id;
    return container
  }
  function editTask(id,data) {
    let item = { data }
    // kala={...kala,data}
    container['name'] = data.name;
    container['category'] = data.category;
    container['price'] = data.price;
    container['count'] = data.price;
    container['description'] = data.description;
    container['images'] = data.images;
    container['image'] = data.image;
    container['createdAt'] = data.createdAt;
    container['id'] = data.id;

    return container


    // setKala({...kala,data})

    // api
    //   .put(`/products/${id}`, data)
    //   .then((res) => {
      //     console.log(res);
      //     // setstockeditmode(false);
      //   })
      //   .catch((err) => {
        //     console.log(err);
        //   });
      }
console.log(kala)
  const changeprice = (input) => {
    seteditdata({
      price: input,
    });
  };
  const changecount = (input) => {
    seteditdata({
      count: input,
    });
  };
  useEffect(() => {
    productdata(page, rowsPerPage);
  }, [page, rowsPerPage]);

  if (isLoading) {
    return <CircularProgress />

  }
  function save(){
    console.log("data",data)
    if (kala == null){
      console.log("null")
    }else{
      // console.log(kala.data)
      const id = container.id
      // container['name'] = data.name;
      // container['category'] = data.category;
      // container['description'] = data.description;
      // container['images'] = data.images;
      // container['image'] = data.image;
      // container['createdAt'] = data.createdAt;

      api
      .put(`/products/${id}`, container)
      .then((res) => {
          console.log(res);
          // setstockeditmode(false);
        })
        .catch((err) => {
            console.log(err);
          });
    }
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>موجودی و قیمت ها</h1>
        <button
          style={{ height: "50px", margin: "20px" }}
          onClick={save}
        >
          ذخیره
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">نام</TableCell>
              <TableCell align="right">قیمت</TableCell>
              <TableCell align="right">موجودی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="right">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <PriceEditmode
                    value={row.price}
                    data={
                      {
                        id:row.id,
                        image: row.image,
                        name: row.name,
                        category: row.category,
                        price: row.price,
                        // count: row.count,
                        description: row.description,
                        images: row.images,
                        image: row.image,
                        createdAt: row.createdAt

                      }}
                    changeprice={editTask}
                    id={row.id}
                  />
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <CountEditmode
                    value={row.count}
                    data={
                      {
                        id:row.id,

                        image: row.image,
                        name: row.name,
                        category: row.category,
                        // price: row.price,
                        count: row.count,
                        description: row.description,
                        createdAt: row.createdAt
                        
                        // subcategory: row.subcategory,
                      }
                    }
                    
                    changecount={editCount}
                    id={row.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Pagination
          count={10}
          page={page}
          dir="ltr"
          defaultPage={1}
          onChange={handleChange}
        />
      </Box>
    </>
  );
}

export default WithAdmin(Price_Stock);
