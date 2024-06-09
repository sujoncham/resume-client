import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSkills } from "../../features/skills/skilAPI";

const initialState = {
  isLoading: false,
  skills: [],
  isError: false,
  error: null,
};

export const fetchSkills = createAsyncThunk(
  "skills/fetchSkills",
  async () => {
    const projects = await getSkills();
    return projects;
  }
);

const skillSlice = createSlice({
  name: "skills",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSkills.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchSkills.fulfilled, (state, action) => {
      state.isLoading = false;
      state.skills = action.payload;
    });
    builder.addCase(fetchSkills.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.skills = [];
      state.error = action.error?.message;
    });
  },
});

export default skillSlice.reducer;
