import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Message = {
  id: number
  text: string
  timestamp: number
}

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

export interface currMessengerState {
  value: Friend
}

const initialState: currMessengerState = {
  value: {
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

export const currMessengerSlice = createSlice({
  name: 'currMessenger',
  initialState,
  reducers: {
    setCurrMessenger: (state, action: PayloadAction<Friend>) => {
      state.value = action.payload
    },
    resetCurrMessenger: (state) => {
      state.value = {
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
  },
})

// Action creators are generated for each case reducer function
export const { setCurrMessenger, resetCurrMessenger } =
  currMessengerSlice.actions

export default currMessengerSlice.reducer
