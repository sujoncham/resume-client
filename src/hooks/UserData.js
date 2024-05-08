import axios from "axios";
import { useEffect, useState } from "react";

const UserData = (id) => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/profile/${id}`
        );
        // console.log("Skill saved successfully:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error saving skill:", error);
        // Optionally, show an error message to the user
      }
    };
    getData();
  }, [id]);
  return { users };
};

export default UserData;
