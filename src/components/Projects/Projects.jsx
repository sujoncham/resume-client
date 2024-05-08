import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img3 from "../../assets/project-1.png";
// import { getProjects } from "../../redux/features/projects/projectAPI";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const image = `http://localhost:5000/`;
  // const { projects, isLoading, isError, error } = useSelector(
  //   (state) => state.projects
  // );
  // const dispatch = useDispatch();
  // console.log(projects);

  // useEffect(() => {
  //   dispatch(getProjects());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }
  // if (!isLoading && isError) {
  //   return <h1>{error}</h1>;
  // }
  // if (!isLoading && !isError && projects?.length === 0) {
  //   return <h1>No posts Found</h1>;
  // }

  const [projects, setProjects] = useState([]);
  // console.log(skill);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/project/");
        // console.log("Skill saved successfully:", response.data);
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
        <div className="flex justify-start items-center gap-1">
          <h1 className="text-center text-3xl font-bold py-10">My Projects</h1>
          <Link
            className="text-2xl font-bold border-2 border-purple-300 px-1"
            to={"/addProject"}
          >
            +
          </Link>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-5">
          {projects?.length > 0 ? (
            projects?.map((project) => (
              <div key={project._id} className="my-work">
                {project.image ? (
                  <a href="">
                    <img
                      src={image + project.image}
                      className="w-full h-auto"
                      alt="my-work"
                    />
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
                  <h4>Details : {project.description.slice(0, 50)} ...</h4>
                  <p>
                    Project link :{" "}
                    <a href="" className="text-orange-500">
                      project view
                    </a>
                  </p>
                  <br />
                  <p>
                    Project code :{" "}
                    <a href="" className="text-orange-500">
                      source code
                    </a>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>projects not found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
