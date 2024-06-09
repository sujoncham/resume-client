
import { Link } from "react-router-dom";
import img3 from "../../assets/project-1.png";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({project ={}}) => {
    
    const image = `http://localhost:5000/`;
    return (
        <div className="my-work">
                {project.image ? (
                  <Link to={''}>
                    <img
                      src={image + project.image}
                      className="w-full h-auto"
                      alt="my-work"
                    />
                  </Link>
                ) : (
                  <Link to="">
                    <img src={img3} alt="my-work" />
                  </Link>
                )}
                <div className="sort-text animate__animated animate__bounce">
                  <h1>{project.title}</h1>
                  <h3>
                    <span>Technology :</span> {project.technology}
                  </h3>
                  <h4>Details : {project.description.slice(0, 50)} ...</h4>
                  <p>
                    Project link :{" "}
                    <Link to={""} className="text-orange-500">
                      project view
                    </Link>
                  </p>
                  <br />
                  <p>
                    Project code :{" "}
                    <Link to={""} className="text-orange-500">
                      source code
                    </Link>
                  </p>
                </div>
              </div>
    );
};

export default ProjectItem;