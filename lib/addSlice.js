// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
// Define a service using a base URL and expected endpoints
// if (typeof window !== 'undefined'){
//   const login = JSON.parse(localStorage.getItem('login'))
//   const token = login.auth_token ?? 'null'
// }

export const putSourceApi = createApi({
  reducerPath: 'putSourceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://main-pajer.herokuapp.com/api/page/',
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
    addSource: builder.query({
      query: (s) => `${s.id}/add-source/${s.pk}`,
    }),
    delSource: builder.query({
      query: (id, source_id) => `${id}/del-source/${source_id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddSourceQuery, useDelSourceQuery } = putSourceApi

export const { addSource, delSource } = putSourceApi.endpoints