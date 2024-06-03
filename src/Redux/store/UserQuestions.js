import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase";

export const getUserQuestionsFromSupabase = createAsyncThunk(
  "userQuestions/getUserQuestionsFromSupabase",
  async () => {
    let { data, error } = await supabase.from("UserQuestions").select("*");
    if (error) throw error;
    return data;
  }
);

const userQuestionsSlice = createSlice({
  name: "userQuestions",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserQuestionsFromSupabase.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserQuestionsFromSupabase.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getUserQuestionsFromSupabase.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userQuestionsSlice.reducer;
