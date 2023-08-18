import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    getCardapio: builder.query<Restaurant, string>({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetCardapioQuery, useGetRestaurantQuery } = api

export default api
