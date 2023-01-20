import { setVisualizationState } from "./index";

export const animatePath = (
    klass,
    visitedNodesInOrder,
    nodesInShortestPath,
    startNode,
    finishNode
) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        // calls the func to animate the shortest path
        if (i === visitedNodesInOrder.length) {
            setTimeout(() => {
                animateShortestPath(nodesInShortestPath);
                setVisualizationState(klass);
            }, 10 * i);
            return;
        }
        // sets the node's class to node-visited class
        setTimeout(() => {
            const node = visitedNodesInOrder[i];
            if (node !== startNode && node !== finishNode)
                document.getElementById(
                    `node-${node.row}-${node.col}`
                ).className = `node node-visited`;
        }, 10 * i);
    }
};

// this sets the nodes in shortest path to `node-shortest-path` class
function animateShortestPath(nodesInShortestPath) {
    for (let i = 1; i < nodesInShortestPath.length - 1; i++) {
        setTimeout(() => {
            const node = nodesInShortestPath[i];
            document.getElementById(
                `node-${node.row}-${node.col}`
            ).className = `node node-shortest-path`;
        }, 50 * i);
    }
}
