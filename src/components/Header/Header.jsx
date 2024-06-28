import { useState } from "react";
import { FaBitbucket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import NotMessage from "../../helper/NotMessage";
import Notification from "../../helper/Notification";
import "../Header/Header.css";
const Header = () => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);

  const [noti] = Notification();
  const location = useLocation()
  // console.log(location.pathname)
  
  const unread = noti.data?.filter((item) => !item.isOpen).length;
  const user = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };

  const menu = (
    <>
       {location.pathname !== "/" ? (
        <>
        <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
       
          <Link to={"/"}>Home</Link>
          </li>
        <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
       
          <Link to={"/resume"}>About</Link>
          </li>
        <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
       
          <Link to={"/projects"}>Project</Link>
          </li>
        <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
       
          <Link to={"/skills"}>Skills</Link>
          </li>
        <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
       
          <Link to={"/contact"}>Contact</Link>
          </li>
          </>
        ) : (
          <>
          <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
          <Link href="#banner" onClick={() => scrollToSection("banner")}>
            Home
          </Link>
        
      </li>
      <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
      <Link href="#introduce" onClick={() => scrollToSection("introduce")}>
        About
      </Link>
    </li>
    <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
      <Link href="#mySkills" onClick={() => scrollToSection("mySkills")}>
        Skills
      </Link>
    </li>
    <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
      <Link href="#projects" onClick={() => scrollToSection("projects")}>
        Projects
      </Link>
    </li>
    <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
      <Link
        href="#contactForm"
        onClick={() => scrollToSection("contactForm")}
      >
        Contact
      </Link>
    </li>
    </>
      )}
      
    </>
  );
  const profileMenu = (
    <div className="flex-col items-start absolute top-14 z-30 w-48 bg-purple-600 text-white px-2 py-2">
      <button className="hover:bg-purple-400 px-2 py-1 rounded-md">
        <Link to={"/dashboard"}>Dashboard</Link>
      </button>
      <button
        className="hover:bg-purple-400 px-2 py-1 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );

  return (
    <header className="bg-purple-200 text-purple-800 p-1 sticky z-40 top-0 ">
      <div className="container mx-auto relative">
        <div className="menu">
          <Link
            className="text-purple-800 text-5xl uppercase font-bold"
            to={"/"}
          >
            Logo
          </Link>
          <div className="xs:hidden sm:hidden md:block lg:block">
            <ul className="flex justify-start items-center gap-2 md:text-purple-800 lg:text-purple-800">
              {menu}
            </ul>
          </div>
          <div className="xs:block sm:block md:hidden lg:hidden text-white w-full text-right">
            {open && (
              <button
                className="text-purple-700"
                onClick={() => setOpen(!open)}
              >
                |||
              </button>
            )}
            {!open && (
              <button
                className="text-purple-700"
                onClick={() => setOpen(!open)}
              >
                X
              </button>
            )}
          </div>
          <div>
            <ul className="flex justify-start items-center gap-1">
              {!user ? (
                <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
                  <Link to={"/login"}>Login</Link>
                </li>
              ) : (
                <>
                  <li
                    onClick={() => setOpen1(!open1)}
                    className="hover:bg-purple-400 border-2 w-14 h-14 bg-purple-500 px-2 py-1 rounded-full flex justify-center items-center relative cursor-pointer"
                  >
                    <FaBitbucket />
                    <sup className="text-red-800 font-bold text-[15px]">
                      {unread}
                    </sup>
                    {!open1 && <NotMessage noti={noti} />}
                  </li>
                  <li
                    onClick={() => setOpen2(!open2)}
                    className="hover:bg-purple-400 border-2 w-14 h-14 bg-purple-500 px-2 py-1 rounded-full flex justify-center items-center relative cursor-pointer"
                  >
                    <span>{username[0]}</span>
                    {!open2 && profileMenu}
                  </li>
                </>
              )}
            </ul>
          </div>
          {!open && (
            <div className="absolute z-50 top-16 bg-black opacity-70 w-full">
              <ul className="md:hidden lg:hidden xs:flex-col sm:flex-col justify-start items-center gap-2 xs:text-white sm:text-white">
                {menu}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
