import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { feedsApi } from './apiSlice'
import { createWrapper } from 'next-redux-wrapper'
import sourceReducer from './source';
import feedReducer from './feed';
import userReducer from './userReducer';
import { userApi } from './userSlice';
import { categoryApi } from './categoryApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    sourceState: sourceReducer,
    feedState: feedReducer,
    userState: userReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [feedsApi.reducerPath]: feedsApi.reducer,
  },
  
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedsApi.middleware, userApi.middleware, categoryApi.middleware),
})

export const wrapper = createWrapper(store)