import React from "react";
import SidebarMenu from "../../SidebarMenu/SidebarMenu";
// import styles from "../SidebarPrimary.module.scss";
import sidebarStyles from "../../Sidebar.module.scss";
import { useContext } from "react";
import { GraphContext } from "../../../../graph/context/graphContext";
import { findShortestPath } from "../../../../graph/context/graphActions";
import { SelectNode } from "./SelectNode";
import { useRef } from "react";
import { GraphNode } from "../../../../graph";

function MenuAlgorithm() {
	const { state, dispatch } = useContext(GraphContext);

	// Reference selected nodes
	const startNodeRef = useRef<GraphNode>();
	const endNodeRef = useRef<GraphNode>();

	const onStartAlgorithm = () => {
		if (startNodeRef.current && endNodeRef.current)
			findShortestPath(
				dispatch,
				startNodeRef.current,
				endNodeRef.current
			);
	};

	return (
		<SidebarMenu title='Shortest Path'>
			<div className={sidebarStyles.form}>
				<label className={sidebarStyles.formLabel}>Start Node</label>
				<SelectNode
					nodeRef={startNodeRef}
					current={state.current as GraphNode}
				/>
				<label className={sidebarStyles.formLabel}>End Node</label>
				<SelectNode
					nodeRef={endNodeRef}
					current={state.current as GraphNode}
				/>
				<label className={sidebarStyles.formLabel}>
					Find Shortest Path
				</label>
				<button
					onClick={onStartAlgorithm}
					className={sidebarStyles.formSubmit}>
					Start
				</button>
			</div>
		</SidebarMenu>
	);
}

export default MenuAlgorithm;
