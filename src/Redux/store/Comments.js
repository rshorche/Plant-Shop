/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase";

export const getCommentsFromSupabase = createAsyncThunk(
  "comments/getCommentsFromSupabase",
  async () => {
    let { data, error } = await supabase.from("Comments").select("*");
    return data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCommentsFromSupabase.fulfilled, (state, action) => {
      console.log("state", state);
      console.log("action", action.payload);
      state.push(...action.payload);
    });
  },
});

export default commentsSlice.reducer;
