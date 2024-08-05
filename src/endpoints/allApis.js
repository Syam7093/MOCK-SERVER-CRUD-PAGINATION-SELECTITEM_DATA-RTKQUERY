import { userApi } from "./crudApi";

export const allApis=userApi.injectEndpoints({
    endpoints:(builder)=>({
        createUser:builder.mutation({
            query:(user)=>({
                url:`/users`,
                method:"POST",
                body:user,

            }),
            invalidatesTags:["user"]
        }),
        getalluser:builder.query({
            query:()=>({
                url:`/users`,
                method:"GET"
            }),
            providesTags:["user"]
        }),
        deleteuser:builder.mutation({
            query:(id)=>({
                url:`/users/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["user"]
        }),
        upddateuser:builder.mutation({
            query:({id,user})=>({
                url:`/users/${id}`,
                method:"PUT",
                body:user
            }),
            invalidatesTags:["user"]
        })

    })
})


export const  {useCreateUserMutation,useGetalluserQuery,useDeleteuserMutation,useUpddateuserMutation}=allApis