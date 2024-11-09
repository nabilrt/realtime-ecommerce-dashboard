import { format } from "date-fns";
import { TimeSeriesData, Vendor } from "../types";
import { ChartData } from "chart.js";

const formatTimestamp = (timestamp: string) => format(new Date(timestamp), "MMM dd, yyyy, HH:mm");

export const createSalesChartData = (timeSeriesData: TimeSeriesData): ChartData<"line"> => ({
    labels: timeSeriesData.sales_over_time.map((entry) => formatTimestamp(entry.timestamp)),
    datasets: [
        {
            label: "Sales Over Time",
            data: timeSeriesData.sales_over_time.map((entry) => entry.value),
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
            tension: 0.1,
        },
    ],
});

export const createTrafficChartData = (timeSeriesData: TimeSeriesData): ChartData<"bar"> => ({
    labels: timeSeriesData.traffic_over_time.map((entry) => formatTimestamp(entry.timestamp)),
    datasets: [
        {
            label: "Traffic Over Time",
            data: timeSeriesData.traffic_over_time.map((entry) => entry.value),
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
        },
    ],
});

export const createRevenueChartData = (topVendors: Vendor[]): ChartData<"pie"> => ({
    labels: topVendors.map((vendor) => vendor.name),
    datasets: [
        {
            label: "Revenue by Vendor",
            data: topVendors.map((vendor) => vendor.revenue),
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
            ],
        },
    ],
});

export const createSignupsChartData = (timeSeriesData: TimeSeriesData): ChartData<"bar"> => ({
    labels: timeSeriesData.new_signups_over_time.map((entry) => formatTimestamp(entry.timestamp)),
    datasets: [
        {
            label: "New Signups Over Time",
            data: timeSeriesData.new_signups_over_time.map((entry) => entry.value),
            backgroundColor: "rgba(255, 159, 64, 0.6)",
            borderColor: "rgba(255, 159, 64, 1)",
        },
    ],
});
