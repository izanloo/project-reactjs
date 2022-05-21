import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './LoginSlice'
import orderSlice from './orderSlice'
import ProductSlice from './ProductSlice'
import CategoryIdSlice from './CategoryIdSlice'
import CardidSlice from './CardidSlice'


export const store = configureStore({
  reducer: {
    admin: adminSlice,
    order: orderSlice,
    product:ProductSlice,
    cardid:CardidSlice,
    categoryId:CategoryIdSlice
  },
})
