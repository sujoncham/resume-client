import axios from "axios";

export const isOpenFunc = async (id) => {
  try {
    await axios.put(`http://localhost:5000/api/message/${id}`, {
      isOpen: true,
    });
    console.log("Skill saved successfully:");
    window.location.replace(`/message/${id}`);
  } catch (error) {
    console.error("Error saving skill:", error);
    // Optionally, show an error message to the user
  }
};
