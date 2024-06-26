import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/feature.png";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const hangleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then((data) => {
        console.log(data);
        console.log("login successfull");
        localStorage.setItem("userId", data.data.data._id);
        localStorage.setItem("username", data.data.data.username);
        localStorage.setItem("fname", data.data.data.fname);
        localStorage.setItem("lname", data.data.data.lname);
        localStorage.setItem("email", data.data.data.email);
        localStorage.setItem("token", data.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("login failed");
      });
  };
  return (
    <div className="bg-purple-300">
      <div className="container mx-auto py-10 flex justify-center items-center gap-10">
        <div className="w-[50%]">
          <img className="w-[100%]" src={img1} alt="" />
        </div>
        <div className="w-[50%] bg-white shadow-lg px-10 py-5 rounded-md">
          <div>
            <h1 className="text-4xl font-bold">Login</h1>
          </div>
          <form onSubmit={hangleSubmit}>
            <div className="flex flex-col mt-5">
              <label htmlFor="email">email</label>
              <input
                type="email"
                value={inputs.email}
                name="email"
                onChange={handleChange}
                placeholder="email"
                className="border-2 px-2 py-2 w-full rounded-md"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="password">password</label>
              <input
                type="password"
                value={inputs.password}
                onChange={handleChange}
                name="password"
                placeholder="password"
                className="border-2 px-2 py-2 w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 px-5 py-2 rounded-md mt-5"
            >
              Login
            </button>
          </form>
          <p className="py-5">
            Not account yet?{" "}
            <Link to="/register" className="text-purple-500">
              Create account
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
