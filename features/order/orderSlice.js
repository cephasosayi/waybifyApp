import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  orders: [],
  loading: false,
  error: null,
  isLoading: true,

};

// const url = 'http://localhost:3000/orders';
const url = 'https://97b5-197-211-63-105.ngrok-free.app/orders';


// Define the async thunk for fetching orders from the API
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_name, thunkAPI) => {
  try{
    
    const resp = await axios.get(url);
    return resp.data;
  }catch(error){
    console.log('error:' + error.message)
    return thunkAPI.rejectWithValue('Something went wrong')
  }
 
});

// Define the async thunk for posting an order to the API
export const postOrder = createAsyncThunk('orders/postOrder', async (order, thunkAPI) => {
  try {
    const response = await axios.post(url, order); 
    return response.data;
  } catch (error) {
    console.log(error)
   return thunkAPI.rejectWithValue('Failed to post the order.');
  }
 
});

// Define the async thunk for canceling an order in the API
export const cancelOrder = createAsyncThunk('orders/cancelOrder', async (orderId) => {
 
});

// Create the orders slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase( fetchOrders.pending, (state) =>{
        state.isLoading =true;
      })

      .addCase( fetchOrders.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.orders = action.payload;
      })

      .addCase( fetchOrders.rejected, (state) =>{
        state.isLoading = false;
      })

       // Handle the postOrder pending and fulfilled actions
    builder
    .addCase(postOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(postOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
      state.loading = false;
      state.error = null;
    })
    .addCase(postOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

  }
});

// Export the async thunks

export default ordersSlice.reducer;
