import { useEffect, useState } from "react";
const skillData = [
  {id:1,title:"travel blog", technology:["Html", "css", "Bootstarp","tailwindcss"] },
  {id:2,title:"Language", technology:["javascript", "reactJs", "VueJs",] },
  {id:3,title:"Server", technology:["NodeJs", "Apache",] },
  {id:4,title:"Database", technology:["Mysql", "apachhe", "nodejs", "mongodb"]},
  {id:5,title:"Tools", technology:["Git", "Figma", "Photoshop", "Illustrator"]},
]
const MySkills = () => {
  const [skills, setSkills] = useState([])
  const text = "Example"

  useEffect(()=>{
    setSkills(skillData)
  }, [])
  return (
    <section className="bg-purple-800 py-16 text-white" id="mySkills">
      <div className="container mx-auto xs:px-1 sm:px-3 md:px-5 lg:px-5">
      <div>
          <h1 className="text-3xl font-bold py-5">My Skills</h1>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center gap-5">
          {skills.length > 0 ? skills.map(skill =><div key={skill.id} className="border-2 border-purple-500 hover:border-purple-900 py-3 px-5 h-56">
            <h1 className="text-2xl uppercase mb-5 xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
              {skill.title} ({text})
            </h1>
            {skill?.technology.map((tech,index)=><p key={index}>- {tech},</p>)}
            
          </div>): "no data found"}
          
        </div>
      </div>
    </section>
  );
};

export default MySkills;
