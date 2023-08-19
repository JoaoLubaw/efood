import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
    }
    zipCode: string
    number: number
    complement?: string
  }
  payment: {
    card: {
      name: string
      number: string
      expires: {
        month: number
        year: number
      }
      code: number
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getCardapio: builder.query<Restaurant, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})
export const {
  useGetCardapioQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
