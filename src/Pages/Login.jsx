/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import useUsers from "../Hooks/useUsers";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {setUser, user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [users] = useUsers()

  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);
    console.log(userRole, users);
    //Organizer
    if (userRole) {
      if (userRole.role === "House_Owner") {
        navigate("/owner_Dashboard/owner_Profile");
      } else if (userRole.role === "House_Renter") {
        navigate("/user_Dashboard/user_Profile");
      }
    }
  }, [user,users]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Prepare login data
    const loginData = {
      email,
      password,
    };

    // Send login request to backend server (replace with your API endpoint)
    try {
      const response = await axios.post("http://localhost:5000/login", loginData);
  
      const responseData = response.data;
      setUser(responseData.userData);
  
      if (response.status === 200) {
        // Login successful
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("");
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
    <div>
      <div className=" flex flex-col bg-[#00938a] p-4 rounded-xl max-w-2xl mx-auto md:mt-20 ">
        <h1 className="text-2xl font-bold text-center py-4">User Login</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="email" className="text-black">Email:</label>
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
            <label htmlFor="password" className="text-black">Password:</label>
            <input
              type="password"
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
            <Link>
            
            </Link>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
