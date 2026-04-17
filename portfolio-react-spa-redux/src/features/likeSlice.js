import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count:0, 
}


export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLike: (state) => {
      state.like += 1
    },
  },
})

export const { setLike } = likeSlice.actions

export default likeSlice.reducer