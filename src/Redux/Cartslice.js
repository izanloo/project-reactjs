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


// import { configureStore } from '@reduxjs/toolkit'
// import  userReducer from '../Components/userSlice'
// const loadPreloadedState =()=>{
//   try{
//     const serializedState =localStorage.getItem("state");
//     if(!serializedState){
//       return undefined;
//     }
//     return JSON.parse(serializedState)
//   }
//   catch{
//     return undefined
//   }
// }
// const saveData = (state)=>{
//   try{
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem("state",serializedState)
//   }
//   catch{

//   }
// }
//  const store = configureStore({
//   devTools:true,
//   preloadedState:loadPreloadedState(),
//   reducer: {
//     user:userReducer,
   
//   }
// })
// store.subscribe(()=>{
//   saveData({user:store.getState().user})
// })
// export default store