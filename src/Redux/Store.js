import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './LoginSlice'
import orderSlice from './orderSlice'
import ProductSlice from './ProductSlice'


export const store = configureStore({
  reducer: {
    isLogin: loginSlice,
    order: orderSlice,
    product:ProductSlice
  },
})
