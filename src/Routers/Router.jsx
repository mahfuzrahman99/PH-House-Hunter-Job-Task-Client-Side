import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HouseOwnerDashboard from "../Layouts/HouseOwnerDashboard";
import OwnerProfile from "../Pages/Dashboard/OwnerProfile";
import AllHouse from "../Pages/Dashboard/AllHouse";
import AllHouses from "../Pages/Home/AllHouses";
import UserProfile from "../Pages/UserDashboard/UserProfile";
import AllBookedHouse from "../Pages/UserDashboard/AllBookedHouse";
import ViewDetails from "../Pages/Home/AllHouseHome/ViewDetails";
import HouseUserDashboard from "../Layouts/HouseUserDashboard";
import BookingDetails from "../Pages/Home/AllHouseHome/Booked House/BookingDetails";
import ContactUs from "../Pages/ContactUs";
import PalindromeChecker from "../PalindromeChecker";
// import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/allHouses",
        element: <AllHouses />,
      },
      {
        path: "/view_Details/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(
            // `http://localhost:5000/houses/${params.id}`
            `https://ph-house-hunter-job-task-server-side.vercel.app/houses/${params.id}`
          ),
      },
      {
        path: "palindrome",
        element: <PalindromeChecker />,
      },
    ],
  },
  {
    path: "owner_Dashboard",
    element: (
      <HouseOwnerDashboard />
      // <PrivetRout><HouseOwnerDashboard /></PrivetRout>
    ),
    children: [
      {
        path: "owner_Profile",
        // element: <PrivetRout><OwnerProfile /></PrivetRout>,
        element: <OwnerProfile />,
      },
      {
        path: "allHouse",
        element: <AllHouse />,
      },
      {},
    ],
  },
  {
    path: "user_Dashboard",
    // element: <PrivetRout><HouseUserDashboard /></PrivetRout>,
    element: <HouseUserDashboard />,
    children: [
      {
        path: "user_Profile",
        // element: <PrivetRout><UserProfile /></PrivetRout>,
        element: <UserProfile />,
      },
      {
        path: "allBookedHouse",
        element: <AllBookedHouse />,
      },
      {
        path: "booking_details",
        element: <BookingDetails />,
      },
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
]);

export default router;
