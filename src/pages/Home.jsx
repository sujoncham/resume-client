import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills";
import MyAbout from "../components/demoComp/MyAbout";
import MyBanner from "../components/demoComp/MyBanner";
import MyProjects from "../components/demoComp/MyProjects";
import MySkills from "../components/demoComp/MySkills";

const Home = () => {
  const user = localStorage.getItem("userId");
  console.log(user);
  return (
    <div>
      {!user ? (
        <>
          <MyBanner />
          <MyAbout />
          <MySkills />
          <MyProjects />
        </>
      ) : (
        <>
          <Banner user={user} />
          <AboutMe user={user} />
          <Skills user={user} />
          <Projects user={user} />
        </>
      )}
      <ContactForm />
    </div>
  );
};

export default Home;
