import { createSlice } from '@reduxjs/toolkit'

export const checkThemSlice = createSlice({
  name: 'checkThem',
  initialState: {
    myThem: false
  },
  reducers: {
    statusThem: state => {
  
      state.myThem = !state.myThem
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { statusThem} = checkThemSlice.actions

export default checkThemSlice.reducer