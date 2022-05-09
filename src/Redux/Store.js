import { configureStore } from '@reduxjs/toolkit'
 import adminReducer from './Reducer'

 export const store= configureStore({
  reducer: {
    admin: adminReducer,
  },
})
