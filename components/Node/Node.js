import React from "react";
// import "./Node.css";

const Node = (props) => {
    const {
        row,
        col,
        isStart,
        isFinish,
        isWall,
        onMouseDown,
        onMouseEnter,
        onMouseUp,
        onMouseLeave,
    } = props;
    const extraClassName = isStart
        ? "node-start bg-green-600"
        : isFinish
        ? "node-finish bg-red-600"
        : isWall
        ? "node-wall bg-black"
        : "";

    return (
        <div
            id={`node-${row}-${col}`}
            className={` w-6 h-6 inline-block mb-1 mr-1 border  border-black ${extraClassName} `}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp(row, col)}
            onMouseLeave={() => onMouseLeave(row, col)}
        >
            {""}
        </div>
    );
};

export default Node;
