/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=7b220630460d3376a065265f6edfd433`;

const UpdateHome = ({ showModal, setShowModal, house, refetch }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
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
    image,
    isBooked,
  } = house || {};
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    // Upload image to imgbb and get the URL
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
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
        isBooked: isBooked,
      };

      const homeRes = await axiosSecure.patch(`/houses/${_id}`, homeItem);

      if (homeRes.data.modifiedCount > 0) {
        reset();
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data?.name} is updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/owner_Dashboard/allHouse");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update the house. Please try again.",
        });
      }
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-4xl mx-auto">
            <SectionTitle heading={"Update Home"} />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center"
            >
              <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
                <div className="md:grid grid-cols-2 gap-2">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    Update Home
                  </h2>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Home Name:</label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      {...register("name", {
                        required: "Home Name is required",
                      })}
                      defaultValue={name}
                    />
                    {errors.homeName && (
                      <p className="text-red-500">{errors.homeName.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Home Address:</label>
                    <input
                      type="text"
                      {...register("address", {
                        required: "Camp address is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={address}
                    />
                    {errors.address && (
                      <p className="text-red-500">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">city:</label>
                    <input
                      type="text"
                      {...register("city", {
                        required: "City name is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={city}
                    />
                    {errors.city && (
                      <p className="text-red-500">{errors.city.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Bedrooms:</label>
                    <input
                      type="number"
                      {...register("bedrooms", {
                        required: "bedrooms count is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={bedrooms}
                    />
                    {errors.bedrooms && (
                      <p className="text-red-500">{errors.bedrooms.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Bathrooms:</label>
                    <input
                      type="number"
                      {...register("bathrooms", {
                        required: "Bathrooms count is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={bathrooms}
                    />
                    {errors.bathrooms && (
                      <p className="text-red-500">{errors.bathrooms.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">Room Size:</label>
                    <input
                      {...register("room_size", {
                        required: "Room size with sq. fit is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={room_size}
                    />
                    {errors.room_size && (
                      <p className="text-red-500">{errors.room_size.message}</p>
                    )}
                  </div>

                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Availability Date:
                    </label>
                    <input
                      type="date"
                      {...register("availability_date", {
                        required: "Input available date is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={availability_date}
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
                        required: "Input per month rent ret is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={rent_per_month}
                    />
                    {errors.rent_per_month && (
                      <p className="text-red-500">
                        {errors.rent_per_month.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">
                      Input BD Phone Number:
                    </label>
                    <input
                      type="text"
                      {...register("phone_number", {
                        required: "Input a BD phone number is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={phone_number}
                    />
                    {errors.phone_number && (
                      <p className="text-red-500">
                        {errors.phone_number.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Description:</label>
                    <textarea
                      {...register("description", {
                        required: "Comprehensive Description is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={description}
                    />
                    {errors.bathrooms && (
                      <p className="text-red-500">{errors.bathrooms.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Picture:</label>
                    {image && (
                      <img
                        src={image}
                        alt="Current House Picture"
                        className="max-w-full h-auto mb-4"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      {...register("image", {
                        required: "Upload Picture is required",
                      })}
                    />
                    {errors.image && (
                      <p className="text-red-500">{errors.image.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#00938a] hover:bg-[#126f6a] text-white font-bold py-2 px-4 rounded md:w-1/6"
                  >
                    Update
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

export default UpdateHome;
