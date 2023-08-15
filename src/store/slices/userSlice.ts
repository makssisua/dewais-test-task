import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userServices from '../services/userServices';

export const getUser = createAsyncThunk<User, string, { rejectValue: any }>('getUser', async (username: string, { rejectWithValue }) => {
  try {
    return await userServices.getUser(username);
  } catch (error: any) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    return rejectWithValue(message)
  }
});

const initialState: UserState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUser.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getUser.fulfilled, (state, actions) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.user = actions.payload
    })
    .addCase(getUser.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  }
});

export default userSlice.reducer