import React from "react";

type DiagramNodeProps = {
	x: number;
	y: number;
	r: number;
};

/**
 * Add a circle element representing a node
 * @prop {number} x position on x axis
 * @prop {number} y position on y axis
 * @prop {number} r radius of the circle
 */
function DiagramNode({ x, y, r }: DiagramNodeProps) {
	return <circle cx={x} cy={y} r={r} fill='black' />;
}

export default DiagramNode;
