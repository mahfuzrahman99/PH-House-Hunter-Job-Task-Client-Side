import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const OwnerProfile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="max-w-2xl mx-auto md:mt-20 shadow-2xl shadow-[#00938a] rounded-lg bg-[#00938a] text-white text-3xl font-semibold p-4 md:h-[450px]">
           <div className="space-y-4">
            <p>Name: {user?.fullName}</p>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
            </div> 
        </div>
    );
};

export default OwnerProfile;