import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const SocialLnk = () => {
  return (
    <div className="flex justify-start items-center gap-2 mb-10">
      <a href="">
        <FaFacebookF />
      </a>
      <a href="">
        <FaInstagram />
      </a>
      <a href="">
        <FaTwitter />
      </a>
      <a href="">
        <FaLinkedinIn />
      </a>
      <a href="">
        <FaGoogle />
      </a>
    </div>
  );
};

export default SocialLnk;
