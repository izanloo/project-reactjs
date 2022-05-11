import { configureStore } from '@reduxjs/toolkit'
 import loginSlice from './LoginSlice'
import orderSlice from './orderSlice'


 export const store= configureStore({
  reducer: {
    admin: loginSlice,
    order:orderSlice,

  },
})
