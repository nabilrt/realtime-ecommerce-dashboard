import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChartContainer from "./components/ChartContainer";
import SingleValues from "./components/SingleValues";
import {
    createSalesChartData,
    createTrafficChartData,
    createRevenueChartData,
    createSignupsChartData,
} from "./data/chart-data";
import { SingleValuesData, TimeSeriesData, Vendor } from "./types";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from "chart.js";
import axios from "axios";

// Register the required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);
const socket = io("http://localhost:9000");

function App() {
    const [singleValues, setSingleValues] = useState<SingleValuesData | null>(
        null
    );
    const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData>({
        sales_over_time: [],
        traffic_over_time: [],
        revenue_over_time: [],
        new_signups_over_time: [],
    });
    const [topVendors, setTopVendors] = useState<Vendor[]>([]);

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

    useEffect(() => {
        const handleDataUpdate = (data: {
            singleValues: SingleValuesData;
            timeSeriesData: TimeSeriesData;
            topVendors: Vendor[];
        }) => {
            setSingleValues(data.singleValues);
            setTimeSeriesData(data.timeSeriesData);
            setTopVendors(data.topVendors);
        };

        socket.on("initialData", handleDataUpdate);
        socket.on("updateData", handleDataUpdate);

        return () => {
            socket.off("initialData", handleDataUpdate);
            socket.off("updateData", handleDataUpdate);
        };
    }, []);

    return (
        <div className="App">
            <div className="font-manrope p-4 flex items-center shadow-[0px_12px_6px_0px_rgba(0,_0,_0,_0.1)] h-20 w-full ">
                <p className="font-semibold tracking-wider">
                    Realtime E-COMMERCE Dashboard
                </p>
            </div>

            <div className="px-2 py-3 font-inter ">
                <SingleValues data={singleValues} />
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <ChartContainer
                        title="Sales Over Time"
                        chartData={createSalesChartData(timeSeriesData)}
                        chartType="Line"
                    />
                    <ChartContainer
                        title="Traffic Over Time"
                        chartData={createTrafficChartData(timeSeriesData)}
                        chartType="Bar"
                    />
                    <ChartContainer
                        title="Revenue by Vendor"
                        chartData={createRevenueChartData(topVendors)}
                        chartType="Pie"
                    />
                    <ChartContainer
                        title="New Signups Over Time"
                        chartData={createSignupsChartData(timeSeriesData)}
                        chartType="Bar"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
