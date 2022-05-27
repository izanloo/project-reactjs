import { createSlice } from '@reduxjs/toolkit'

export const ItemCardSlice = createSlice({
  name: 'itemCard',
  initialState: {},
  reducers: {
    setItemCard: (state,action) => {
      state.itemCard=action.payload
    },
  },
})
export const { setItemCard } = ItemCardSlice.actions
export default ItemCardSlice.reducer