/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HousesHomeOneCard = ({ house }) => {
  const {
    _id,
    name,
    address,
    city,
    bedrooms,
    bathrooms,
    room_size,
    availability_date,
    rent_per_month,
    phone_number,
    description,
    picture,
    isBooked,
  } = house;
  return (
    <div>
      <div className="md:grid grid-cols-2 gap-2 shadow-xl rounded-lg">
        <div className="col-span-1 flex justify-center w-full md:h-[420px]">
          <img
            className="md:rounded-l-lg rounded-t-lg md:h-full h-auto w-full md:w-auto"
            src={picture}
            alt=""
          />
        </div>
        <div className="p-2 text-left text-lg flex flex-col justify-between">
          <div className="space-y-3">
            <p className="text-2xl font-medium">
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">City:</span> {city}
            </p>
            <p>
              <span className="font-bold">Address:</span> {address}
            </p>
            <div className="grid grid-cols-2 items-center">
              <p className="col-span-1">
                <span className="font-bold">Rent P.M:</span> {rent_per_month}
              </p>
              <p>
                <span className="font-bold">Mobile:</span> {phone_number}
              </p>
            </div>
            <p>
              <span className="font-bold">Description:</span>{" "}
              {description.slice(0, 450)} <span className="font-bold">Read more...</span>
            </p>
          </div>
          <div className="flex justify-end">
            <Link to={`/view_details/${_id}`}>
              <button className="btn btn-ghost bg-[#00938a] hover:bg-[#0f4b47] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousesHomeOneCard;
