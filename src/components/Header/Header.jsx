import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import "../Header/Header.css";
const Header = () => {
  const [open, setOpen] = useState(true);
  const user = localStorage.getItem("token");
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
      <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
        {user ? (
          <Link to={"/"}>Home</Link>
        ) : (
          <Link href="#banner" onClick={() => scrollToSection("banner")}>
            Home
          </Link>
        )}
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
  );

  return (
    <header className="bg-purple-200 text-purple-800 p-3 sticky z-40 top-0 ">
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
                ""
              )}
              {user && (
                <>
                  {/* <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
                    <Link to={"/register"}>Register</Link>
                  </li> */}
                  <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
                    <button onClick={handleLogout}>Logout</button>
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
