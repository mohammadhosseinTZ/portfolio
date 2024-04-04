import { configureStore } from '@reduxjs/toolkit'
import checkThemReducer from './slices/checkThem'
export default configureStore({
  reducer: {
    checkThem: checkThemReducer
  }
})