import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
const TitleSubTitle = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/title/${id}`,
        formData
      );
      console.log("Addresses saved successfully:", response.data);
      alert("Addresses saved successfully");
      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error("Error saving skill:", error.response.data);
      // Optionally, show an error message to the user
    }

    setFormData("");
    // location.reload();
  };
  return (
    <div>
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
              placeholder="Add title"
              value={formData.title}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label>Temporary Address:</label>
            <input
              type="text"
              name="subTitle"
              placeholder="Sub Title"
              value={formData.subTitle}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>

          <button
            type="submit"
            className="border-2 border-purple-800 bg-purple-500 hover:bg-purple-700 rounded-md px-2 py-1 mt-5"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default TitleSubTitle;
