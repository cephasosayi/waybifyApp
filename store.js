import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './features/order/orderSlice';

const store = configureStore({
    reducer:{
        orders: orderReducer,
        
    },
});

export default store;