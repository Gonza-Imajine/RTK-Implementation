import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../constants/constants';
import * as api from '../../modules/api';

export const getProfile = createAsyncThunk('get_profile', async (params) => {
  try {
    const response = await api.getProfile(params)
    return response
  } catch (err) {
    throw err;
  }
});

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    switchLoading: (state) => {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.getProfileLoading = true;
    }),
      builder.addCase(getProfile.fulfilled, (state, action) => {
        const {
          payload: { user },
        } = action;
        state.profile = user;
        state.getProfileLoading = false;
      }),
      builder.addCase(getProfile.rejected, (state) => {
        state.getProfileLoading = false;
      });
  },
});

const { reducer } = slice;

export const { swichLogout } = slice.actions;

export default reducer;