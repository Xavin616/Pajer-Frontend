// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
// Define a service using a base URL and expected endpoints
// if (typeof window !== 'undefined'){
//   const login = JSON.parse(localStorage.getItem('login'))
//   const token = login.auth_token ?? 'null'
// }

export const feedsApi = createApi({
  reducerPath: 'feedsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://main-pajer.herokuapp.com/api/',
        prepareHeaders: (headers, { getState }) => {
            const state = getState()
            const token = state.userState.user.auth_token;
            console.log(token)
            if (token) {headers.set('authorization', `Token ${token}`);}
            return headers
        }
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
    },
  endpoints: (builder) => ({
    getFeedsById: builder.query({
      query: (id) => `sources/${id}/feeds`,
    }),
    getMyPage: builder.query({
      query: (id) => 'user-pages/'
    }),
    getUserData: builder.query({
      query: () => 'auth/users/me/',
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFeedsByIdQuery, useGetMyPageQuery, useGetUserDataQuery } = feedsApi

export const { getFeedsById, getMyPage } = feedsApi.endpoints