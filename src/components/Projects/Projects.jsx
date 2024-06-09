import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProjects } from '../../redux/features/projects/projectSlice';
// import axios from "axios";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
import LoadingComp from "../../utils/LoadingComp";

const Projects = () => {
  
  const dispatch = useDispatch();
  const { projects, isLoading, isError, error } = useSelector(
    (state) => state.projects);
  console.log(projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  let content;
  if (isLoading) content = <LoadingComp />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error} error happened</div>;
  if (!isLoading && !isError && projects?.length === 0)
    content = <div className="col-span-12">No videos found</div>;
  if (!isLoading && !isError && projects?.length > 0)
    content = projects.map((project) => <ProjectItem key={project._id} project={project} />);

  // const [projects, setProjects] = useState([]);
  // // console.log(skill);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/project/");
  //       // console.log("Skill saved successfully:", response.data);
  //       setProjects(response.data.data);
  //     } catch (error) {
  //       console.error("Error saving skill:", error);
  //       // Optionally, show an error message to the user
  //     }
  //   };
  //   getData();
  // }, []);
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
          {content}
        </div>
      </div>
    </section>
  );
};

export default Projects;
