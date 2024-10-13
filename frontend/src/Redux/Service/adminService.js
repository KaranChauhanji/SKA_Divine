import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const AdminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ska-divine-1.onrender.com/admin"
    }),
    endpoints: (builder) => (
        {
            login: builder.mutation({
                query: (data) => ({
                    url: "/login",
                    method: "POST",
                    body: data
                }),
                invalidatesTags: ["admin"]
            })
        }
    )
})

export const {useLoginMutation} = AdminApi