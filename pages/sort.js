import React, { useEffect, useState, useCallback } from "react";
import Slider from "@mui/material/Slider";
import { getMergeSortAnimation } from "../algorithm/sorting/mergeSort";

const Sort = () => {
    const PRIMARY_COLOR = "blue";
    const SECONDARY_COLOR = "turquoise";
    const [arraySize, setArraySize] = useState(20);
    const [speed, setSpeed] = useState(0.5);
    const [array, setMyArray] = useState([]);
    let max = 400;
    let min = 20;

    const handleReset = useCallback(() => {
        setMyArray([]);
        let newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        console.log(arraySize);
        setMyArray(newArray);
    }, [arraySize, max, min]);

    useEffect(() => {
        handleReset();
    }, [handleReset]);
    const handleChange = (numb) => {
        setArraySize(numb);
    };
    const handleSpeed = (numb) => {
        console.log(speed);
        setSpeed(numb);
    };
    const sortings = [
        {
            sort: "Bubble Sort",
            working: function () {},
            key: 1,
        },
        {
            sort: "Insertion Sort",
            working: function () {},
            key: 2,
        },
        {
            sort: "Selection Sort",
            working: function () {},
            key: 3,
        },
        {
            sort: "Merge Sort",
            working: function () {
                const animations = getMergeSortAnimation(array);
                for (let i = 0; i < animations.length; i++) {
                    const arrayBars =
                        document.getElementsByClassName("array-bar");
                    const isColorChange = i % 3 != 2; //Only at the 3rd chance
                    if (isColorChange) {
                        const [barOneIdx, barTwoIdx] = animations[i];
                        console.log(barOneIdx, barTwoIdx);
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        const color =
                            i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                        setTimeout(() => {
                            barOneStyle.backgroundColor = color;
                            barTwoStyle.backgroundColor = color;
                        }, i * speed);
                    } else {
                        setTimeout(() => {
                            const [barOneIdx, newHeight] = animations[i];
                            const barOneStyle = arrayBars[barOneIdx].style;
                            barOneStyle.height = `${newHeight}px`;
                        }, i * speed);
                    }
                }
            },
            key: 4,
        },
        {
            sort: "Quick Sort",
            working: function () {},
            key: 5,
        },
    ];
    return (
        <div className="font-georgia h-screen">
            <div className="text-center text-3xl mt-2 ">Sorting Visualizer</div>
            <div className="mt-5 flex flex-start text-sm gap-5 flex-wrap">
                <div className="flex gap-2 items-center justify-center border p-4 bg-slate-100 flex-wrap">
                    {sortings.map((mySort, key) => {
                        return (
                            <span
                                onClick={() => mySort.working()}
                                key={mySort.key}
                                className="cursor-pointer bg-purple-800 text-white  items-center py-1 px-2 rounded-sm  "
                            >
                                {mySort.sort}
                            </span>
                        );
                    })}
                    <button
                        className="border-2 py-1 px-2 border-purple-800 hover:bg-slate-300 rounded-sm"
                        onClick={() => handleReset()}
                    >
                        Reset Value
                    </button>
                    <button className="border-2 py-1 px-2 border-purple-800 hover:bg-slate-300 rounded-sm">
                        Skip
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
                            min={20}
                            onChange={(e) => handleChange(e.target.value)}
                            color="secondary"
                        />
                    </span>
                </div>
                <div className="flex border flex-auto justify-around items-center px-2 bg-slate-100">
                    <span>
                        Speed <span className="text-xs">(ms)</span>
                    </span>
                    <span className="w-1/2">
                        <Slider
                            value={speed}
                            color="secondary"
                            aria-labelledby="discrete-slider"
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            min={0.5}
                            max={1000}
                            onChange={(e) => handleSpeed(e.target.value)}
                            track="inverted"
                        />
                    </span>
                </div>
            </div>

            <div className="  overflow-hidden  w-full h-2/3 mt-5 relative hover:shadow-lg transition-all ease-in-out">
                <div className="border  w-full h-full text-center relative bottom-0 flex p-2 bg-slate-50 ">
                    {array.map((item, key) => {
                        return (
                            <div
                                key={key}
                                style={{ height: `${item}px` }}
                                className="w-1  inline-block	flex-1 mx-[1px] array-bar"
                            >
                                {""}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sort;
