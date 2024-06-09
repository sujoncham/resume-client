import img1 from "../assets/feature.png";
import UserData from "../hooks/UserData";
import "../index.css";
import SocialLnk from "./SocialLnk";

const AboutMe = () => {
  const id = localStorage.getItem("userId");
  const { users } = UserData(id);

  return (
    <div className="about py-10 xs:py-2" id="introduce">
      <div className="container mx-auto py-10 px-10 xs:px-1 xs:py-1">
        <div className="flex md:flex-row-reverse lg:flex-row-reverse xs:flex-col sm:flex-col justify-between items-center gap-1">
          <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:w-full">
            <img src={img1} alt="" />
          </div>
          <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:xs:w-full">
            <div className="">
              <h3 className="text-3xl uppercase">
                {users?.data?.fname} {users?.data?.lname}
              </h3>
            </div>
            <div className="mb-10">
              {users?.data?.description ? (
                <>
                  <h5>{users?.data?.description}</h5>
                </>
              ) : (
                <>
                  <p>
                    আমি ওয়েব ডিজাইন সম্পর্কে পরিচিত হই, বা নাম শুনেছি ২০০৯ সালের
                    দিকে নামে বেনামে বিভিন্ন পোস্টার বা ব্যানার থেকে। এরপর
                    বিভিন্ন পেপার-এর মাধ্যমে আরো কিছুটা অবগত হই। আসলে এটা কি,
                    এটা দিয়ে কি করলে টাকা আসে, এসব ঘাটাঘাটি করিনি। তবে ২০১৩
                    সালের দিকে এক বড়ো ভাইয়ের কাছে একটু হিন্টস পাই। তখন থেকেই
                    ওয়েব ডিজাইন সম্পর্কে ঘাটাঘাটি করি।{" "}
                  </p>
                </>
              )}
            </div>
            <SocialLnk />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
