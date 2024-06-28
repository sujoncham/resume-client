import ResumeLeft from "../components/Resume/ResumeLeft";
import ResumeRight from "../components/Resume/ResumeRight";

const About = () => {
  return (
    <div className="container mx-auto px-32 py-10">
      <div className="flex justify-start items-start">
        <ResumeLeft />
     
      <ResumeRight />
      </div>


    </div>
  );
};

export default About;
