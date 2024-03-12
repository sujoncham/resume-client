import img from "../../assets/feature.png";
import img3 from "../../assets/project-1.png";
import img1 from "../assets/feature.png";
import SocialLnk from "../components/SocialLnk";
import "../index.css";
import "./Projects.css";

const Home1 = () => {
  return (
    <div>
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
      <div className="about py-10 xs:py-2" id="introduce">
        <div className="container mx-auto py-10 px-10 xs:px-1 xs:py-1">
          <div className="flex md:flex-row-reverse lg:flex-row-reverse xs:flex-col sm:flex-col justify-between items-center gap-1">
            <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:w-full">
              <img src={img1} alt="" />
            </div>
            <div className="md:w-[50%] lg:w-[50%] xs:w-full sm:xs:w-full">
              <div className="">
                <h3 className="text-3xl uppercase">John Kelbene</h3>
                <h5 className="text-xl uppercase">Course Participant</h5>
              </div>
              <div className="">
                <p>
                  আমি ওয়েব ডিজাইন সম্পর্কে পরিচিত হই, বা নাম শুনেছি ২০০৯ সালের
                  দিকে নামে বেনামে বিভিন্ন পোস্টার বা ব্যানার থেকে। এরপর বিভিন্ন
                  পেপার-এর মাধ্যমে আরো কিছুটা অবগত হই। আসলে এটা কি, এটা দিয়ে কি
                  করলে টাকা আসে, এসব ঘাটাঘাটি করিনি। তবে ২০১৩ সালের দিকে এক বড়ো
                  ভাইয়ের কাছে একটু হিন্টস পাই। তখন থেকেই ওয়েব ডিজাইন সম্পর্কে
                  ঘাটাঘাটি করি।{" "}
                </p>
              </div>
              <SocialLnk />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-purple-800 py-16 text-white" id="mySkills">
        <div className="container mx-auto xs:px-1 sm:px-3 md:px-5 lg:px-5">
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-5">
            <div className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56">
              <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                Front end
              </h1>
              <p>- Html,</p>
              <p>- Javascript,</p>
              <p>- React</p>
            </div>
            <div className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56">
              <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                Styling Css
              </h1>
              <p>- Css,</p>
              <p>- Bootstrap,</p>
              <p>- TailWind</p>
            </div>
            <div className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56">
              <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                Language
              </h1>
              <p>- Javascript</p>
            </div>
            <div className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56">
              <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                Back end
              </h1>
              <p>- Node Js</p>
            </div>
            <div className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56">
              <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                Database
              </h1>
              <p>- MongoDB</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10" id="projects">
        <div className="container mx-auto">
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-5">
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" className="w-full" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1 className="xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                  Travel Design Projects
                </h1>
                <h3 className="xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                  <span>Technology :</span> html css , js
                </h3>
                <p className="xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                  Project link :{" "}
                  <a href="https://sujoncham.github.io/travel-website-design-responsive/">
                    project view
                  </a>
                </p>
                <br />
                <p className="xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                  Project code :{" "}
                  <a href="https://github.com/sujoncham/travel-website-design-responsive">
                    source code
                  </a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>Blog Design Projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link :{" "}
                  <a href="https://sujoncham.github.io/blog-template-flexbox-responsive/">
                    project view
                  </a>
                </p>
                <br />
                <p>
                  Project code :{" "}
                  <a href="https://github.com/sujoncham/blog-template-flexbox-responsive">
                    source code
                  </a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>New projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>New projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>New projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>New projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>New projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>New projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
            <div className="my-work">
              <a href="">
                <img src={img3} alt="my-work" />
              </a>
              <div className="sort-text animate__animated animate__bounce">
                <h1>New projects</h1>
                <h3>
                  <span>Technology :</span> html css , js
                </h3>
                <p>
                  Project link : <a href="">project view</a>
                </p>
                <br />
                <p>
                  Project code : <a href="">source code</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex items-center justify-center p-12 bg-purple-400"
        id="contactForm"
      >
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none hover:bg-purple-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home1;
