/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUsers from "../Hooks/useUsers";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, user } = useContext(AuthContext);
  const [users] = useUsers()

  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);
    console.log(userRole, users, user);
    //Organizer
    if (userRole) {
      if (userRole.role === "House_Owner") {
        navigate("/owner_Dashboard/owner_Profile");
      } else if (userRole.role === "House_Renter") {
        navigate("/user_Dashboard/user_Profile");
      }
    }
  }, [user,users]);

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
      password,
    };
    // Send registration request to backend server (replace with your API endpoint)
    try {
      const response = await createUser(userData);
      if (response.ok) {
        // Registration successful
        // (Here, redirect to login page or show success message)
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Registration successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/owner_Dashboard/owner_Profile")
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
    <div>
      <div className="register-form flex flex-col bg-[#00938a] p-4 rounded-xl max-w-2xl mx-auto md:mt-20">
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
              type="password"
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
        </form>
      </div>
    </div>
  );
};

export default Register;
