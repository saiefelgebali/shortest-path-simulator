import React from "react";
import { GraphEdge } from "../../../graph/GraphEdge";

type DiagramEdgeProps = {
	edge: GraphEdge;
};

function DiagramEdge({ edge }: DiagramEdgeProps) {
	return (
		<line
			x1={edge.fromNode.position.x}
			y1={edge.fromNode.position.y}
			x2={edge.toNode.position.x}
			y2={edge.toNode.position.y}
			stroke='black'
		/>
	);
}

export default DiagramEdge;
