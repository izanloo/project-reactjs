import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    isLogin : false,
  },
  reducers: {
    login: (state,action) => {
      state.isLogin=action.payload
    },
  },
})
export const { login } = adminSlice.actions

export default adminSlice.reducer