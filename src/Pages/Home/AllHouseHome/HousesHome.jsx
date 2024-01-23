import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import useFetchHouse from "../../../Hooks/useFetchHouse";
import HousesHomeOneCard from "./HousesHomeOneCard";

const HousesHome = () => {
  const [houses] = useFetchHouse();
  return (
    <div className=" max-w-6xl mx-auto">
      <SectionTitle heading={"Most valuable houses"} />
      <div className=" md:grid grid-cols-1 gap-8 mt-20">
        {houses.slice(0, 6).map((house) => (
          <HousesHomeOneCard key={house._id} house={house} />
        ))}
      </div>
      <div className="flex justify-end my-6">
        <Link to="/allHouses">
          <button className="btn btn-ghost bg-[#00938a] hover:text-[#0f4b47] text-white text-lg rounded-md p-2 font-bold">
            All Houses Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HousesHome;
