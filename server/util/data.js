let singleValues = {
    total_sales: 23567,
    total_customers: 3485,
    current_online_users: 235,
    new_signups_today: 45,
    total_products: 985,
    return_rate_percentage: 3.2,
    avg_cart_value: 78.45,
    conversion_rate_percentage: 4.5,
};

let timeSeriesData = {
    sales_over_time: [],
    traffic_over_time: [],
    revenue_over_time: [],
    new_signups_over_time: [],
};

let topVendors = [
    { vendor_id: "V001", name: "TechGiant", sales: 1200, revenue: 180000 },
    { vendor_id: "V002", name: "FashionHub", sales: 950, revenue: 85000 },
    { vendor_id: "V003", name: "HomeEssentials", sales: 800, revenue: 76000 },
];

const updateDataOverTime = () => {
    // Update single values
    singleValues.total_sales += Math.floor(Math.random() * 50);
    singleValues.current_online_users = Math.floor(Math.random() * 300);
    singleValues.new_signups_today += Math.floor(Math.random() * 5);
    singleValues.return_rate_percentage = (Math.random() * 5).toFixed(2);
    singleValues.avg_cart_value = (50 + Math.random() * 50).toFixed(2);
    singleValues.conversion_rate_percentage = (Math.random() * 10).toFixed(2);

    // Append new data points for time series (timestamped values)
    const now = new Date();
    timeSeriesData.sales_over_time.push({
        timestamp: now,
        value: Math.floor(Math.random() * 2000),
    });
    timeSeriesData.traffic_over_time.push({
        timestamp: now,
        value: Math.floor(Math.random() * 2000),
    });
    timeSeriesData.revenue_over_time.push({
        timestamp: now,
        value: parseFloat((Math.random() * 3000).toFixed(2)),
    });
    timeSeriesData.new_signups_over_time.push({
        timestamp: now,
        value: Math.floor(Math.random() * 20),
    });

    // Keep the last 20 data points for each time series
    Object.keys(timeSeriesData).forEach((key) => {
        if (timeSeriesData[key].length > 20) {
            timeSeriesData[key].shift();
        }
    });

    // Update top vendors data
    topVendors.forEach((vendor) => {
        vendor.sales += Math.floor(Math.random() * 50);
        vendor.revenue += Math.floor(Math.random() * 5000);
    });
};

module.exports = {
    singleValues,
    timeSeriesData,
    topVendors,
    updateDataOverTime,
};
