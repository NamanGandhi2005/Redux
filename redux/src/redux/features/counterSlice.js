import { createSlice } from "@reduxjs/toolkit";
//slices are like feature we want to add to store

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state,actions)=>{
            state.value-=actions.payload;
        }
    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer