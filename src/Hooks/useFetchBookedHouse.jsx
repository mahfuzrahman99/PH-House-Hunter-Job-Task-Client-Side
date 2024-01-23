import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useFetchBookedHouse = () => {

    const axiosSecure = useAxiosSecure()

    const {data: BookedHouses=[], refetch} = useQuery({
        queryKey:["houses"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/bookedHousesList");
            return res.data;
        },
    })

    return [BookedHouses, refetch]
};

export default useFetchBookedHouse;