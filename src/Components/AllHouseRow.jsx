/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { PhotoView } from "react-photo-view";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import UpdateHome from "./AllHouseDisplay/UpdateHome";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const AllHouseRow = ({ house, i, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [showModal, setShowModal] = useState(false);

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
        const res = await axiosSecure.delete(`/houses/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${house?.name} has been delete from houses lists.`,
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
          <PhotoView src={house?.image}>
            <img className="h-12" src={house?.image} alt={house?.name} />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{house?.name}</td>
        <td className="py-2 px-4 border-b-4">{house?.availability_date}</td>
        <td className="py-2 px-4 border-b-4">{house?.city}</td>
        <td className="py-2 px-4 border-b-4">{house?.address}</td>
        <td className="py-2 px-4 border-b-4">{house?.bedrooms} </td>
        <td className="py-2 px-4 border-b-4">{house?.bathrooms}</td>
        <td className="py-2 px-4 border-b-4">{house?.room_size}sq. ft</td>
        <td className="py-2 px-4 border-b-4">TK.{house?.rent_per_month}</td>
        <td className="py-2 px-4 border-b-4">{house?.phone_number}</td>
        <td className="py-2 px-4 border-b-4">
          {house?.description?.slice(0, 20)}
        </td>
        {user?.role === "House_Owner" ? (
          <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
            <button
              onClick={() => setShowModal(true)}
              className="flex justify-center m-1 p-1 rounded bg-[#00938a]"
            >
              <span className="text-4xl">
                <MdOutlineSecurityUpdateGood />
              </span>
            </button>
            <UpdateHome
              house={house}
              refetch={refetch}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </td>
        ) : (
          ""
        )}
        {user?.role === "House_Owner" ? (
        <td className="py-2 px-4 border-b-4">
          <button
            onClick={() => handleDelete(house._id, house)}
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          >
            <span className="text-3xl">
              <RiDeleteBin6Line />
            </span>
          </button>
        </td>
        ) : (
          ""
        )}
      </tr>
    </>
  );
};

export default AllHouseRow;
