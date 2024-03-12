import axios from "axios";
import { useState } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    technology: "",
    description: "",
    projectLink: "",
    projectGit: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object
    const projectData = new FormData();
    projectData.append("title", formData.title);
    projectData.append("technology", formData.technology);
    projectData.append("description", formData.description);
    projectData.append("projectLink", formData.projectLink);
    projectData.append("projectGit", formData.projectGit);
    projectData.append("image", formData.image);

    try {
      // Send form data to backend
      const response = await axios.post(
        "http://localhost:5000/api/project/create",
        projectData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Project saved successfully:", response.data);
      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error("Error saving project:", error);
      // Optionally, show an error message to the user
    }
  };
  return (
    <div className="bg-purple-400">
      <div className="container mx-auto px-10 py-16 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 border-2 border-purple-700 py-3 px-5 rounded-md"
        >
          <div className="flex flex-col">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={formData.title}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              value={formData.description}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Technology:</label>
            <input
              type="text"
              name="technology"
              placeholder="Add Technology"
              value={formData.technology}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>ProjectLink:</label>
            <input
              type="text"
              name="projectLink"
              placeholder="Add ProjectLink"
              value={formData.projectLink}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>ProjectGit:</label>
            <input
              type="text"
              name="projectGit"
              placeholder="Add ProjectGit"
              value={formData.projectGit}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <button
            type="submit"
            className="border-2 border-purple-800 bg-purple-500 hover:bg-purple-700 rounded-md px-2 py-1 mt-5"
          >
            Save Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
