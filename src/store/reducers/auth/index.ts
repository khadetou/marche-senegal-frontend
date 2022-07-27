import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "store/actions/auth";
import { getCookie } from "store/actions/auth";

const localToken =
  typeof window !== "undefined"
    ? (localStorage.getItem("token") as string)
    : "";

const token = typeof window !== "undefined" && JSON.parse(localToken);
interface UserState {
  token: any;
  user: any;
  isError: boolean;
  isSuccess: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  message: "";
}

const initialState: UserState = {
  token: token ? token : "",
  user: null,
  isError: false,
  isAuthenticated: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// REGISTER USER
export const register = createAsyncThunk(
  "auth/register",
  async (user: any, thunkAPI: any) => {
    try {
      return await authService.register(user);
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

// LOGIN USER
export const login = createAsyncThunk(
  "auth/login",
  async (token: any, thunkAPI: any) => {
    try {
      return await authService.login(token);
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

// LOG OUT
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// GET USER
export const getUser = createAsyncThunk(
  "auth/user",
  async (token: string, thunkAPI: any) => {
    try {
      return await authService.getUser(token);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state: UserState) => {
      (state.isError = false),
        (state.isSuccess = false),
        (state.isLoading = false),
        (state.message = "");
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(register.pending, (state: UserState) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state: UserState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state: UserState, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state: UserState) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state: UserState, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state: UserState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
        state.message = action.payload;
        state.token = null;
      })
      .addCase(logout.fulfilled, (state: UserState) => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(getUser.pending, (state: UserState) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state: UserState, action: any) => {
        state.user = action.payload.data;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state: UserState, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
