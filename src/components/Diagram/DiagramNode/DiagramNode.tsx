import React, { useContext } from "react";
import { GraphNode } from "../../../graph/GraphNode";
import { ElementContainer } from "@saiefelgebali/react-diagrams";
import { GraphContext } from "../../../graph/context/graphContext";
import { moveNode } from "../../../graph/context/graphActions";
import styles from "./DiagramNode.module.scss";

type DiagramNodeProps = {
	node: GraphNode;
};

/**
 * Represents a graph node on the diagram
 * @prop {GraphNode} node
 */
function DiagramNode({ node }: DiagramNodeProps) {
	// The radius of a node's circle
	const r = 50;

	// Handle app state
	const { dispatch } = useContext(GraphContext);

	// Fired while dragging
	function onDragMove(event: MouseEvent) {
		// Snap to grid
		const snap = 10;
		moveNode(dispatch, node, {
			x: Math.round(event.offsetX / snap) * snap,
			y: Math.round(event.offsetY / snap) * snap,
		});
	}

	return (
		<ElementContainer
			className={styles.node}
			classNameDragging={styles.isDragging}
			onDrag={onDragMove}>
			<circle cx={node.position.x} cy={node.position.y} r={r} />
			<text
				x={node.position.x}
				y={node.position.y}
				textAnchor='middle'
				fill='white'
				fontSize='24px'
				fontFamily='Arial'
				dy='8px'>
				{node.id}
			</text>
		</ElementContainer>
	);
}

export default DiagramNode;
