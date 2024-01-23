import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useFetchHouse = () => {

    const axiosSecure = useAxiosSecure()

    const {data: houses=[], refetch} = useQuery({
        queryKey:"houses",
        queryFn: async()=>{
            const res = await axiosSecure.get("/houses");
            return res.data;
        },
    })

    return [houses, refetch]
};

export default useFetchHouse;