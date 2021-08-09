import React from "react";
import { useContext } from "react";
import { ElementContainer } from "@saiefelgebali/react-diagrams";
import { selectEdge } from "../../../graph/context/graphEdgeActions";
import { GraphContext } from "../../../graph/context/graphContext";
import { GraphEdge } from "../../../graph/GraphEdge";
import styles from "./DiagramEdge.module.scss";

type DiagramEdgeProps = {
	edge: GraphEdge;
	path?: boolean;
};

function DiagramEdge({ edge, path = false }: DiagramEdgeProps) {
	const { dispatch } = useContext(GraphContext);

	function onClick(event: React.MouseEvent) {
		selectEdge(dispatch, edge);
	}

	/**
	 * Overlay line to increase clickable area
	 */
	return (
		<ElementContainer
			className={`${styles.edge} ${path ? styles.path : ""}`}
			onClick={onClick}>
			<line
				className={styles.overlay}
				x1={edge.nodes[0].position.x}
				y1={edge.nodes[0].position.y}
				x2={edge.nodes[1].position.x}
				y2={edge.nodes[1].position.y}
			/>
			<line
				className={styles.main}
				x1={edge.nodes[0].position.x}
				y1={edge.nodes[0].position.y}
				x2={edge.nodes[1].position.x}
				y2={edge.nodes[1].position.y}
			/>
		</ElementContainer>
	);
}

export default DiagramEdge;
