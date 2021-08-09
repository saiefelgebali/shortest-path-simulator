import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { GraphEdge, GraphNode } from "../../../../graph";
import { addEdge } from "../../../../graph/context/graphEdgeActions";
import { GraphContext } from "../../../../graph/context/graphContext";
import SidebarMenu from "../../SidebarMenu/SidebarMenu";
import sidebarStyles from "../../Sidebar.module.scss";
import { SelectNode } from "./SelectNode";

/**
 * Create new Edge and add it to graph
 */
function MenuCreateEdge() {
	const { state, dispatch } = useContext(GraphContext);

	// Reference selected nodes
	const fromNodeRef = useRef<GraphNode>();
	const toNodeRef = useRef<GraphNode>();

	function handleCreateEdge(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const fromNode = fromNodeRef.current;
		const toNode = toNodeRef.current;
		const weight = parseInt(formData.get("weight") as string) || 0;

		if (!fromNode || !toNode) return;

		const edge = new GraphEdge(fromNode, toNode, weight);

		addEdge(dispatch, edge);
	}

	return (
		<SidebarMenu title='Create Edge'>
			<form onSubmit={handleCreateEdge} className={sidebarStyles.form}>
				<label className={sidebarStyles.formLabel}>From</label>
				<SelectNode
					nodeRef={fromNodeRef}
					current={state.current as GraphNode}
				/>
				<label className={sidebarStyles.formLabel}>To</label>
				<SelectNode
					nodeRef={toNodeRef}
					current={state.current as GraphNode}
				/>
				<label className={sidebarStyles.formLabel}>Weight</label>
				<input
					className={sidebarStyles.formInput}
					type='number'
					name='weight'
					placeholder='0'
					min={0}
					maxLength={24}
				/>
				<button className={sidebarStyles.formSubmit}>Add Edge</button>
			</form>
		</SidebarMenu>
	);
}

export default MenuCreateEdge;
