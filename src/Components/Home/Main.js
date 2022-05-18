import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { NavLink, Navigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
// import { setIdcard } from '../../Redux/CardidSlice'



export default function Category(props) {
  let idCategory = props.idCategory;
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()

  
    useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const products = await axios.get(
        `http://localhost:3002/products?category=${idCategory}`
      );
      setProduct(products.data);
    } catch (error) { 
      alert(error);
    }
  }
 

  return (
    <>
    {product ? (
        product.slice(-6).map((item) => (
          <>
              <Cards item={item} key={item.id}  />
          </>

        ))
      ) : (
        <Navigate to="/" />
      )}
    
    </>
    
  );
}
