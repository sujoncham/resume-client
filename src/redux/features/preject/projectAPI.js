import axios from "../../../utils/AxiosInstance";
export const getByIdProjects = async (id) => {
    const  response = await axios.get(`/project/${id}`);
  
    return response.data.data;
  };