import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Detail from '../pages/Detail'
import Category from '../pages/Category'
import FinallBuy from '../pages/FinallBuy';
import Payment from '../pages/Payment';
import PanelAdmin from '../pages/PanelAdmin';
import Product from '../pages/Product';
import Inventory from '../pages/Inventory'
import Orders from '../pages/Orders'
import Notfound from '../pages/Notfound'
import Protected from './Protected.route';
import WaitingOrder from '../Components/WaitingOrder';
import Resived from '../pages/Resived';
import OutletOrder from '../pages/OutletOrder';

import Pagination from '../pages/Pagination'


export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:productId' element={<Detail />} />
        <Route path='/category' element={<Category />} />
        <Route path='/finalbuy' element={<FinallBuy />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/pagination" element={<Pagination/>} />

        <Route path='/paneladmin' element={<PanelAdmin />} />
        <Route path='/paneladmin/product' element={<Protected element={<Product />} />} />
        <Route path='/paneladmin/payment' element={<Protected element={<Payment />} />} />
        <Route path='/' element={<OutletOrder/>}>
          <Route path='/paneladmin/orders' element={<Protected element={<Orders />} />} />
          <Route path='/paneladmin/orders/resived' element={<Protected element={<Resived />} />} />
        </Route>
        <Route path='/paneladmin/inventory' element={<Protected element={<Inventory />} />} />




        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}
