import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProjects } from '../../redux/features/projects/projectsSlice';
// import axios from "axios";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
import LoadingComp from "../../utils/LoadingComp";

const Projects = () => {
  
  const dispatch = useDispatch();
  const { projects, isLoading, isError, error } = useSelector(
    (state) => state.projects);
  // console.log(projects);

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

  
  return (
    <section className="py-10" id="projects">
      <div className="container mx-auto">
        <div className="flex justify-start items-center gap-1">
          <h1 className="text-center text-3xl font-bold py-10">My Projects</h1>
          <Link
            className="text-2xl font-bold border-2 border-purple-300 px-1"
            to={"/dashboard/addProject"}
          >
            +
          </Link>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-10">
          {content}
        </div>
      </div>
    </section>
  );
};

export default Projects;
