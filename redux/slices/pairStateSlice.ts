import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

type Friend = {
  id: number
  name: string
  online: boolean
  anonymous: boolean
  favorite: boolean
  lastLogin: number
  age: number
  icon: string
  mood: string
  similarInterests: string[]
  messages: Message[]
}

type Message = {
  id: number
  text: string
  timestamp: number
}

export interface PairState {
  value: number
  foundFriend: Friend
}

const initialState: PairState = {
  value: 0,
  foundFriend: {
    id: -1,
    name: '',
    online: false,
    favorite: false,
    icon: '',
    mood: 'happy',
    age: 20,
    anonymous: false,
    lastLogin: Date.now(),
    similarInterests: [],
    messages: [],
  },
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
      state.foundFriend = {
        id: -1,
        name: '',
        online: false,
        favorite: false,
        icon: '',
        mood: 'happy',
        age: 20,
        anonymous: false,
        lastLogin: Date.now(),
        similarInterests: [],
        messages: [],
      }
    },
    setFriend: (state, action: PayloadAction<Friend>) => {
      state.foundFriend = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset, setFriend } =
  pairStateSlice.actions

export default pairStateSlice.reducer
