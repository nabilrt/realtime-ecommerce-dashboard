import { Line, Bar, Pie } from "react-chartjs-2";
import { ChartData } from "chart.js";

// Map chartType to appropriate ChartData type
type ChartType = "Line" | "Bar" | "Pie";
type ChartComponentType<T extends ChartType> = T extends "Line"
    ? ChartData<"line">
    : T extends "Bar"
    ? ChartData<"bar">
    : T extends "Pie"
    ? ChartData<"pie">
    : never;

interface ChartContainerProps<T extends ChartType> {
    title: string;
    chartData: ChartComponentType<T>;
    chartType: T;
}

const ChartContainer = <T extends ChartType>({
    title,
    chartData,
    chartType,
}: ChartContainerProps<T>) => {
    // Determine the component type based on the chartType prop
    const ChartComponent =
        chartType === "Line" ? Line : chartType === "Bar" ? Bar : Pie;

    return (
        <div className="chart border border-slate-50 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] p-2 ">
            <h2 className="uppercase">{title}</h2>
            <ChartComponent
                data={chartData as any}
                options={{
                    responsive: false,
                }}
                height={600}
                width={850}
            />
        </div>
    );
};

export default ChartContainer;
