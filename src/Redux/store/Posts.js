/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase";

export const getPostsFromSupabase = createAsyncThunk(
  "posts/getPostsFromSupabase",
  async () => {
    let { data, error } = await supabase.from("BlogPost").select("*");
    return data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getPostsFromSupabase.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default postsSlice.reducer;
