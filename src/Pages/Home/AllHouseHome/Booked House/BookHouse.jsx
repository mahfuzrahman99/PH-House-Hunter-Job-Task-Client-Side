/* eslint-disable react/prop-types */

import { useContext } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const BookHouse = ({ showModal, setShowModal, house }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    name: houseName,
    address,
    city,
    phone_number,
    picture,
  } = house;

  const handleBookingHouse = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const bookedUser = { 
      name,
      email,
      phoneNumber,
      houseName,
      address,
      city,
      phone_number,
      picture,
      houseId: _id,
    };
    console.log(bookedUser);

    const res = await axiosSecure.post("/bookedHousesList", bookedUser)
    console.log(res.data);
    // if (res.data.insertedId) {
    //   // reset();
    //   Swal.fire({
    //     position: "top",
    //     icon: "success",
    //     title: `${houseName} is posted to the BookedHouse list`,
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // }

    // console.log(_id, e);
    fetch(`http://localhost:5000/bookHouses/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
      },
      
      body: JSON.stringify({
        isBooked: true,
        userEmail: user?.email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Booking successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.error("Booking failed:", data.error); // Use console.error for errors
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors appropriately, e.g., display an error message
      });
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-4xl mx-auto">
            <SectionTitle heading={"Booking Form"} />
            <form
              onSubmit={handleBookingHouse}
              className="flex justify-center"
            >
              <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
                <div className="md:grid grid-cols-2 gap-2">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    Book This House
                  </h2>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Home Name:</label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      type="text"
                      readOnly
                      name="name"
                      defaultValue={user?.fullName}
                    />
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Email:</label>
                    <input
                      type="email"
                      name="email"
                      readOnly
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={user?.email}
                    />
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Phone Number:</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                  </div>
                </div>
                <div className="">
                  <input type="submit"
                    className="btn btn-ghost bg-[#00938a] hover:bg-[#126f6a] text-white font-bold py-2 px-4 rounded md:w-1/6"
                    value={'Book'}
                  />
                </div>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button onClick={() => setShowModal(false)} className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default BookHouse;
