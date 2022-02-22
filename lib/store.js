import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { feedsApi } from './apiSlice'
import { createWrapper } from 'next-redux-wrapper'
import sourceReducer from './source';
import feedReducer from './feed';
import { userApi } from './userSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [feedsApi.reducerPath]: feedsApi.reducer,
    sourceState: sourceReducer,
    feedState: feedReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedsApi.middleware, userApi.middleware),
})

export const wrapper = createWrapper(store)