import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './LoginSlice'
import orderSlice from './orderSlice'
import ProductSlice from './ProductSlice'
import CategoryIdSlice from './CategoryIdSlice'


export const store = configureStore({
  reducer: {
    admin: adminSlice,
    order: orderSlice,
    product:ProductSlice,
    categoryId:CategoryIdSlice
  },
})
