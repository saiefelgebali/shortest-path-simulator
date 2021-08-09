import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GraphNode } from "../../../../graph";
import styles from "../SidebarPrimary.module.scss";
import sidebarStyles from "../../Sidebar.module.scss";

type SelectNodeProps = {
	nodeRef: React.MutableRefObject<GraphNode | undefined>;
	current: GraphNode | undefined;
};

/**
 * Handle selecting nodes from graph
 */
export const SelectNode = React.memo(
	({ nodeRef, current }: SelectNodeProps) => {
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
				className={`${sidebarStyles.formInput} ${styles.selectNode}`}
				tabIndex={0}>
				<DisplayName />
			</div>
		);
	}
);
