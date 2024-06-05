import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase";

export const getUsersFromSupabase = createAsyncThunk(
  "users/getUsersFromSupabase",
  async () => {
    const { data, error } = await supabase.auth.admin.listUsers();

    if (error) throw error;
    return data.users;
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
