import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PairState {
  value: number
}

const initialState: PairState = {
  value: 0,
}

export const pairStateSlice = createSlice({
  name: 'pairState',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } =
  pairStateSlice.actions

export default pairStateSlice.reducer
