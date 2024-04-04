import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Skills = () => {
  const [skill, setSkill] = useState([]);
  // console.log(skill);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/skill/");
        // console.log("Skill saved successfully:", response.data);
        setSkill(response.data.data);
      } catch (error) {
        console.error("Error saving skill:", error);
        // Optionally, show an error message to the user
      }
    };
    getData();
  }, []);

  return (
    <section className="bg-purple-800 py-16 text-white" id="mySkills">
      <div className="container mx-auto xs:px-1 sm:px-3 md:px-5 lg:px-5">
        <div className="flex justify-start items-center gap-1">
          <h1 className="text-center text-3xl font-bold py-10">My Skills </h1>
          <Link
            className="text-2xl font-bold border-2 border-purple-300 px-1"
            to={"/addSkill"}
          >
            +
          </Link>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-5">
          {skill.map((skil) => (
            <div
              key={skil._id}
              className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56"
            >
              <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                {skil.title}
              </h1>
              <div>
                {skil?.technologies?.map((tech, index) => (
                  <p key={index}>- {tech}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
