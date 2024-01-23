import useFetchHouse from "../../Hooks/useFetchHouse";
import AllHouseRow from "../AllHouseRow";
import SectionTitle from "../SectionTitle";

const AllHouseDisplay = () => {
  const [allHouse, refetch] = useFetchHouse();

  return (
    <div className="max-w-5xl mx-auto w-[300px] md:w-auto">
    <SectionTitle heading={"All Houses"} />
      <div className="bg-gray-100 p-4 overflow-x-auto">
        <h1 className="text-xl md:text-3xl font-bold">
          Total Camps: {allHouse.length}
        </h1>
        <div>
          <table className="min-w-full bg-gray-300">
            <thead className="rounded-t-xl bg-[#00938a]">
              <tr className="rounded-t-xl bg-[#00938a]">
                <th className="py-2 px-4 border-b">NO</th>
                <th className="py-2 px-4 border-b">Picture</th>
                <th className="py-2 px-4 border-b">House Name</th>
                <th className="py-2 px-4 border-b">Availability Date</th>
                <th className="py-2 px-4 border-b">city</th>
                <th className="py-2 px-4 border-b">address</th>
                <th className="py-2 px-4 border-b">bedrooms</th>
                <th className="py-2 px-4 border-b">bathrooms</th>
                <th className="py-2 px-4 border-b">Room Size</th>
                <th className="py-2 px-4 border-b">Rent Per Month</th>
                <th className="py-2 px-4 border-b">Mobile No</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Update</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allHouse.map((house, i) => (
                <AllHouseRow
                  key={house._id}
                  house={house}
                  refetch={refetch}
                  i={i}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllHouseDisplay;
