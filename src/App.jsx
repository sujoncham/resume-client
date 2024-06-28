import {
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import RequireAuth from "./hooks/RequireAuth";
import AddAddress from "./pages/AddAddress";
import AddData from "./pages/AddData";
import AddProject from "./pages/AddProject";
import SkillForm from "./pages/AddSkills";
import AllMessage from "./pages/AllMessage";
import Dashboard from "./pages/Dashboard";
import DashboardSetting from "./pages/DashboardSetting";
import DescriptionAdd from "./pages/DescriptionAdd";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MessageById from "./pages/MessageById";
import Register from "./pages/Register";
import SocialLinkAdd from "./pages/SocialLinkAdd";
import TitleSubTitle from "./pages/TitleSubTitle";
import WelcomePage from "./pages/WelcomePage";
import About from "./pages/About";
import SinglePreview from "./components/Resume/SinglePreview";
import ProjectSingle from "./pages/ProjectSingle";
import ProjectEdit from "./pages/ProjectEdit";
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/MySkills";
import MyContact from "./pages/MyContact";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resume" element={<About />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/contact" element={<MyContact />} />
          <Route path="/project/:id" element={<SinglePreview />} />
          <Route path="/projectSingle/:id" element={<ProjectSingle />} />
          <Route path="/projectEdit/:id" element={<ProjectEdit />} />

          <Route path="/messageAll" element={<AllMessage />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<WelcomePage />} />
            <Route path="addData" element={<AddData />} />
            <Route path="addSkill" element={<SkillForm />} />
            <Route path="addProject" element={<AddProject />} />
            <Route path="address" element={<AddAddress />} />
            <Route path="socialLinkAdd" element={<SocialLinkAdd />} />
            <Route path="titleText" element={<TitleSubTitle />} />
            <Route path="description" element={<DescriptionAdd />} />
            <Route path="setting" element={<DashboardSetting />} />
          </Route>
          <Route
            path="/message/:id"
            element={
              <RequireAuth>
                <MessageById />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
