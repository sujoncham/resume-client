import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm";
import HomeSec1 from "../components/HomeSec1";
import HomeSec2 from "../components/HomeSec2";
import Projects from "../components/projects/projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeSec1 />
      <HomeSec2 />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
