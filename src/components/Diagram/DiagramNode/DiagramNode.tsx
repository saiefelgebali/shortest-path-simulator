import React, { useContext } from "react";
import { useState } from "react";
import { GraphNode } from "../../../graph/GraphNode";
import { moveNode } from "../../../store/actions";
import { Store } from "../../../store/store";
import DiagramDragMove from "../DiagramDragMove/DiagramDragMove";
import styles from "./DiagramNode.module.scss";

type DiagramNodeProps = {
	node: GraphNode;
};

/**
 * Represents a graph node on the diagram
 * @prop {GraphNode} node
 */
function DiagramNode({ node }: DiagramNodeProps) {
	// Handle app state
	const { state, dispatch } = useContext(Store);

	const [translate, setTranslate] = useState(node.position);
	const [isDragging, setIsDragging] = useState(false);

	// Fires when element starts dragging
	function onPointerDown(event: React.PointerEvent) {
		setIsDragging(true);
	}

	// Fires when finished dragging
	function onPointerUp(event: PointerEvent) {
		setIsDragging(false);
		moveNode(dispatch, state.graph, node, translate);
	}

	// Fired while dragging
	function onDragMove(event: React.PointerEvent) {
		setTranslate({
			x: translate.x + event.movementX,
			y: translate.y + event.movementY,
		});
	}

	const className = `${styles.node} ${isDragging ? styles.isDragging : null}`;

	return (
		<DiagramDragMove
			onDragMove={onDragMove}
			onPointerDown={onPointerDown}
			onPointerUp={onPointerUp}>
			<svg
				className={className}
				x={translate.x}
				y={translate.y}
				width={80}
				height={80}>
				<circle cx='50%' cy='50%' r={40} />
				<text
					x='50%'
					y='50%'
					textAnchor='middle'
					fill='white'
					fontSize='24px'
					fontFamily='Arial'
					dy='8px'>
					{node.id}
				</text>
			</svg>
		</DiagramDragMove>
	);
}

export default DiagramNode;
