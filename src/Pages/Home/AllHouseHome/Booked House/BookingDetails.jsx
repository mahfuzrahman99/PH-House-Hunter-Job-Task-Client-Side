
import SectionTitle from "../../../../Components/SectionTitle";
import useFetchBookedHouse from "../../../../Hooks/useFetchBookedHouse";
import AllBookedRow from "./AllBookedRow";

const BookingDetails = () => {
  const [allBookedHouse, refetch] = useFetchBookedHouse();

  // console.log(allBookedHouse);

  return (
    <div className="max-w-5xl mx-auto w-[300px] md:w-auto">
        <SectionTitle heading={"All Booked Houses"} />
      <div className="bg-gray-100 p-4 overflow-x-auto">
        <h1 className="text-xl md:text-3xl font-bold">
          Total Booking lists:{" "}
          {allBookedHouse?.length}
        </h1>
        <div>
          <table className="min-w-full bg-gray-300">
            <thead className="rounded-t-xl bg-[#00938a]">
              <tr className="rounded-t-xl bg-[#00938a]">
                <th className="py-2 px-4 border-b">NO</th>
                <th className="py-2 px-4 border-b">Picture</th>
                <th className="py-2 px-4 border-b">User Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">User Phone</th>
                <th className="py-2 px-4 border-b">House Name</th>
                <th className="py-2 px-4 border-b">City</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">House Phone</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
              <tbody>
                {allBookedHouse?.map((house, i) => (
                  <AllBookedRow
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

export default BookingDetails;
