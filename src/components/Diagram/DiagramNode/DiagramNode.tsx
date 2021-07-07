import React, { useContext } from "react";
import { GraphNode } from "../../../graph/GraphNode";
import { moveNode } from "../../../store/actions";
import { Store } from "../../../store/store";
import styles from "./DiagramNode.module.scss";
import { Element } from "@saiefelgebali/react-diagrams";

type DiagramNodeProps = {
	node: GraphNode;
	radius?: number;
};

/**
 * Represents a graph node on the diagram
 * @prop {GraphNode} node
 */
function DiagramNode({ node, radius }: DiagramNodeProps) {
	const r = radius || 50;

	// Handle app state
	const { dispatch } = useContext(Store);

	// Fired while dragging
	function onDragMove(event: MouseEvent) {
		moveNode(dispatch, node, { x: event.offsetX, y: event.offsetY });
	}

	return (
		<Element className={styles.node} onDrag={onDragMove}>
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
		</Element>
	);
}

export default DiagramNode;
