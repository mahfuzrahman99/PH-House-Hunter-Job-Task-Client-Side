/* eslint-disable react/prop-types */
import { useState } from "react";
import useFetchHouse from "../../Hooks/useFetchHouse";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SearchBox = ({ setTotalHouse, setData, limit }) => {
  const [houses] = useFetchHouse();
  const [selectedValue, setSelectedValue] = useState(40000);
  const [formData, setFormData] = useState({
    range: 40000,
    city: "",
    bedrooms: "",
    bathrooms: "",
    roomSize: "",
  });

  const axiosSecure = useAxiosSecure();

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    const roundedValue = Math.round(newValue / 1000) * 1000;
    // console.log(roundedValue)
    setSelectedValue(roundedValue);
    setFormData({ ...formData, range: roundedValue });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Access the form data in the formData state
    console.log("Form Data:", formData);
    // Perform additional actions here (e.g., send data to a server)

    const url = `/api/allHouses?${formData.city && `city=${formData.city}&`}${
      formData.bedrooms && `bedrooms=${formData.bedrooms}&`
    }${formData.bathrooms && `bathrooms=${formData.bathrooms}&`}${
      formData.roomSize && `roomSize=${formData.roomSize}&`
    }minPrice=10000&maxPrice=${selectedValue}`;

    console.log(url);

    axiosSecure.get(url).then((res) => {
      console.log(res.data)
      setTotalHouse(
        Array.from({ length: Math.floor(res.data.length / limit) })
      );
      setData(res.data);
    });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between items-center my-8">
          <div>
            <div>
              <label>Select a rent range:</label>
              <input
                type="range"
                name="range"
                min={10000}
                max={100000}
                step={1000}
                value={selectedValue}
                onChange={handleRangeChange}
                className="range range-xs"
              />
              <style>
                {`
                  .range-xs::-webkit-slider-thumb {
                    background-color: #009087;
                  }
        
                  .range-xs::-webkit-slider-runnable-track {
                    background-color: #009087;
                  }
                `}
              </style>
              <p>Selected Range: {selectedValue}</p>
            </div>
          </div>
          <div className="join">
            <select
              name="city"
              className="select select-bordered join-item"
              value={formData.city}
              onChange={handleSelectChange}
            >
              <option value="">Select city</option>
              {Array.from(new Set(houses?.map((house) => house.city)))
                .sort()
                ?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            <select
              name="bedrooms"
              className="select select-bordered join-item"
              value={formData.bedrooms}
              onChange={handleSelectChange}
            >
              <option value="">Select bedroom quantity</option>
              {Array.from(new Set(houses?.map((house) => house.bedrooms)))
                .sort()
                ?.map((bedrooms) => (
                  <option key={bedrooms} value={bedrooms}>
                    {bedrooms}
                  </option>
                ))}
            </select>
            <select
              name="bathrooms"
              className="select select-bordered join-item"
              value={formData.bathrooms}
              onChange={handleSelectChange}
            >
              <option value="">Select bathroom quantity</option>
              {Array.from(new Set(houses?.map((house) => house.bathrooms)))
                .sort()
                .map((bathroom) => (
                  <option key={bathroom} value={bathroom}>
                    {bathroom}
                  </option>
                ))}
            </select>

            <select
              name="roomSize"
              className="select select-bordered join-item"
              value={formData.roomSize}
              onChange={handleSelectChange}
            >
              <option value="">Select room size in sq, ft&apos;</option>
              {Array.from(new Set(houses?.map((house) => house.room_size)))
                .sort()
                .map((roomSize) => (
                  <option key={roomSize} value={roomSize}>
                    {roomSize}
                  </option>
                ))}
            </select>

            <div className="indicator">
              <button
                type="submit"
                className="btn join-item bg-[#00938a] text-white hover:text-black hover:font-bold"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
