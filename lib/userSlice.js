// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
// Define a service using a base URL and expected endpoints

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pajer-002.herokuapp.com/api/v1/',}),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: post => ({
                url: `auth/token/login/`,
                method: 'POST',
                body: post,
            })
        }),
        registerUser: build.mutation({
            query: post => ({
                url: `auth/users/`,
                method: 'POST',
                body: post,
            })
        })
    })
});

export const { useLoginUserMutation, useRegisterUserMutation } = userApi;