import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import useFetchHouse from "../../Hooks/useFetchHouse";
import HousesHomeOneCard from "./AllHouseHome/HousesHomeOneCard";

const AllHouses = () => {
  const [houses] = useFetchHouse();
  const [searchedHouse, setSearchedHouse] = useState();

  const handleSearchBlog = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    const filteredHouse = houses.filter(
      (house) => house.name.toLowerCase() === enteredSearchValue
    );

    setSearchedHouse(filteredHouse);
  };
  const handleSearchByRent = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toString();
    e.target.reset();

    const filteredHouse = houses.filter(
      (house) => house.rent_per_month.toString() === enteredSearchValue
    );

    setSearchedHouse(filteredHouse);
  };
  const houseToDisplay = searchedHouse?.length ? searchedHouse : houses;

  return (
    <div className=" max-w-6xl mx-auto">
      <SectionTitle heading={"All Houses here"} />
      <div>
        <div className="flex justify-between">
          <form onSubmit={handleSearchBlog} className="join">
            <button className="btn join-item rounded-l-md hover:text-[#00938a] hover:font-bold bg-[#00938a] text-white p-2">
              SEARCH
            </button>
            <input
              type="text"
              name="search"
              className="input-bordered input px-5 join-item w-[300px]"
              placeholder="Search house by name..."
            />
          </form>
          <form onSubmit={handleSearchByRent} className="join">
            <input
              type="number"
              name="search"
              className="input-bordered input px-5 join-item w-[300px]"
              placeholder="Search house by rent amount..."
            />
            <button className="btn join-item rounded-r-md hover:text-[#00938a] hover:font-bold bg-[#00938a] text-white p-2">
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div className=" md:grid grid-cols-1 gap-8 mt-20">
        {houseToDisplay.map((house) => (
          <HousesHomeOneCard key={house._id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default AllHouses;
