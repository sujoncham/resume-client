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
import DescriptionAdd from "./pages/DescriptionAdd";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MessageById from "./pages/MessageById";
import Register from "./pages/Register";
import SocialLinkAdd from "./pages/SocialLinkAdd";
import TitleSubTitle from "./pages/TitleSubTitle";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addSkill" element={<SkillForm />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="/addData" element={<AddData />} />
          <Route path="/address" element={<AddAddress />} />
          <Route path="/messageAll" element={<AllMessage />} />
          <Route path="/titleText/:id" element={<TitleSubTitle />} />
          <Route path="/description/:id" element={<DescriptionAdd />} />
          <Route path="/socialLinkAdd" element={<SocialLinkAdd />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
