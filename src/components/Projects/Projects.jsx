import axios from "axios";
import { useEffect, useState } from "react";
import img3 from "../../assets/project-1.png";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  const image = `http://localhost:5000/`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/project/");
        console.log("Skill saved successfully:", response.data);
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error saving skill:", error);
        // Optionally, show an error message to the user
      }
    };
    getData();
  }, []);
  return (
    <section className="py-10" id="projects">
      <div className="container mx-auto">
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-5">
          {projects.map((project) => (
            <div key={project._id} className="my-work">
              {project.image ? (
                <a href="">
                  <img src={image + project.image} alt="my-work" />
                </a>
              ) : (
                <a href="">
                  <img src={img3} alt="my-work" />
                </a>
              )}
              <div className="sort-text animate__animated animate__bounce">
                <h1>{project.title}</h1>
                <h3>
                  <span>Technology :</span> {project.technology}
                </h3>
                <h4>{project.description}</h4>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
