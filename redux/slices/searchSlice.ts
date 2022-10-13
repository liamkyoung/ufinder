import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface searchState {
  value: string
}

const initialState: searchState = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    resetSearch: (state) => {
      state.value = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearch, resetSearch } = searchSlice.actions

export default searchSlice.reducer
