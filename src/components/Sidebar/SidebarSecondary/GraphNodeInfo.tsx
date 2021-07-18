import React, { FormEvent } from "react";
import { GraphNode } from "../../../graph";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import sidebarStyles from "../Sidebar.module.scss";
import styles from "./SidebarSecondary.module.scss";
import {
	editNodeID,
	editNodeName,
	moveNode,
} from "../../../graph/context/graphActions";
import { useContext } from "react";
import { GraphContext } from "../../../graph/context/graphContext";

const GraphNodeInfo = React.memo(({ node }: { node: GraphNode }) => {
	const EditName = () => {
		const { state, dispatch } = useContext(GraphContext);
		const node = state.current as GraphNode;

		function handleChange(event: FormEvent<HTMLInputElement>) {
			editNodeName(dispatch, node, event.currentTarget.value);
		}

		return (
			<>
				<label className={sidebarStyles.formLabel}>Name</label>
				<input
					className={sidebarStyles.formInput}
					type='text'
					name='name'
					defaultValue={node.name}
					onChange={handleChange}
				/>
			</>
		);
	};

	const EditID = () => {
		const { state, dispatch } = useContext(GraphContext);
		const node = state.current as GraphNode;

		function handleChange(event: FormEvent<HTMLInputElement>) {
			editNodeID(dispatch, node, event.currentTarget.value);
		}

		return (
			<>
				<label className={sidebarStyles.formLabel}>ID</label>
				<input
					className={sidebarStyles.formInput}
					type='text'
					name='ID'
					defaultValue={node.id}
					maxLength={3}
					onChange={handleChange}
				/>
			</>
		);
	};

	const EditPosition = () => {
		const { state, dispatch } = useContext(GraphContext);
		const node = state.current as GraphNode;

		// Move Node to new position on change input
		function handlePositionInput(event: React.FormEvent<HTMLInputElement>) {
			const position = node.position;
			const axis = event.currentTarget.name as "x" | "y";
			position[axis] = parseInt(event.currentTarget.value);
			moveNode(dispatch, node, position);
		}

		return (
			<>
				<label className={sidebarStyles.formLabel}>Position</label>
				<div className={styles.editPosition}>
					<label>X:</label>
					<input
						className={sidebarStyles.formInput}
						type='number'
						step={10}
						name='x'
						onChange={handlePositionInput}
						value={node.position.x}
					/>
					<label>Y:</label>
					<input
						className={sidebarStyles.formInput}
						type='number'
						step={10}
						name='y'
						onChange={handlePositionInput}
						value={node.position.y}
					/>
				</div>
			</>
		);
	};

	return (
		<SidebarMenu title='Edit Node'>
			<div className={sidebarStyles.form}>
				<EditName />
				<EditID />
				<EditPosition />
			</div>
		</SidebarMenu>
	);
});

export default GraphNodeInfo;
