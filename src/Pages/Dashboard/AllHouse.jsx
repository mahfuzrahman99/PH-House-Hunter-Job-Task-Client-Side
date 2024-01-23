import { useState } from "react";
import AllHouseDisplay from "../../Components/AllHouseDisplay/AllHouseDisplay";
import AddAHouse from "./Add House/AddAHouse";

const AllHouse = () => {
  const [showModal, setShowModal] = useState(false);

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
          <div className="join">
            <input
              type="search"
              className="hover:border-none px-5 join-item"
              placeholder="Search a house..."
            />
            <button className="btn join-item rounded-r-md bg-[#00938a] text-white p-2">
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div>
        <AllHouseDisplay />
      </div>
    </div>
  );
};

export default AllHouse;
