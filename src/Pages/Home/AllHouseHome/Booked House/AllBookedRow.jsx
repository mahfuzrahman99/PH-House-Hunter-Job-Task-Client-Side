/* eslint-disable react/prop-types */
import { PhotoView } from "react-photo-view";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure"

const AllBookedRow = ({ house, i, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const {
    name,
    email,
    phoneNumber,
    houseName,
    address,
    city,
    phone_number,
    picture,
    houseId,
  } = house;

  const handleDelete = async (id, house) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      iconColor: "#00938a",
      showCancelButton: true,
      confirmButtonColor: "#00938a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    });

    if (confirmed.isConfirmed) {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axiosSecure.patch(`/bookedHouses/${houseId}`, {
          isBooked: false,
        });
        console.log(response.data);
        if (response.data.modifiedCount) {
          Swal.fire({
            position: "right",
            title: "Update!",
            text: `${house?.name} has been updated successfully.`,
            icon: "success",
          });
        }
        const res = await axiosSecure.delete(`/bookedHousesList/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "left",
            title: "Deleted!",
            text: `${house?.name} has been delete from booked details list.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error deleting house:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting house.",
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <tr className="bg-gray-100 text-xs">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={picture}>
            <img className="h-12" src={picture} alt={name} />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{name}</td>
        <td className="py-2 px-4 border-b-4">{email}</td>
        <td className="py-2 px-4 border-b-4">{phoneNumber}</td>
        <td className="py-2 px-4 border-b-4">{houseName}</td>
        <td className="py-2 px-4 border-b-4">{city}</td>
        <td className="py-2 px-4 border-b-4">{address} </td>
        <td className="py-2 px-4 border-b-4">{phone_number}</td>
        <td className="py-2 px-4 border-b-4">
          <button
            onClick={() => handleDelete(house?._id, house)}
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          >
            <span className="text-3xl">
              <RiDeleteBin6Line />
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllBookedRow;
