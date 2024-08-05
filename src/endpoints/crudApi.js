import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const userApi=createApi({
    reducerPath:"user",
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:8989/`}),
    tagTypes:['user'],
    endpoints:()=>({})
})