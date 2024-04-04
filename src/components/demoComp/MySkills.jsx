const MySkills = () => {
  return (
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
  );
};

export default MySkills;
