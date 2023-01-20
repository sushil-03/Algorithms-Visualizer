import styles from "../styles/Home.module.css";
import AlgoCard from "../components/AlgoCard";

export default function Home() {
    return (
        <div className="font-georgia">
            <div className="text-3xl text-center mt-5 border  p-3 mx-12 rounded-sm">
                Searching and Sorting Visualizer
            </div>
            <div className="flex gap-5 justify-around flex-wrap">
                <AlgoCard
                    heading="Searching Visualizer"
                    detail="A simple simulation of Linear Search and Binary Search on an array of integers meant for understanding them better."
                    url="searching"
                    buttonName="Searching Algorithms"
                />
                <AlgoCard
                    heading="Sorting Visualizer"
                    detail="Simulation of Bubble Sort, Selection Sort, Insertion Sort, Merge Sort and Quick Sort on randomly chosen data values."
                    url="sorting"
                    buttonName="Sorting Algorithms"
                />
                <AlgoCard
                    heading="Graph Visualizer"
                    detail="Simulation of Bubble Sort, Selection Sort, Insertion Sort, Merge Sort and Quick Sort on randomly chosen data values."
                    url="pathVisualizer"
                    buttonName="Graph Algorithms"
                />
            </div>
            {/* <div className="control-area">
                <button>Merge Sort</button>
                <button>Reset</button>
            </div> */}
        </div>
    );
}
