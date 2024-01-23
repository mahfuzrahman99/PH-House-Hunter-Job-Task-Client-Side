/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=7b220630460d3376a065265f6edfd433`;
const AddAHouse = ({ showModal, setShowModal }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.housePicture[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const homeItem = {
        name: data.name,
        address: data.address,
        city: data.city,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        room_size: data.room_size,
        availability_date: data.availability_date,
        image: res.data.data.display_url,
        rent_per_month: data.rent_per_month,
        description: data.description,
        phone_number: data.phone_number,
      };
      console.log(homeItem);
      const houseRes = await axiosSecure.post("/houses", homeItem);
      console.log(houseRes.data);
      if (houseRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} is added to the house list`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/owner_Dashboard/allHouse");
      }
    }
    console.log(res.data);
  };
  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center overflow-x-auto"
            >
              <div className="max-w-3xl w-full md:w-auto bg-gray-200 p-8 rounded shadow-lg">
                <div className=" md:grid grid-cols-2 gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    ADD A HOUSE
                  </h2>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">House Name:</label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      {...register("name", {
                        required: "House Name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Address:</label>
                    <input
                      {...register("address", {
                        required: "Address is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.address && (
                      <p className="text-red-500">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">City:</label>
                    <input
                      {...register("city", {
                        required: "City is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.city && (
                      <p className="text-red-500">{errors.city.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Bedroom</label>
                    <input
                      type="number"
                      {...register("bedrooms", {
                        required: "Bedroom is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.bedrooms && (
                      <p className="text-red-500">{errors.bedrooms.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Bathroom:</label>
                    <input
                      type="number"
                      {...register("bathrooms", {
                        required: "Bathroom is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.bathrooms && (
                      <p className="text-red-500">{errors.bathrooms.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Room Size:</label>
                    <input
                      type="number"
                      {...register("room_size", {
                        required: "Room Size is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.room_size && (
                      <p className="text-red-500">{errors.room_size.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Available Date:
                    </label>
                    <input
                      type="date"
                      {...register("availability_date", {
                        required: "Available Date is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.availability_date && (
                      <p className="text-red-500">
                        {errors.availability_date.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">
                      Rent Per Month:
                    </label>
                    <input
                      type="number"
                      {...register("rent_per_month", {
                        required: "Rent Per Month is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.rent_per_month && (
                      <p className="text-red-500">
                        {errors.rent_per_month.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">
                     BD Phone Number:
                    </label>
                    <input
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.phone_number && (
                      <p className="text-red-500">
                        {errors.phone_number.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">
                      Description:
                    </label>
                    <input
                      {...register("description", {
                        required: "Description is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.description && (
                      <p className="text-red-500">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Picture:</label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("housePicture", {
                        required: "House Image is required",
                      })}
                    />
                    {errors.housePicture && (
                      <p className="text-red-500">
                        {errors.housePicture.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/6"
                  >
                    Submit
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

export default AddAHouse;
