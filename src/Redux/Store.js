import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './LoginSlice'
import orderSlice from './orderSlice'
import ProductSlice from './ProductSlice'


export const store = configureStore({
  reducer: {
    admin: adminSlice,
    order: orderSlice,
    product:ProductSlice
  },
})
