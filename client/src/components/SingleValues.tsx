import React from "react";
import { SingleValuesData } from "../types";
import { MdAttachMoney } from "react-icons/md";
import { AiFillProduct, AiOutlineShoppingCart } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";

interface SingleValuesProps {
    data: SingleValuesData | null;
}

const SingleValues: React.FC<SingleValuesProps> = ({ data }) => {
    return (
        <div className="single-values">
            {data && (
                <div className="grid grid-cols-2 gap-2 ">
                    <div className="w-full bg-[#3B9DF8] shadow-xl rounded-md p-4">
                        <div className="flex items-center justify-between w-full mb-5">
                            <AiFillProduct className="text-[#ffffff] text-[3.5rem]" />
                            <button
                                className="px-2 py-1 border
                                    border-[#ffffff] rounded-md text-[0.8rem] bg-[#ffffff]"
                            >
                                Total Sales
                            </button>
                        </div>
                        <h2 className="text-[2.3rem] font-[800] text-[#ffffff]">
                            {data.total_sales}
                        </h2>
                    </div>
                    <div className="w-full bg-green-500 shadow-xl rounded-md p-4">
                        <div className="flex items-center justify-between w-full mb-5">
                            <FaCircleUser className="text-[#ffffff] text-[3.5rem]" />
                            <button
                                className="px-2 py-1 border
                                    border-[#ffffff] rounded-md text-[0.8rem] bg-[#ffffff]"
                            >
                                Online Users
                            </button>
                        </div>
                        <h2 className="text-[2.3rem] font-[800] text-[#ffffff]">
                            {data.current_online_users}
                        </h2>
                    </div>
                    <div className="w-full bg-teal-500 shadow-xl rounded-md p-4">
                        <div className="flex items-center justify-between w-full mb-5">
                            <AiOutlineShoppingCart className="text-[#ffffff] text-[3.5rem]" />
                            <button
                                className="px-2 py-1 border
                                    border-[#ffffff] rounded-md text-[0.8rem] bg-[#ffffff]"
                            >
                                Average Cart Value
                            </button>
                        </div>
                        <h2 className="text-[2.3rem] font-[800] text-[#ffffff]">
                            ${data.avg_cart_value}
                        </h2>
                    </div>
                    <div className="w-full bg-rose-500 shadow-xl rounded-md p-4">
                        <div className="flex items-center justify-between w-full mb-5">
                            <MdAttachMoney className="text-[#ffffff] text-[3.5rem]" />
                            <button
                                className="px-2 py-1 border
                                    border-[#ffffff] rounded-md text-[0.8rem] bg-[#ffffff]"
                            >
                                Conversation Rate Percentage
                            </button>
                        </div>
                        <h2 className="text-[2.3rem] font-[800] text-[#ffffff]">
                            {data.conversion_rate_percentage}%
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleValues;
