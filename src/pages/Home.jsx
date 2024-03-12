import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
