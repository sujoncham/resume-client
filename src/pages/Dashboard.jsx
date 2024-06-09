import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-16 py-10">
      <div className="flex justify-between items-start gap-1">
        <div className="w-[20%] bg-gray-500 px-3 py-2 h-[500px]">
          <ul>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard"}>Welcome</Link>
            </li>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard/addProject"}>Add Project</Link>
            </li>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard/addSkill"}>Add Skills</Link>
            </li>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard/address"}>Add Address</Link>
            </li>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard/socialLinkAdd"}>Add Social Link</Link>
            </li>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard/titleText"}>Add Title and SubTitle</Link>
            </li>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard/description"}>Description</Link>
            </li>
            <li className="hover:bg-purple-400 px-2 py-1 rounded-md">
              <Link to={"/dashboard/setting"}>Setting</Link>
            </li>
          </ul>
        </div>
        <div className="w-[80%] px-5 py-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
