import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ContactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/contact"
  }),
  endpoints: (builder) => ({
    sendDetails: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["contact"]
    }),
    getContactDetails: builder.query({
      query: () => ({
        url: "/",
        method: "GET"
      }),
      transformResponse: (response) => response.data
    })
  })
});

export const { useSendDetailsMutation, useGetContactDetailsQuery } = ContactApi;
