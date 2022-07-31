import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "store/actions/order";

interface OrderState {
  orders: any;
  order: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: OrderState = {
  orders: [],
  order: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// CREATE ORDER
export const createOrder = createAsyncThunk(
  "create/order",
  async (orderData: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await orderService.createOrder(token, orderData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

// GET ORDER BY ID
export const getOrderById = createAsyncThunk(
  "orders/getbyId",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await orderService.getOrderById(token, id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state: OrderState) => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(createOrder.pending, (state: OrderState) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state: OrderState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getOrderById.pending, (state: OrderState, action: any) => {
        state.isLoading = true;
      })
      .addCase(getOrderById.fulfilled, (state: OrderState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state: OrderState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
