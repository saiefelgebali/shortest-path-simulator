import React from "react";
import { useContext } from "react";
import { GraphEdge, GraphNode } from "../../../graph";
import { GraphContext } from "../../../graph/context/graphContext";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import GraphEdgeInfo from "./GraphEdgeInfo";
import GraphNodeInfo from "./GraphNodeInfo";

const Current = () => {
	const { state } = useContext(GraphContext);
	const current = state.current;

	// Node info
	if (current instanceof GraphNode) {
		return <GraphNodeInfo node={current} />;
	}

	// Edge info
	else if (current instanceof GraphEdge) {
		return <GraphEdgeInfo edge={current} />;
	}

	return null;
};

function SidebarSecondary() {
	console.log("rerender");

	return (
		<SidebarContainer>
			<Current />
		</SidebarContainer>
	);
}

export default SidebarSecondary;
