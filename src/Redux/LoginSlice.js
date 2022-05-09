import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'dataAdmin',
  initialState: {
    isLogin : false,
  },
  reducers: {
    login: (state,action) => {
      state.isLogin=action.payload
    },
  },
})
export const { login } = loginSlice.actions
export default loginSlice.reducer