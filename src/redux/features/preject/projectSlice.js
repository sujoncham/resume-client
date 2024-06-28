import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getByIdProjects } from "./projectAPI";


const initialState = {
  isLoading: false,
  project: {},
  isError: false,
  error: null,
};
export const singleProjects = createAsyncThunk(
  "projects/singleProjects",
  async (id) => {
    const project = await getByIdProjects(id);
    return project;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(singleProjects.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(singleProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.project = action.payload;
      })
      .addCase(singleProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.project = {};
        state.error = action.error?.message;
      });
  },
});

export default projectSlice.reducer;
