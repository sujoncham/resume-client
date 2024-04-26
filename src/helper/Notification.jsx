import axios from "axios";
import { useEffect, useState } from "react";

const Notification = () => {
  const [noti, setNoti] = useState([]);
  console.log(noti);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/message/");
        // console.log("Skill saved successfully:", response.data);
        setNoti(response.data);
      } catch (error) {
        console.error("Error saving skill:", error);
        // Optionally, show an error message to the user
      }
    };
    getData();
  }, []);
  return [noti];
};

export default Notification;
