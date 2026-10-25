import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './userslice.js'
export const store = configureStore({
  reducer: {
    user: userSliceReducer
  }
})