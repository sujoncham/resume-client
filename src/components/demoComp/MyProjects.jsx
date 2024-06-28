import { useEffect, useState } from "react";
import img3 from "../../assets/project-1.png";
import { Link } from "react-router-dom";
const projectsData = [
  {id:1,title:"travel blog", technology:["tailwindcss", "reactJs", "nodejs", "mongodb"], projectLink:"gfkoajfaj", projectClient:"fadfsaoi", projectServer:"fadfsaoi"},
  {id:2,title:"travel blog", technology:["tailwindcss", "reactJs", "nodejs", "mongodb"], projectLink:"gfkoajfaj", projectClient:"fadfsaoi", projectServer:"fadfsaoi"},
  {id:3,title:"travel blog", technology:["tailwindcss", "reactJs", "nodejs", "mongodb"], projectLink:"gfkoajfaj", projectClient:"fadfsaoi", projectServer:"fadfsaoi"},
  {id:4,title:"travel blog", technology:["tailwindcss", "reactJs", "nodejs", "mongodb"], projectLink:"gfkoajfaj", projectClient:"fadfsaoi", projectServer:"fadfsaoi"},
  {id:5,title:"travel blog", technology:["tailwindcss", "reactJs", "nodejs", "mongodb"], projectLink:"gfkoajfaj", projectClient:"fadfsaoi", projectServer:"fadfsaoi"},
  {id:6,title:"travel blog", technology:["tailwindcss", "reactJs", "nodejs", "mongodb"], projectLink:"gfkoajfaj", projectClient:"fadfsaoi", projectServer:"fadfsaoi"},
  {id:7,title:"travel blog", technology:["tailwindcss", "reactJs", "nodejs", "mongodb"], projectLink:"gfkoajfaj", projectClient:"fadfsaoi", projectServer:"fadfsaoi"},
]
const MyProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    setProjects(projectsData)
  }, [])
  return (
    <section className="py-10" id="projects">
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl font-bold py-5">My Projects</h1>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-5 mt-5">
          {projects.length > 0 ? (projects.map(project=><div key={project.id} className="my-work">
            <a href="">
              <img src={img3} alt="my-work" className="w-full" />
            </a>
            <div className="sort-text animate__animated animate__bounce text-center">
              <Link to={"/login"} className="xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                Project View
              </Link>
             
            </div>
          </div>)): "no data found"}
          
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
