/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import useFetchHouse from "../../../Hooks/useFetchHouse";
import HousesHomeOneCard from "./HousesHomeOneCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SearchBoxes from "../../../Components/Search Boxes/SearchBoxes";

const HousesHome = () => {
  const [houses] = useFetchHouse();
  const axiosSecure = useAxiosSecure();

  const [data, setData] = useState([]);
  const [totalHouse, setTotalHouse] = useState(Array.from({ length: 0 }));
  const [active, setActive] = useState(0);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    axiosSecure.get(`/api/allHouses?limit=${10}&skip=${skip}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });

    axiosSecure.get("/api/houseCount").then((res) => {
      // console.log(res.data)
      // console.log(Math.ceil(res.data.count / limit));
      setTotalHouse(Array.from({ length: Math.ceil(res.data.count / limit) }));
    });
  }, [skip]);

  const fetchData = (ind) => {
    console.log(ind);
    setSkip(ind + 1 * limit);
    setActive(ind);
  };

  return (
    <div className=" max-w-6xl mx-auto">
      <SectionTitle heading={"Luxurious houses"} />
      <div>
        <SearchBoxes/>
      </div>
      <div className=" md:grid grid-cols-1 gap-8 mt-20">
        {data?.map((house) => (
          <HousesHomeOneCard key={house._id} house={house} />
        ))}
      </div>

      {/* pagination */}

      <div className="flex justify-center my-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => fetchData(active - 1)}
            disabled={active <= 0}
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
            Previous
          </button>

          <div className="flex items-center gap-2">
            {totalHouse.map((house, ind) => {
              if (active === ind) {
                return (
                  <button
                    key={ind}
                    onClick={() => fetchData(ind)}
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      {ind + 1}
                    </span>
                  </button>
                );
              } else {
                return (
                  <button
                    key={ind}
                    onClick={() => fetchData(ind)}
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      {ind + 1}
                    </span>
                  </button>
                );
              }
            })}
          </div>

          <button
            disabled={totalHouse.length - 1 === active}
            onClick={() => fetchData(active + 1)}
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HousesHome;
