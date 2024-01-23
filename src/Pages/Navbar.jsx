/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Navigate,  } from "react-router-dom";
import { motion } from "framer-motion";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../Provider/AuthProvider";
import useUsers from "../Hooks/useUsers";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [users] = useUsers();
  const [isHouseOwner, setHouseOwner] = useState(false);
  const [isHouseRenter, setHouseRenter] = useState(false);
    console.log(user);
  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);
    if (userRole) {
      if (userRole.role === "House_Owner") {
        setHouseOwner(true); 
      } else if (userRole.role === "House_Renter") {
        setHouseRenter(true); 
      }
    }
    // console.log(userRole.role);
  }, [user, users]);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " hover:font-bold underline font-bold"
              : "font-bold  text-[#00938a]"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " hover:font-bold underline font-bold"
              : "font-bold  text-[#00938a]"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            to={
                isHouseOwner
                ? "/owner_Dashboard/owner_Profile"
                : isHouseRenter
                ? "/user_Dashboard/user_profile"
                : ""
            }
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " hover:font-bold underline font-bold"
                : "font-bold  text-[#00938a]"
            }
          >
            DASHBOARD
          </NavLink>
        ) : (
          ""
        )}
      </li>
      <li>
        {user ? (
          <NavLink
            to="/allHouses"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " hover:font-bold underline font-bold"
                : "font-bold  text-[#00938a]"
            }
          >
            ALL HOUSES
          </NavLink>
        ) : (
          ""
        )}
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Navigate("/login");
      })
      .catch(() => {});
  };

  return (
    <div className={`navbar z-50 md:px-6`}>
      <div className="navbar-start w-1/4">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-outline border-none hover:bg-transparent lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 z-50 text-[#00938a]"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm absolute dropdown-content mt-3 z-[50] p-2 shadow bg-black bg-opacity-60 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#00938a] p-2 rounded bg-[#cad0db]">House Hunter</h1>
        </div>
      </div>

      <div className="navbar-end w-3/4">
        <div className=" hidden lg:flex justify-center items-center">
          <ul className="menu menu-horizontal text-black">{navLinks}</ul>
        </div>
        <div className="dropdown dropdown-end flex items-center ">
          {user ? (
            <>
              <div className="dropdown z-10 dropdown-bottom dropdown-end">
                
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-black bg-opacity-60"
                >
                  <li>
                    <a className="text-white">
                      {user?.role ? user?.role : "Not Found"}
                    </a>
                  </li>
                  <li>
                    <a>
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          ease: "linear",
                          duration: 0.5,
                          x: { duration: 0.5 },
                        }}
                        onClick={handleLogout}
                        className=" btn-sm border-none btn-outline rounded-md font-semibold uppercase hover:bg-transparent  text-white"
                      >
                        Logout
                      </motion.button>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                ease: "linear",
                duration: 0.5,
                x: { duration: 0.5 },
              }}
              className=" btn-sm border-none btn-outline rounded-md font-semibold uppercase hover:bg-transparent text-[#00938a] hover:text-[#00938a]"
            >
              <Link to={`/login`}>Login</Link>
            </motion.button>
          )}
          <label
            tabIndex={0}
            className="btn btn-outline btn-circle border-none hover:bg-transparent avatar"
          >
           <p className="text-[#00938a] font-bold p-1 rounded bg-[#cad0db]">{user?.fullName}</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
