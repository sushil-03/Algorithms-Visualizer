import Link from "next/link";
import Image from "next/image";
const AlgoCard = ({ image, heading, detail, url, buttonName }) => {
    return (
        <div className="md:w-2/6 sm:w-1/4 border p-3 rounded-md mt-5 ">
            <div className="text-center  ">
                <span className="text-2xl ">{heading}</span>
                <div>
                    <Image
                        src={`/images/${image}`}
                        alt="do"
                        width={300}
                        height={200}
                    />
                </div>
                <p className="text-sm text-gray-500 mb-5 p-2 h-1/5 ">
                    {detail}
                </p>
                <Link href={`/${url}`}>
                    <a className="bg-[#2E3D9B] hover:bg-[#172476] text-white p-2 mt-12 rounded-sm bottom-0">
                        {buttonName}
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default AlgoCard;
import React from "react";
