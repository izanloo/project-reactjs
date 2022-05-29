import { createSlice } from '@reduxjs/toolkit'

export const CardidSlice = createSlice({
  name: 'cardid',
  initialState: {
    cardid:""
  },
  reducers: {
    setIdcard: (state,action) => {
      state.cardid=action.payload
    },
  },
})
export const { setIdcard } = CardidSlice.actions
export default CardidSlice.reducer