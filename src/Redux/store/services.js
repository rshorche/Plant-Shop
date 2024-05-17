/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase";

export const getServicesFromSupabase = createAsyncThunk(
  "services/getServicesFromSupabase",
  async () => {
    let { data, error } = await supabase.from("OurService").select("*");
    return data;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getServicesFromSupabase.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default servicesSlice.reducer;
