import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    initialState:1000,
    name: 'counter',
    reducers:{
        inccount:(state,action)=>{
            state =state-action.payload
        },
        decount:(state,action)=>{
            state = state + action.payload
        }

    }
})

export const {inccount, decount } = counterSlice.actions

export default counterSlice.reducer


