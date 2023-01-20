import React, { useEffect, useState, useCallback, useSetState } from "react";
import Slider from "@mui/material/Slider";
import { getMergeSortAnimation } from "../algorithm/sorting/mergeSort";
import bubbleSort from "../algorithm/sorting/BubbleSort";
import insertionSort from "../algorithm/sorting/insertionSort";
import quickSort from "../algorithm/sorting/quickSort";
import driver from "../components/visualizeHelper";
import selectionSort from "../algorithm/sorting/SelectionSort";

const Sorting = () => {
    const PRIMARY_COLOR = "#0074D9";
    const SECONDARY_COLOR = "#00d999";
    const [arraySize, setArraySize] = useState(10);
    const [speed, setSpeed] = useState(20);
    const [array, setMyArray] = useState([]);
    const [isSort, setIsSorting] = useState(false);
    const [test, setTest] = useState(1);
    const BOX_SIZE = Math.floor(400 / arraySize);

    let max = 300;
    let min = 20;
    let timeout = [];
    const handleTest = (e) => {
        setTest(e.target.value);
        const ch = e.target.value * 20;
        console.log("sssss", ch);
        setSpeed(ch);
    };
    const handleReset = () => {
        let newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        setMyArray(newArray);
        colorReset();
    };

    useEffect(() => {
        console.log(test);
        handleReset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (numb) => {
        setArraySize(numb);
        handleReset();
    };

    const colorReset = () => {
        const barArr = document.getElementsByClassName("array-bar");
        for (let i = 0; i < array.length; i++) {
            barArr[i].style.backgroundColor = "#0074D9";
        }
    };

    const visualize = async (sortingAlgo) => {
        setIsSorting(true);
        setTimeout(() => {
            driver(array, sortingAlgo, speed, arraySize);
        }, 100);
        setIsSorting(false);
    };
    const Allsorting = [
        {
            sort: "Bubble Sort",
            working: () => visualize(bubbleSort),
            key: 1,
        },
        {
            sort: "Insertion Sort",
            working: () => visualize(insertionSort),
            key: 2,
        },
        {
            sort: "Selection Sort",
            working: () => visualize(selectionSort),
            key: 3,
        },
        {
            sort: "Merge Sort",
            working: function () {
                const temp = [...array];
                const animations = getMergeSortAnimation(temp);
                for (let i = 0; i < animations.length; i++) {
                    const arrayBars =
                        document.getElementsByClassName("array-bar");
                    const isColorChange = i % 3 != 2; //Only at the 3rd chance

                    if (isColorChange) {
                        const [barOneIdx, barTwoIdx] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color =
                            i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                        let timer = setTimeout(() => {
                            barOneStyle.backgroundColor = color;
                            barTwoStyle.backgroundColor = color;
                        }, i * speed);
                        timeout.push(timer);
                    } else {
                        let timer = setTimeout(() => {
                            if (!isSort) {
                                const [barOneIdx, newHeight] = animations[i];
                                const barOneStyle = arrayBars[barOneIdx].style;
                                barOneStyle.height = `${newHeight}px`;
                            }
                        }, i * speed);
                        timeout.push(timer);
                    }
                }
            },
            key: 4,
        },
        {
            sort: "Quick Sort",
            working: () => visualize(quickSort),
            key: 5,
        },
    ];
    return (
        <div className="font-georgia h-screen mx-4">
            <div className="text-center text-3xl mt-2 ">Sorting Visualizer</div>
            <div className="mt-5 flex flex-start text-sm gap-5 flex-wrap">
                <div className="flex gap-2 items-center justify-center border p-4 bg-slate-100 flex-wrap">
                    {Allsorting.map((mySort, key) => {
                        return (
                            <button
                                onClick={() => mySort.working()}
                                key={mySort.key}
                                className={`cursor-pointer   items-center py-1 px-2 rounded-sm  ${
                                    isSort === true
                                        ? "bg-slate-200 text-gray-400"
                                        : "bg-[#233147ed] text-white"
                                }`}
                                disabled={isSort}
                            >
                                {mySort.sort}
                            </button>
                        );
                    })}
                    <button
                        className={`border-2 py-1 px-2  rounded-sm ${
                            isSort === false
                                ? "bg-slate-100 hover:bg-slate-200 border-blue-800 "
                                : "bg-slate-200 text-gray"
                        }`}
                        onClick={() => handleReset()}
                        disabled={isSort}
                    >
                        Reset Value
                    </button>
                    {/* <button
                        className="border-2 py-1 px-2 border-blue-800 hover:bg-slate-300 rounded-sm"
                        onClick={() => handleSkip()}
                        disabled={flag}
                    >
                        Skip
                    </button> */}
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
                            color="primary"
                            disabled={isSort}
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
                            className="px-4 py-2 outline-none bg-white border-blue-500 border-2 rounded-md"
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
            <div className="  overflow-hidden  w-full h-2/3  mt-5 relative hover:shadow-lg transition-all ease-in-out">
                <div className="border  w-full h-full text-center relative bottom-0 flex p-2 bg-slate-100 ">
                    {array.map((item, key) => {
                        return (
                            <abbr
                                title={item}
                                key={key}
                                style={{
                                    height: `${item}px`,
                                    fontSize: `${BOX_SIZE / 3}px`,
                                }}
                                className=" no-underline w-1 bg-[#0074D9] inline-block  animation flex-1 mx-[1px] array-bar ease-in transition-all  text-white cursor-pointer"
                            >
                                {item}
                            </abbr>
                        );
                    })}
                </div>
            </div>
            <div className="flex gap-14 w-full justify-center items-center mt-4">
                <div className="flex  items-center  gap-2">
                    <span>New Color :</span>
                    <div className="bg-[#00d999] w-4 h-4">{""}</div>
                </div>
                <div className="flex  items-center  gap-2">
                    <span>Compare :</span>
                    <div className="bg-red-600 w-4 h-4">{""}</div>
                </div>
                <div className="flex  items-center  gap-2">
                    <span>Swap :</span>
                    <div className="bg-yellow-600 w-4 h-4">{""}</div>
                </div>
                <div className="flex  items-center  gap-2">
                    <span>Sorted :</span>
                    <div className="bg-green-600 w-4 h-4">{""}</div>
                </div>
            </div>
        </div>
    );
};
export default Sorting;
