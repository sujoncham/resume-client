// import axios from "axios";
// import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isOpenFunc } from "../helper/IsOpenFunc";
import Notification from "../helper/Notification";

const AllMessage = () => {
  const [messages] = Notification([]);
  const navigate = useNavigate();

  const handleIsOpen = async (id) => {
    if (id) {
      isOpenFunc(id);
      // navigate(`/message/${id}`);
    }
  };

  // console.log(messages.data);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/message/${id}`);
      window.location.reload();
      navigate("/messageAll");
      toast.info("Skill saved successfully:");
    } catch (error) {
      console.error("Error saving skill:", error);
      // Optionally, show an error message to the user
    }
  };
  return (
    <div className="container mx-auto px-10 py-10">
      <h1 className="py-10 font-bold text-xl">All Message </h1>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 py-3 px-2">Full name</th>
            <th className="border border-slate-300 py-3 px-2">Subject</th>
            <th className="border border-slate-300 py-3 px-2">Email</th>
            <th className="border border-slate-300 py-3 px-2">View</th>
          </tr>
        </thead>
        <tbody>
          {messages.data?.map((msg) => (
            <tr key={msg._id}>
              <td className="border border-slate-300 p-2">{msg.fullname}</td>
              <td className="border border-slate-300 p-2">{msg.title}</td>
              <td className="border border-slate-300 p-2">{msg.email}</td>
              <td className="border border-slate-300 p-2">
                <Link
                  className="underline text-green-500"
                  onClick={() => handleIsOpen(msg._id)}
                >
                  see message
                </Link>{" "}
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="border border-slate-300 p-2 rounded-md m-2"
                >
                  del
                </button>
                <span>{msg.isOpen ? "read" : "unread"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMessage;
