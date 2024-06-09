// import axios from "axios";
import { useEffect, } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "../../redux/features/skills/skillSlice";
import LoadingComp from "../../utils/LoadingComp";
import Skill from "./Skill";

const Skills = () => {
  const dispatch = useDispatch();
  const { skills, isLoading, isError, error } = useSelector(
    (state) => state.skills);
  console.log(skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  let content;
  if (isLoading) content = <LoadingComp />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error} error happened</div>;
  if (!isLoading && !isError && skills?.length === 0)
    content = <div className="col-span-12">No videos found</div>;
  if (!isLoading && !isError && skills?.length > 0)
    content = skills.map((skill) => <Skill key={skill._id} skill={skill} />);
  // const [skills, setSkills] = useState([]);
  // // console.log(skill);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/skill/");
  //       // console.log("Skill saved successfully:", response.data);
  //       setSkills(response.data.data);
  //     } catch (error) {
  //       console.error("Error saving skill:", error);
  //       // Optionally, show an error message to the user
  //     }
  //   };
  //   getData();
  // }, []);

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
          {content}
        </div>
      </div>
    </section>
  );
};

export default Skills;
