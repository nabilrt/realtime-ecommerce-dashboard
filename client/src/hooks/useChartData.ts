import axios from "axios";
import { useEffect } from "react";

export const useChartData = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:9000/dashboard"
                );
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        };
        fetchData();
    }, []);
};
