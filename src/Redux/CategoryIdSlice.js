import { createSlice } from '@reduxjs/toolkit'

export const CategoryIdSlice = createSlice({
  name: 'categoryId',
  initialState: {},
  reducers: {
    setCategoryId: (state,action) => {
      state.categoryId=action.payload
    },
  },
})
export const { setCategoryId } = CategoryIdSlice.actions
export default CategoryIdSlice.reducer