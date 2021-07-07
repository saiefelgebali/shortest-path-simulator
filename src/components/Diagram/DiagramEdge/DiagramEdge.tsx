import React from "react";
import { GraphEdge } from "../../../graph/GraphEdge";

type DiagramEdgeProps = {
	edge: GraphEdge;
	radius?: number;
};

function DiagramEdge({ edge, radius }: DiagramEdgeProps) {
	const r = radius || 50;

	// Get positions of centers of nodes using node side lengths
	function getCentreOfNode({ x, y }: { x: number; y: number }) {
		const cx = x;
		const cy = y;
		return { x: cx, y: cy };
	}

	const fromPosition = getCentreOfNode(edge.fromNode.position);
	const toPosition = getCentreOfNode(edge.toNode.position);

	return (
		<line
			x1={fromPosition.x}
			y1={fromPosition.y}
			x2={toPosition.x}
			y2={toPosition.y}
			stroke='black'
		/>
	);
}

export default DiagramEdge;
