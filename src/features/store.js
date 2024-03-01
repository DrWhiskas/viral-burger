import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState ={
    order: [], // order list
    orderId:'',
    token:''
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {
        addOrder: (state, action) =>{
            state.order.push(action.payload)
        }
    }
})

export const {addOrder} = orderSlice.actions;

export const store = configureStore({
    reducer: { order: orderSlice.reducer},
    devTools: true
})

export default store