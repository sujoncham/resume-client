import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom"
import { singleProjects } from "../redux/features/preject/projectSlice";
import LoadingComp from "../utils/LoadingComp";

const ProjectSingle = () => {
    const {id} = useParams()
    // console.log(id)
    const dispatch = useDispatch();
    const { project, isLoading, isError, error } = useSelector(
      (state) => state.project);
    // console.log(project);
  
    useEffect(() => {
      dispatch(singleProjects(id));
    }, [dispatch, id]);
  
    let content;
    if (isLoading) content = <LoadingComp />;

    if (!isLoading && !isError && project?._id)
      content = project._id ? (<div className="w-2/3">
            <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold mb-5">{project.title}</h1>
            <Link to={`/projectEdit/${id}`}>Edit</Link>
            </div>
              <h3>
                Technology :{project.technology}
              </h3>
              <h4>Details : {project.description}</h4>
              <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam exercitationem fugiat amet veritatis nihil laborum eius nesciunt repudiandae? Neque deleniti asperiores saepe cumque repellat? Exercitationem excepturi voluptatum dolore placeat facere expedita magni itaque explicabo sequi qui. Vitae ut quidem reprehenderit quam sint adipisci suscipit, error, laborum praesentium quas illo voluptas veritatis nemo libero molestias sunt mollitia odit. Expedita mollitia repudiandae at veritatis nobis sit harum totam tempore commodi, optio doloribus nostrum sapiente dolorem reiciendis, sed esse ab. Quos provident deserunt incidunt necessitatibus modi eligendi impedit enim adipisci magni magnam dicta dolorem dolores aspernatur quaerat nobis ut quod rerum animi amet, placeat aut, iure nulla explicabo. Necessitatibus pariatur numquam officiis voluptatibus distinctio possimus voluptatum dolore minus enim nostrum rerum quas esse harum, magnam sequi, eum sapiente, reiciendis dolorem. Voluptatibus velit, sit aut a quia nemo incidunt porro possimus? Placeat autem labore dolore ab nobis quis ipsam suscipit quaerat voluptates expedita?</p>
              <p>
                Project Live link :{" "}
                <Link to={project.projectLink} className="text-orange-500">
                  project view
                </Link>
              </p>
              <p>
              Project Client Code :{" "}
                <Link to={project.projectClient} className="text-orange-500">
                  source code
                </Link>
              </p>
              <p>
              Project Server Code :{" "}
                <Link to={project.projectServer} className="text-orange-500">
                  source code
                </Link>
              </p>
      </div>): <p>{error?.message}</p>;
    return (
        <div className="container mx-auto px-16 py-10 flex justify-center items-center">
            {content}
        </div>
    );
};

export default ProjectSingle;