/* eslint-disable react/prop-types */
import { useContext } from "react";
import AllHouseRow from "../AllHouseRow";
import SectionTitle from "../SectionTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const AllHouseDisplay = ({ houses,houseToDisplay, refetch }) => {
  const { user } = useContext(AuthContext);

  const allBookedHouse = houses.filter((house) => {
    if (house?.userEmail === user?.email && house?.isBooked === true) {
      return true;
    } else {
      return false;
    }
  });

  console.log(allBookedHouse);

  return (
    <div className="max-w-5xl mx-auto w-[300px] md:w-auto">
      {user?.role === "House_Owner" ? (
        <SectionTitle heading={"All Houses"} />
      ) : user?.role === "House_Renter" ? (
        <SectionTitle heading={"Booked Houses"} />
      ) : (
        <p className="text-red-600 font-bold text-3xl md:text-9xl text-center md:mt-28">
          You are not valid user
        </p>
      )}
      <div className="bg-gray-100 p-4 overflow-x-auto">
        <h1 className="text-xl md:text-3xl font-bold">
          Total Camps:{" "}
          {user?.role === "House_Owner"
            ? houseToDisplay?.length
            : user?.role === "House_Renter"
            ? allBookedHouse?.length
            : 0}
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
                {user?.role === "House_Owner" ? (
                  <th className="py-2 px-4 border-b">Update</th>
                ) : (
                  ""
                )}
                {user?.role === "House_Owner" ? (
                <th className="py-2 px-4 border-b">Delete</th>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            {user?.role === "House_Owner" ? (
              <tbody>
                {houseToDisplay?.map((house, i) => (
                  <AllHouseRow
                    key={house._id}
                    house={house}
                    refetch={refetch}
                    i={i}
                  />
                ))}
              </tbody>
            ) : user?.role === "House_Renter" ? (
              <tbody>
                {allBookedHouse?.map((house, i) => (
                  <AllHouseRow
                    key={house._id}
                    house={house}
                    refetch={refetch}
                    i={i}
                  />
                ))}
              </tbody>
            ) : (
              <p className="text-red-600 font-bold text-3xl md:text-9xl text-center md:mt-28">
                You are not valid user
              </p>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllHouseDisplay;
