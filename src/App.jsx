import {
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import AddProject from "./pages/AddProject";
import SkillForm from "./pages/AddSkills";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
