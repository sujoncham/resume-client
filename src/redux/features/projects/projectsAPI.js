
import axios from "../../../utils/AxiosInstance";

export const getProjects = async () => {
  const  response = await axios.get("/project");

  return response.data.data;
};

export const addProjects = async (data) => {
  const response = await axios.post("/project/create", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

export const updateProjects = async (id, data) => {
  const  response = await axios.put(`/project/${id}`, data);

  return response.data.data;
};



export const deleteProjects = async (id) => {
  const  response = await axios.put(`/project/${id}`);

  return response.data.data;
};
