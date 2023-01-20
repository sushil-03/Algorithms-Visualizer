import {
    getAllNodes,
    sortNodesByDistance,
    getUnvisitedNeighbours,
} from "./index";

export function dijkstra(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while (!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        // If we encounter a wall, we skip it.
        if (closestNode.isWall) continue;

        // If the closest node is at a distance of infinity,
        // we must be trapped and should therefore stop.
        if (closestNode.distance === Infinity) return visitedNodesInOrder;

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if (closestNode === finishNode) return visitedNodesInOrder;

        updateUnvisitedNeighbours(closestNode, grid);
    }
}

// updates the neighbours,
// in correspondance to the algorithm
function updateUnvisitedNeighbours(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbours(node, grid);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}
