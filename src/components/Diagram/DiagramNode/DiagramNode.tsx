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
	function onDragMove(
		event: PointerEvent,
		initialPosition?: { x: number; y: number },
		snapToGrid?: Function
	) {
		if (!initialPosition) return;
		if (!snapToGrid) return;

		// Get difference in position
		const dx = event.pageX - initialPosition.x;
		const dy = event.pageY - initialPosition.y;

		const { x, y } = snapToGrid({
			x: node.position.x + dx,
			y: node.position.y + dy,
		});

		setTranslate({ x, y });
	}

	const className = `${styles.node} ${isDragging ? styles.isDragging : null}`;

	return (
		<DiagramDragMove
			snap={50}
			onDragMove={onDragMove}
			onPointerDown={onPointerDown}
			onPointerUp={onPointerUp}>
			<svg
				className={className}
				x={translate.x}
				y={translate.y}
				width={100}
				height={100}>
				<circle cx='50%' cy='50%' r={50} />
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
