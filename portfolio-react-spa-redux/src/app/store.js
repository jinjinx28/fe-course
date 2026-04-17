import { configureStore } from '@reduxjs/toolkit'
import { likeSlice } from '../features/likeSlice.js'

export const store = configureStore({
  reducer: {
    like : likeSlice
  },
})

