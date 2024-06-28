import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialLnk = () => {
  return (
    <div className="flex justify-start items-center gap-2 mb-10">
      <Link to={"https://www.facebook.com/sujonchambugong14/"}>
        <FaFacebookF />
      </Link>
      <Link to={"https://www.instagram.com/sujonchambu/"}>
        <FaInstagram />
      </Link>
      <Link to={"https://github.com/sujoncham"}> 
      <FaGithub />
      </Link>
      <Link to={"https://www.linkedin.com/in/sujon-chambugong/"}> 
        <FaLinkedinIn />
      </Link>
      
    </div>
  );
};

export default SocialLnk;
