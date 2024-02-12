import { useState } from "react";
import AllHouseDisplay from "../../Components/AllHouseDisplay/AllHouseDisplay";
import AddAHouse from "./Add House/AddAHouse";
import useFetchHouse from "../../Hooks/useFetchHouse";

const AllHouse = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchedHouse, setSearchedHouse] = useState()
  const [houses, refetch] = useFetchHouse()
  
  const handleSearchBlog = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    const filteredHouse = houses.filter(
      (house) => house.name.toLowerCase() === enteredSearchValue
    );

    setSearchedHouse(filteredHouse);
  };
  const houseToDisplay = searchedHouse?.length ? searchedHouse : houses;
// console.log( houses)
  return (
    <div>
      <div className="flex justify-between m-10">
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-ghost bg-[#00938a] text-white p-2 rounded-md"
          >
            ADD A HOUSE
          </button>
          <AddAHouse showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div>
          <form onSubmit={handleSearchBlog} className="join">
            <input
              type="text"
              name="search"
              className="hover:border-none px-5 join-item"
              placeholder="Search a house..."
            />
            <button className="btn join-item rounded-r-md bg-[#00938a] text-white p-2">
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div>
        <AllHouseDisplay refetch={refetch} houseToDisplay={houseToDisplay}/>
      </div>
    </div>
  );
};

export default AllHouse;
