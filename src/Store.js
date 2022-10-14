import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Redux/cartSlice'

export default configureStore({
  reducer: {
        Cart : cartSlice,
  },
})