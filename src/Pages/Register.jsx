/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import registerImg from "../assets/Register.jpg"

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()


  // console.log(createUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(!fullName, !role, !phoneNumber, !email, !password);
    // Validate form data
    if (!fullName || !role || !phoneNumber || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Prepare user data
    const userData = {
      fullName,
      role,
      phoneNumber,
      email,
      password
    };
    try {
      console.log(userData);
      
    const response = await axiosSecure.post("/users", userData)
      console.log(response.data.userData);
      if (response.status === 200) {
        setUser(response.data.userData);
        localStorage.setItem("isLoggedIn", true);
        // (Here, redirect to login page or show success message)
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Registration successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        if (userData) {
          if (userData.role === "House_Owner") {
            navigate("/owner_Dashboard/owner_Profile");
          } else if (userData.role === "House_Renter") {
            navigate("/user_Dashboard/user_Profile");
          }
        }
        console.log("Registration successful!");
      } else {
        // Registration failed
        // setError(responseData.error);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="bg-black bg-opacity-40 h-[100vh] flex items-center "
    style={{ backgroundImage: `url(${registerImg})` }}>
      <div className="register-form flex flex-col bg-[#00938a] p-4 rounded-xl max-w-2xl mx-auto ">
        <h1 className="text-2xl font-bold text-center py-4">
          User Registration
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-2 text-black"
        >
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="fullName" className=" text-white">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="p-2 rounded-md"
              placeholder="Input your full names here"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2 col-span-1">
            <label htmlFor="role" className=" text-white">
              Role:
            </label>
            <select
              id="role"
              name="role"
              value={role}
              className="p-2 rounded-md text-black"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">
                Select Role
              </option>
              <option value="House_Owner">House Owner</option>
              <option value="House_Renter">House Renter</option>
            </select>
          </div>
          <div className="flex flex-col mt-2 col-span-1">
            <label htmlFor="phoneNumber" className=" text-white">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="p-2 rounded-md"
              placeholder="Input your BD Phone number here"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="email" className=" text-white">
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
            <label htmlFor="password" className=" text-white">
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
          {error && (
            <p className="error-message text-lg font-bold text-red-500">
              {error}
            </p>
          )}
          <div className="flex justify-center w-2/4 mx-auto mt-2 col-span-2">
            <button
              type="submit"
              className="btn btn-ghost bg-white p-2 rounded-md w-full text-xl font-bold uppercase text-[#00938a] hover:text-white"
            >
              Register
            </button>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-white">Already registered...! </p>
              <Link to={"/login"} className="text-red-600 font-bold uppercase btn btn-ghost btn-sm bg-white hover:bg-white p-1 ml-2">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
