import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { userApi } from "./endpoints/crudApi"
import { numberSlice } from "./slices/numberSlice"


const reducer=combineReducers({
    [userApi.reducerPath]:userApi.reducer,
    reusable:numberSlice.reducer

})

export const store=configureStore({
    reducer:reducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(userApi.middleware)
})