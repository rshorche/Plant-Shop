import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase";

export const getUsersFromSupabase = createAsyncThunk(
  "users/getUsersFromSupabase",
  async () => {
    const { data, error } = await supabase.auth.admin.getUserById("c5a74156-56d5-4f02-9594-00293cbb9fcc");

    if (error) throw error;
    return data.users; // assuming 'data' has a 'users' property that is an array
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFromSupabase.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersFromSupabase.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getUsersFromSupabase.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
