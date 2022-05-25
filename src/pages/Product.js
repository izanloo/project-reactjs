import React, { useState, useEffect } from 'react'
import WithAdmin from '../Layouts/WithAdmin'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Modal from '../Components/modal/Modal'
import ModalEdit from '../Components/modal/ModalEdit'
// import Todo, {ToDoList} from '../Components/Todo'

function Product() {
  const [product, setProduct] = useState([])
  const [categroys, setCategorys] = useState([])
  const url = 'http://localhost:3002/products';


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


    const getId = (e)=>{
      const id=e.target.value
      console.log("jjjj",id)
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
                    <td><img className='productImg' src={`http://localhost:3002/files/${item.image}`}/></td>
                    <td>{item.name}</td>
                    {categroys.map(categroyItem => {
                      if (categroyItem.id == item.category) {
                        return (
                          <>
                            <td>{categroyItem.name}</td>
                            <td>
                            <ModalEdit value={item.id}  />
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
    </>
  )
}
export default WithAdmin(Product)
