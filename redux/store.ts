import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import currMessengerReducer from './slices/currMessengerSlice'
import searchReducer from './slices/searchSlice'
import pairStateReducer from './slices/pairStateSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentMessenger: currMessengerReducer,
    search: searchReducer,
    pairState: pairStateReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
