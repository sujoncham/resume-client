

// eslint-disable-next-line react/prop-types
const Skill = ({skill={}}) => {
    return (
        <div
              
              className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56"
            >
              <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                {skill.title}
              </h1>
              <div>
                {skill?.technologies?.map((tech, index) => (
                  <p key={index}>- {tech}</p>
                ))}
              </div>
            </div>
    );
};

export default Skill;