import axios from "../../../utils/AxiosInstance";

export const getSkills = async () => {
  const  response = await axios.get("/skill");

  return response.data.data;
};
