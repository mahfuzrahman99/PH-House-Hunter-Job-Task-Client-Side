import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainLayout;