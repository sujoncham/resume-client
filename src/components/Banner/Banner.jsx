/* eslint-disable react/prop-types */
import img from "../../assets/feature.png";
import UserData from "../../hooks/UserData";
import "../Banner/Banner.css";
import SocialLnk from "../SocialLnk";

const Banner = () => {
  const id = localStorage.getItem("userId");
  const { users } = UserData(id);

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
            <div className="mb-10">
              {users?.data?.title && users?.data?.subTitle ? (
                <>
                  <h5>{users?.data?.title}</h5>
                  <p>{users?.data?.subTitle}</p>
                </>
              ) : (
                <>
                  <h5>Course Participant</h5>
                  <p>Lorem ipsum dolor, sit amet cs?</p>
                </>
              )}
            </div>
            <SocialLnk />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
