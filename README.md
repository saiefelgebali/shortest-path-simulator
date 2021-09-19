# Shortest Path Simulator

## About

This is a web-based application where users can manipulate graphs, and find the shortest path between any two given nodes.

I built this using **React** with **TypeScript** and a node module I created called [react-diagrams](https://github.com/saiefelgebali/react-diagrams).

To find the shortest path, I used Dijkstra's shortest path algorithm; the implementation of which you can see in [algorithms.ts](https://github.com/saiefelgebali/shortest-path-simulator/blob/master/src/graph/algorithm.ts).

## Demo

Here is a demo video of the project running.

https://user-images.githubusercontent.com/77067634/133920507-87aa74ff-4ee7-47a3-9235-0e88cf9fb946.mp4

In the video, I create a simple graph with 4 nodes and make some connections between them. Then I find the shortest path between RM1 and RM4. The app highlights the shortests path between those two nodes in red. 
