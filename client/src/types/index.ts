export interface SingleValuesData {
    total_sales: number;
    current_online_users: number;
    avg_cart_value: string;
    conversion_rate_percentage: string;
}

export interface TimeSeriesEntry {
    timestamp: string;
    value: number;
}

export interface TimeSeriesData {
    sales_over_time: TimeSeriesEntry[];
    traffic_over_time: TimeSeriesEntry[];
    revenue_over_time: TimeSeriesEntry[];
    new_signups_over_time: TimeSeriesEntry[];
}

export interface Vendor {
    vendor_id: string;
    name: string;
    sales: number;
    revenue: number;
}
