import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { GraphEdge, GraphNode } from "../../../graph";
import { addEdge } from "../../../graph/context/graphActions";
import { GraphContext } from "../../../graph/context/graphContext";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import styles from "./SidebarPrimary.module.scss";

type SelectNodeProps = {
	nodeRef: React.MutableRefObject<GraphNode | undefined>;
	current: GraphNode | undefined;
};

/**
 * Handle selecting nodes from graph
 */
const SelectNode = React.memo(({ nodeRef, current }: SelectNodeProps) => {
	const selectNodeDivRef = useRef<HTMLDivElement>(null!);

	const [active, setActive] = useState(false);

	const [node, setNode] = useState<GraphNode>();

	// Select current node
	useEffect(() => {
		if (!active) return;

		if (current instanceof GraphNode) {
			setNode(current);
		}
	}, [current, active]); // I would prefer to not have "active" as a dependency here

	// Update node ref
	useEffect(() => {
		nodeRef.current = node;
	}, [node, nodeRef]);

	// Toggle active states on focus and blur
	function handleOnFocus(event: React.FocusEvent) {
		setActive(true);
	}
	function handleOnBlur(event: React.FocusEvent) {
		setActive(false);
	}

	const DisplayName = () => {
		if (!node) return null;
		return (
			<span>
				{node.id} - {node.name}
			</span>
		);
	};

	return (
		<div
			ref={selectNodeDivRef}
			onFocus={handleOnFocus}
			onBlur={handleOnBlur}
			className={styles.selectNode}
			tabIndex={0}>
			<DisplayName />
		</div>
	);
});

function MenuCreateEdge() {
	const { state, dispatch } = useContext(GraphContext);

	// Reference selected nodes
	const fromNodeRef = useRef<GraphNode>();
	const toNodeRef = useRef<GraphNode>();

	/**
	 * Create new Edge and add it to graph
	 */
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
			<form onSubmit={handleCreateEdge}>
				<label className={styles.entryLabel}>From</label>
				<SelectNode
					nodeRef={fromNodeRef}
					current={state.current as GraphNode}
				/>
				<label className={styles.entryLabel}>To</label>
				<SelectNode
					nodeRef={toNodeRef}
					current={state.current as GraphNode}
				/>
				<label className={styles.entryLabel}>Weight</label>
				<input
					type='number'
					name='weight'
					placeholder='0'
					min={0}
					maxLength={24}
				/>
				<button>Add Edge</button>
			</form>
		</SidebarMenu>
	);
}

export default MenuCreateEdge;
