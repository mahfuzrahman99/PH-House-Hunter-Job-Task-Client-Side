import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HouseOwnerDashboard from "../Layouts/HouseOwnerDashboard";
import OwnerProfile from "../Pages/Dashboard/OwnerProfile";
import AllHouse from "../Pages/Dashboard/AllHouse";
import Contact from "../Pages/Home/Contact";
import AllHouses from "../Pages/Home/AllHouses";
import UserProfile from "../Pages/UserDashboard/UserProfile";
import AllBookedHouse from "../Pages/UserDashboard/AllBookedHouse";
import ViewDetails from "../Pages/Home/AllHouseHome/ViewDetails";
import HouseUserDashboard from "../Layouts/HouseUserDashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path: "/contactUs",
          element: <Contact/>
        },
        {
          path:"/allHouses",
          element: <AllHouses/>
        },
        {
          path:"/view_Details/:id",
          element: <ViewDetails/>,
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/houses/${params.id}`
            ),
        },
        {},
      ]
    },
    {
      path:"owner_Dashboard",
      element:<HouseOwnerDashboard/>,
      children:[
        {
          path:"owner_Profile",
          element:<OwnerProfile/>
        },
        {
          path:"allHouse",
          element: <AllHouse/>
        },
        {},
      ]
    },
    {
      path:"user_Dashboard",
      element:<HouseUserDashboard/>,
      children:[
        {
          path:"user_Profile",
          element:<UserProfile/>
        },
        {
          path:"allBookedHouse",
          element: <AllBookedHouse/>
        },
        {},
      ]
    },
    {
      path:"Login",
      element: <Login/>,
    },
    {
      path:"Register",
      element: <Register/>,
    },
  ]);

export default router;