import React, { useState, useEffect } from "react";

import Slider from "@mui/material/Slider";
import driver from "../components/visualizeHelper";
import linearSearch from "../algorithm/searching/linearSearch";
import binarySearch from "../algorithm/searching/binarySearch";
const Searching = () => {
    const [arraySize, setArraySize] = useState(10);
    const [speed, setSpeed] = useState(20);
    const [array1, setMyArray1] = useState([]);
    const [array2, setMyArray2] = useState([]);
    const [isSearch, setIsSearching] = useState(false);
    const [linearTarget, setLinearTarget] = useState();
    const [binaryTarget, setBinaryTarget] = useState();
    const BOX_SIZE = Math.floor(600 / arraySize);
    const [test, setTest] = useState(1);
    const [algo, setAlgo] = useState("linear");
    let max = 20;
    let min = 5;
    const handleTest = (e) => {
        setTest(e.target.value);
        const ch = e.target.value * 20;
        console.log("sssss", ch);
        setSpeed(ch);
    };
    const handleReset = () => {
        let newArray1 = [];
        let newArray2 = [];
        for (let i = 0; i < arraySize; i++) {
            newArray1.push(Math.floor(Math.random() * (max - min + 1) + min));
            newArray2.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        setMyArray1(newArray1);
        setMyArray2(newArray2);
        colorReset();
    };

    useEffect(() => {
        handleReset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (numb) => {
        setArraySize(numb);
        handleReset();
    };

    const colorReset = () => {
        const barArr1 = document.getElementsByClassName("array-bar");
        const barArr2 = document.getElementsByClassName("array-bar1");
        for (let i = 0; i < array1.length; i++) {
            barArr1[i].style.backgroundColor = "#0074D9";
        }
        for (let i = 0; i < array2.length; i++) {
            barArr2[i].style.backgroundColor = "#0074D9";
        }
    };

    const handleLinearSubmit = () => {
        if (linearTarget) {
            driver(array1, linearSearch, speed, arraySize, linearTarget);
        }
    };
    const handleBinarySubmit = () => {
        if (binaryTarget) {
            driver(array2, binarySearch, speed, arraySize, binaryTarget, true);
        }
    };
    return (
        <div className="font-georgia h-screen mx-4">
            <div className="text-center text-3xl mt-2 ">
                Searching Visualizer
            </div>
            <div className="mt-5 flex flex-start text-sm gap-5 flex-wrap">
                <div className="flex gap-2 items-center justify-center border p-4 bg-slate-100 flex-wrap">
                    <select
                        name=""
                        id="search"
                        className="outline-none px-2  py-1 rounded-sm border-2 border-purple-800"
                        onChange={(e) => setAlgo(e.target.value)}
                        value={algo}
                    >
                        <option>Search Algorithm</option>

                        <option value="linear">Linear Search</option>
                        <option value="binary">Binary Search</option>
                    </select>
                    <button
                        className={`border-2 py-1 px-2  rounded-sm bg-white border-purple-800`}
                        onClick={() => handleReset()}
                        disabled={isSearch}
                    >
                        Reset Value
                    </button>
                </div>
                <div className="flex border flex-auto justify-around items-center px-2 bg-slate-100">
                    <span> No. of bars</span>
                    <span className="w-1/2">
                        <Slider
                            value={arraySize}
                            aria-labelledby="discrete-slider"
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            max={max}
                            min={10}
                            onChange={(e) => handleChange(e.target.value)}
                            color="secondary"
                            disabled={isSearch}
                        />
                    </span>
                </div>
                <div className="flex border flex-auto justify-around items-center px-2 bg-slate-100">
                    <span>
                        Speed <span className="text-xs">(ms)</span>
                    </span>
                    <span className="w-1/2">
                        <select
                            name=""
                            id=""
                            className="px-4 py-2 outline-none bg-white border-purple-700 border-2 rounded-md"
                            value={test}
                            onChange={handleTest}
                        >
                            <option value="4.5">1x</option>
                            <option value="4">1.5x</option>
                            <option value="3.5">2x</option>
                            <option value="3">2.5x</option>
                            <option value="2.5">3x</option>
                            <option value="2">3.5x</option>
                            <option value="1.5">4x</option>
                            <option value="1">4.5x</option>
                        </select>
                    </span>
                </div>
            </div>

            <div className="  overflow-hidden  w-full h-2/3 mt-5 relative hover:shadow-lg transition-all ease-in-out">
                <div className="border  w-full h-full text-center relative flex p-2 bg-slate-100 items-center flex-col gap-20 b">
                    {algo == "linear" ? (
                        <div className="w-full full flex flex-col gap-32 ">
                            <div className="w-full mt-4 flex justify-between items-center px-10">
                                <div></div>
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        value={linearTarget}
                                        onChange={(e) =>
                                            setLinearTarget(e.target.value)
                                        }
                                        placeholder="Enter your target !"
                                        className="outline-none border-2 rounded-md font-oxygen w-full border-purple-700 p-4 bg-white"
                                    />
                                    <button
                                        className="px-6 bg-purple-800 text-white rounded-md "
                                        onClick={() => handleLinearSubmit()}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-full h-3/5   items-center">
                                {array1.map((item, key) => {
                                    return (
                                        <abbr
                                            title={item}
                                            key={key}
                                            style={{
                                                fontSize: `${BOX_SIZE / 3}px`,
                                            }}
                                            className="text-decoration-none no-underline rounded-sm h-12 text-center w-1 bg-[#0074D9] flex items-center justify-center  animation flex-1 mx-[4px] array-bar ease-in transition-all  text-white cursor-pointer"
                                        >
                                            {item}
                                        </abbr>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full flex flex-col gap-32">
                            <div className="w-full px-10 mt-4 flex justify-between items-center ">
                                <div></div>
                                <div className="flex gap-4">
                                    <input
                                        type="number"
                                        value={binaryTarget}
                                        onChange={(e) =>
                                            setBinaryTarget(e.target.value)
                                        }
                                        placeholder="Enter your target !"
                                        className="outline-none border-2 rounded-md font-oxygen w-full border-purple-700 p-4 bg-white"
                                    />
                                    <button
                                        className="px-6 bg-purple-800 text-white rounded-md "
                                        onClick={() => handleBinarySubmit()}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-full h-3/5   items-center">
                                {array2
                                    .sort((a, b) => a - b)
                                    .map((item, key) => {
                                        return (
                                            <abbr
                                                title={item}
                                                key={key}
                                                style={{
                                                    fontSize: `${
                                                        BOX_SIZE / 3
                                                    }px`,
                                                }}
                                                className=" no-underline rounded-sm h-12 text-center w-1 bg-[#0074D9] flex items-center justify-center  animation flex-1 mx-[4px] array-bar1 ease-in transition-all  text-white cursor-pointer"
                                            >
                                                {item}
                                            </abbr>
                                        );
                                    })}
                            </div>
                        </div>
                    )}
                    <div className="flex gap-14">
                        <div className="flex  items-center  gap-2">
                            <span>Element Found :</span>
                            <div className="bg-[#00d999] w-4 h-4">{""}</div>
                        </div>
                        <div className="flex  items-center  gap-2">
                            <span>Compare :</span>
                            <div className="bg-red-600 w-4 h-4">{""}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Searching;
