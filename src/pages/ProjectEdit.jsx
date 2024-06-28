import { useParams } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProjects } from "../redux/features/projects/projectsSlice";


const ProjectEdit = () => {
    const {id} = useParams()
    const user = localStorage.getItem("userId");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [title, setTitle] = useState("")
  const [technology, setTechnology] = useState("")
  const [description, setDescription] = useState("")
  const [projectLink, setProjectLink] = useState("")
  const [projectClient, setProjectClient] = useState("")
  const [projectServer, setProjectServer] = useState("")
  const [image, setImage] = useState(null)
  const reset = ()=>{
    setTitle(""),
    setTechnology(""),
    setDescription(""),
    setProjectLink(""),
    setProjectClient(""),
    setProjectServer(""),
    setImage(null)
  }
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      technology,
      description,
      projectLink,
      projectClient,
      projectServer,
      image, 
      user
    }

    if (!user) {
      navigate("/login");
    }

    try {
      await dispatch(createProjects(data));
      console.log("Project created successfully");
    } catch (error) {
      console.error("Error creating project:", error);
    }

    reset()

 
  };
    
    return (
        <div className="bg-purple-400">
            <h1>Hello {id}</h1>
      <div className="container mx-auto px-10 py-2 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-2/3 border-2 border-purple-700 px-5 rounded-md py-2"
        >
          <div className="flex flex-col">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Technology:</label>
            <input
              type="text"
              name="technology"
              placeholder="Add Technology"
              value={technology}
              onChange={(e)=>setTechnology(e.target.value)}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>ProjectLink:</label>
            <input
              type="text"
              name="projectLink"
              placeholder="Add ProjectLink"
              value={projectLink}
              onChange={(e)=>setProjectLink(e.target.value)}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>ProjectClient:</label>
            <input
              type="text"
              name="projectClient"
              placeholder="Add projectClient"
              value={projectClient}
              onChange={(e)=>setProjectClient(e.target.value)}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>ProjectServer:</label>
            <input
              type="text"
              name="projectServer"
              placeholder="Add projectServer"
              value={projectServer}
              onChange={(e)=>setProjectServer(e.target.value)}
              className="border-2 border-purple-300 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={(e)=>setImage(e.target.files[0] )}
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

export default ProjectEdit;