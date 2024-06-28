
import { Link } from "react-router-dom";
import img3 from "../../assets/project-1.png";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({project ={}}) => {
    
    const image = `http://localhost:5000/`;
    return (
        <div className="my-work">
                {project.image ? (
                 
                    <img
                      src={image + project.image}
                      className="w-full h-56"
                      alt="my-work"
                    />
                  
                ) : (
                  
                    <img src={img3} alt="my-work" />
                  
                )}
                <div className="sort-text animate__animated animate__bounce">
                  <div className="flex justify-center items-center w-full h-full">
                    <Link to={`/projectSingle/${project._id}`}>view project</Link>
                  </div>
                  
                </div>
              </div>
    );
};

export default ProjectItem;