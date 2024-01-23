/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import BookHouse from "./Booked House/BookHouse";

/* eslint-disable react/prop-types */
const ViewDetails = () => {
    const house = useLoaderData();
    const [showModal, setShowModal] = useState(false);
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
      <div className="md:grid grid-cols-2 gap-2 shadow-xl rounded-lg md:mt-8 md:mx-5">
        <div className="col-span-1 flex justify-center w-full">
          <img
            className="md:rounded-l-lg rounded-t-lg md:h-full h-auto w-full md:w-auto"
            src={picture}
            alt=""
          />
        </div>
        <div className="p-2 text-left text-lg flex flex-col justify-between">
          <div className="space-y-3">
            <p>
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
              <span className="font-bold">Bedroom:</span> {bedrooms}
            </p>
            <p>
              <span className="font-bold">Bathroom:</span> {bathrooms}
            </p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p className="col-span-1">
              <span className="font-bold">Room Size:</span> {room_size}sq.
              ft&apos;
            </p>
            <p>
              <span className="font-bold">Date:</span> {availability_date}
            </p>
          </div>
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
              {description}
            </p>
          </div>
          <div className="flex justify-end">
              <button onClick={() => setShowModal(true)} className="btn btn-ghost bg-[#00938a] hover:bg-[#0f4b47] text-white">
                Book now
              </button>
              <BookHouse showModal={showModal} _id={_id} setShowModal={setShowModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
