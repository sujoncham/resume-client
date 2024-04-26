import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";

const MessageById = () => {
  const { id } = useParams();
  const [message, setMessage] = useState({});
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  console.log(message);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/message/${id}`
        );
        // console.log("Skill saved successfully:", response.data);
        setMessage(response.data.data);
      } catch (error) {
        console.error("Error saving skill:", error);
        // Optionally, show an error message to the user
      }
    };
    getData();
  }, [id]);

  return (
    <div className="container mx-auto px-16 py-10">
      <h1>Message By Id {id}</h1>
      <h3>
        To : {fname} {lname}
      </h3>
      <p>
        From: {message.fullname} ({message.email})
      </p>

      <p className="py-2">Subject : {message.title}</p>
      <p>Message: {message.description}</p>
    </div>
  );
};

export default MessageById;
