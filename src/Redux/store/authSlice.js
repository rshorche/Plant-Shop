import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../../supabase';

// Thunk to check session
export const checkSession = createAsyncThunk('auth/checkSession', async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user || null;
});

// Thunk for login
export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    throw new Error(error.message);
  }
  return data.user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      supabase.auth.signOut();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkSession.fulfilled, (state, action) => {
        state.user = action.payload;
        if (action.payload) {
          localStorage.setItem('user', JSON.stringify(action.payload));
        } else {
          localStorage.removeItem('user');
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
