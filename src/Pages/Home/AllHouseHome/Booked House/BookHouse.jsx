/* eslint-disable react/prop-types */

import { useContext } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import { AuthContext } from "../../../../Provider/AuthProvider";

const BookHouse = ({ showModal, setShowModal }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const bookedUser = { name, email, phoneNumber };
    console.log(bookedUser);
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-4xl mx-auto">
            <SectionTitle heading={"Update Home"} />
            <form onSubmit={handleSubmit} className="flex justify-center">
              <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
                <div className="md:grid grid-cols-2 gap-2">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    Update Home
                  </h2>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Home Name:</label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      type="text"
                      readOnly
                      name="name"
                      defaultValue={user.fullName}
                    />
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Email:</label>
                    <input
                      type="email"
                      name="email"
                      readOnly
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={user.email}
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
                  <button
                    type="submit"
                    className="bg-[#00938a] hover:bg-[#126f6a] text-white font-bold py-2 px-4 rounded md:w-1/6"
                  >
                    Book
                  </button>
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
