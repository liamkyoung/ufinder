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
  lastLogin: number
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
    lastLogin: 0,
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
        lastLogin: 0,
        messages: [],
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrMessenger, resetCurrMessenger } =
  currMessengerSlice.actions

export default currMessengerSlice.reducer
