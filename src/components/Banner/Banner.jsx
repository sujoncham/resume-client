import img from "../../assets/feature.png";
import "../Banner/Banner.css";
const Banner = () => {
  return (
    <section className="bg-purple-800" id="banner">
      <div className="container mx-auto">
        <div className="flex xs:flex-col sm:flex-col justify-between items-center gap-1">
          <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:w-full">
            <img src={img} alt="" />
          </div>
          <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:w-full mb-10">
            <h3 className="text-3xl uppercase">John Kelbene</h3>
            <h5>Course Participant</h5>
            <p>Lorem ipsum dolor, sit amet cs?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
