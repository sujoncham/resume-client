import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  skills: [],
  isError: false,
  error: null,
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
