
import axios from "../../../utils/AxiosInstance";

export const getProjects = async () => {
  const  response = await axios.get("/project");

  return response.data.data;
};
