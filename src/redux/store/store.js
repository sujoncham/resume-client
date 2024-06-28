import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projects/projectsSlice";
import singleProjectReducer from "../features/preject/projectSlice";
import skillReducer from "../features/skills/skillSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    project: singleProjectReducer,
    skills: skillReducer,
  },
});
