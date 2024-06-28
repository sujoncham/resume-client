import axios from "axios";
import { useState } from "react";

const SocialLinkAdd = () => {
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    linkedIn: "",
    github: "",
    twitter: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/socialLink/socialLinkAdd",
        formData
      );
      console.log("social link saved successfully:", response.data);
      alert("social link saved successfully");
      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error("Error saving skill:", error.response.data);
      // Optionally, show an error message to the user
    }

    setFormData("");
    // location.reload();
  };
  return (
    <div className="bg-purple-400">
      <div className="container mx-auto px-10 py-16 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-2/3 border-2 border-purple-700 py-3 px-5 rounded-md"
        >
          <div className="flex flex-col">
            <label>Facebook user name:</label>
            <input
              type="text"
              name="facebook"
              value={formData.permanentAdd}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Instagram user name:</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>LinkedIn user name:</label>
            <input
              type="text"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Github user name:</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Twitter user name:</label>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
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

export default SocialLinkAdd;
