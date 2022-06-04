import React, { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import Cards from "./Cards";

export default function Category(props) {
  let idCategory = props.idCategory;
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()
    useEffect(() => { getData();}, []);
  async function getData() {
    try {
      const products = await axios.get(
        `http://localhost:3002/products?_limit=6&category=${idCategory}&_sort=id&_order=desc`  
      );
      setProduct(products.data);
    } catch (error) { 
      alert(error);
    }
  }
 

  return (
    <>
    {product ? (
        product.map((item) => (
          <>
              <Cards item={item} key={item.id}   />
          </>

        ))
      ) : (
        <Navigate to="/" />
      )}
    
    </>
    
  );
}
