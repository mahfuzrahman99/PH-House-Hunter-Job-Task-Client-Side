/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import loginImg from "../assets/Login.jpg";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    console.log(!email, !password);
    // Prepare login data
    const loginData = {
      email,
      password,
    };

    // Send login request to backend server (replace with your API endpoint)
    try {
      const response = await axiosSecure.post("/login", loginData, {withCredentials:true});
      console.log("login handler");

      const responseData = response.data;
      setUser(responseData.userData);
      console.log(responseData.userData);

      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", true);
        // Login successful
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        if (responseData) {
          if (responseData.userData.role === "House_Owner") {
            navigate("/owner_Dashboard/owner_Profile");
          } else if (responseData.userData.role === "House_Renter") {
            navigate("/user_Dashboard/user_Profile");
          }
        }
        console.log("Login successful!");
      } else {
        // Login failed
        setError(responseData.error);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong!");
    }
  };

  return (
    <div
      className="bg-black bg-opacity-40 h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      <div className=" flex flex-col bg-[#00938a] p-4 rounded-xl  md:w-[450px] mx-auto">
        <h1 className="text-2xl font-bold text-center py-4">User Login</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="email" className="text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 rounded-md"
              placeholder="Input your valid email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="password" className="text-black">
              Password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="p-2 rounded-md"
              placeholder="Input your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <span>
              {error && (
                <p className="error-message text-lg font-bold text-red-800">
                  {error}
                </p>
              )}
            </span>
            <span>
              <Link></Link>
            </span>
          </div>
          <div className="flex justify-center w-2/4 mx-auto mt-2 col-span-2">
            <button
              type="submit"
              className="btn btn-ghost bg-white p-2 rounded-md w-full text-xl font-bold uppercase text-[#00938a] hover:text-white"
            >
              Login
            </button>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-white">Not registered...! </p>
              <Link to={"/register"} className="text-red-600 font-bold uppercase btn btn-ghost btn-sm bg-white hover:bg-white p-1 ml-2">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
