import SectionTitle from "../../Components/SectionTitle";
import useFetchHouse from "../../Hooks/useFetchHouse";
import HousesHomeOneCard from "./AllHouseHome/HousesHomeOneCard";



const AllHouses = () => {
    const [houses] = useFetchHouse()
    return (
        <div className=" max-w-6xl mx-auto">
            <SectionTitle heading={'All Houses here'}/>
            <div className=" md:grid grid-cols-1 gap-8 mt-20">
                {
                    houses.map((house) => <HousesHomeOneCard key={house._id} house={house} />)
                }
            </div>
        </div>
    );
};

export default AllHouses;