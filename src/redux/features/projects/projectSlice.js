import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./projectAPI";
const initialState = {
  isLoading: false,
  projects: [],
  isError: false,
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const projects = await getProjects();
    return projects;
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});

export default projectSlice.reducer;
