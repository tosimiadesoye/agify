import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "./data.json";

export const getApiData = createAsyncThunk(
  "agify/data",
  async (name: string, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);


const initialState = {
  data: data,
};

export const dataSlice = createSlice({
  name: "agify",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiData.pending, (state, action) => {});
    builder.addCase(getApiData.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload];
    });
  },
});

export default dataSlice.reducer;
