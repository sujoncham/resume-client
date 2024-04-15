export const getProjects = async () => {
  const response = await fetch("http://localhost:5000/api/project/");
  return response.json();
};
