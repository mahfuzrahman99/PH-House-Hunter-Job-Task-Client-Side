import { NavLink, Outlet } from "react-router-dom";

const HouseUserDashboard = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex justify-between">
            <div className="w-64 min-h-screen hidden md:block bg-[#00938a]">
              <ul className="menu p-4 fixed">
                <li>
                  <NavLink
                    to="/user_Dashboard/user_Profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                      OWNER PROFILE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/user_Dashboard/allBookedHouse"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    MY BOOKINGS
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
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
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allHouses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    ALL HOUSES
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-[#F6F6F6] overflow-x-auto">
              <Outlet />
            </div>
          </div>
          <label
            htmlFor="my-drawer"
            className="btn md:hidden bg-[#00938a] w-full drawer-button"
          >
            OPEN DRAWER
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="">
            {/* Sidebar content here */}
            <div className="w-50 min-h-screen md:hidden bg-[#00938a]">
            <ul className="menu p-4">
                <li>
                  <NavLink
                    to="/user_Dashboard/user_Profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                      OWNER PROFILE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/user_Dashboard/allBookedHouse"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                   MY BOOKINGS
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
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
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allHouses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    ALL HOUSES
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseUserDashboard;
