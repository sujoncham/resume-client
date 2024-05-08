/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import img from "../../assets/feature.png";
import UserData from "../../hooks/UserData";
import "../Banner/Banner.css";
import SocialLnk from "../SocialLnk";

const Banner = () => {
  const id = localStorage.getItem("userId");
  const { users } = UserData(id);

  console.log(users);

  console.log(users);
  const navigate = useNavigate();
  const handleTitle = (id) => {
    navigate(`/titleText/${id}`);
  };
  return (
    <section className="bg-purple-800" id="banner">
      <div className="container mx-auto">
        <div className="flex xs:flex-col sm:flex-col justify-between items-center gap-1">
          <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:w-full">
            <img src={img} alt="" />
          </div>
          <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:w-full mb-10">
            <h3 className="text-3xl uppercase">
              {users?.data?.fname} {users?.data?.lname}
            </h3>
            <div>
              {users?.data?.title && users?.data?.subTitle ? (
                <>
                  <h5>{users?.data?.title}</h5>
                  <p>{users?.data?.subTitle}</p>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleTitle(id)}
                    title="Title and SubTitle"
                    className="border-2 border-purple-300 px-2 py-1 rounded-md"
                  >
                    Add (+){" "}
                  </button>
                  <h5>Course Participant</h5>
                  <p>Lorem ipsum dolor, sit amet cs?</p>
                </>
              )}
            </div>
          </div>
          <SocialLnk />
        </div>
      </div>
    </section>
  );
};

export default Banner;
