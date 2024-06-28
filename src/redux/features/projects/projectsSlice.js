import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProjects, deleteProjects, getProjects, updateProjects } from "./projectsAPI";

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

export const createProjects = createAsyncThunk(
  "projects/createProjects",
  async (data) => {
    const project = await addProjects(data);
    return project;
  }
);

export const editProjects = createAsyncThunk(
  "projects/editProjects",
  async ({id, data}) => {
    const projects = await updateProjects(id, data);
    return projects;
  }
);



export const removeProjects = createAsyncThunk(
  "projects/removeProjects",
  async (id) => {
    const projects = await deleteProjects(id);
    return projects;
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchProjects.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(fetchProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects = action.payload;
    })
    .addCase(fetchProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.projects = [];
      state.error = action.error?.message;
    })
    .addCase(createProjects.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(createProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.projects.push(action.payload);
    })
    .addCase(createProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    })
    .addCase(editProjects.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(editProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;

      const indexUpdate = state.projects.findIndex(project => project._id === action.payload._id)
      state.projects[indexUpdate]= action.payload
    })
    .addCase(editProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    })

    .addCase(removeProjects.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(removeProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;

      state.projects = state.projects.filter(project => project._id !== action.payload._id)
      
    })
    .addCase(removeProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});

export default projectSlice.reducer;
