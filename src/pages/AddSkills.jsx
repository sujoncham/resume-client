import axios from "axios";
import { useState } from "react";

const SkillForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    technologies: [],
    newTechnology: "", // For adding new technology
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTechnology = () => {
    if (formData.newTechnology.trim() !== "") {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, formData.newTechnology],
        newTechnology: "", // Clear input after adding
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/skill/addSkill",
        formData
      );
      console.log("Skill saved successfully:", response.data);
      alert("Skill saved successfully");
      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error("Error saving skill:", error);
      // Optionally, show an error message to the user
    }

    setFormData("");
    location.reload();
  };

  return (
    <div className="bg-purple-400">
      <div className="container mx-auto px-10 py-16 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-2/3 border-2 border-purple-700 py-3 px-5 rounded-md"
        >
          <div className="flex flex-col">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Add title"
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>Technologies:</label>
            <ul>
              {formData?.technologies?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="mt-3">
              <input
                type="text"
                name="newTechnology"
                value={formData.newTechnology}
                onChange={handleChange}
                placeholder="Add new technology"
                className="border-2 border-purple-300 rounded-md px-2 py-1"
              />
              <button
                type="button"
                className="border-2 border-purple-300 rounded-md px-2 py-1 hover:bg-purple-500"
                onClick={handleAddTechnology}
              >
                Add
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="border-2 border-purple-300 rounded-md px-2 py-1 mt-5 hover:bg-purple-500"
          >
            Save Skill
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillForm;
