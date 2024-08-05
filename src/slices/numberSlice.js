import { createSlice } from "@reduxjs/toolkit";



const initialState={
    number:0
}

export const numberSlice=createSlice({
    name:"numbers",
    initialState,
    reducers:{
        setNumbers:(state,action)=>{

            let {data}=action.payload
            console.log(data,"store data : ")
            let val
            if(data==true)
            {
                val=state.number+1
            }
            else{
                if(state.number>0)
                {
                    val=state.number-1
                }
                else {
                    val=state.number
                }
            }
            state.number=val
            // state.number=action.payload
        }
    }
})

export const {setNumbers}=numberSlice.actions