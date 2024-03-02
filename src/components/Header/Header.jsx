import { useState } from "react";
import "../Header/Header.css";

const Header = () => {
  const [open, setOpen] = useState(true);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menu = (
    <>
      <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
        <a href="#banner" onClick={() => scrollToSection("banner")}>
          Home
        </a>
      </li>
      <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
        <a href="#introduce" onClick={() => scrollToSection("introduce")}>
          About
        </a>
      </li>
      <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
        <a href="#mySkills" onClick={() => scrollToSection("mySkills")}>
          Skills
        </a>
      </li>
      <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
        <a href="#projects" onClick={() => scrollToSection("projects")}>
          Projects
        </a>
      </li>
      <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
        <a href="#contactForm" onClick={() => scrollToSection("contactForm")}>
          Contact
        </a>
      </li>
    </>
  );

  return (
    <header className="bg-gray-800 p-3 sticky z-40 top-0 ">
      <div className="container mx-auto relative">
        <div className="menu">
          <a className="text-white text-xl" href="#">
            Logo
          </a>
          <div className="xs:hidden sm:hidden md:block lg:block">
            <ul className="flex justify-start items-center gap-2">{menu}</ul>
          </div>
          <div className="xs:block sm:block md:hidden lg:hidden">
            {open && <button onClick={() => setOpen(!open)}>|||</button>}
            {!open && <button onClick={() => setOpen(!open)}>X</button>}
          </div>
          {!open && (
            <div className="absolute z-50 top-10 bg-black opacity-70 w-full">
              <ul className="md:hidden lg:hidden xs:flex-col sm:flex-col justify-start items-center gap-2 text-white">
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
