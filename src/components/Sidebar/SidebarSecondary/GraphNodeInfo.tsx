import React, { FormEvent } from "react";
import { GraphNode } from "../../../graph";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import sidebarStyles from "../Sidebar.module.scss";
import styles from "./SidebarSecondary.module.scss";
import {
	editNodeID,
	editNodeName,
	moveNode,
	removeNode,
} from "../../../graph/context/graphNodeActions";
import { useContext } from "react";
import { GraphContext } from "../../../graph/context/graphContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deselect } from "../../../graph/context/graphActions";

const GraphNodeInfo = React.memo(({ node }: { node: GraphNode }) => {
	const EditName = () => {
		const { dispatch } = useContext(GraphContext);

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
		const { dispatch } = useContext(GraphContext);

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
		const { dispatch } = useContext(GraphContext);

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

	const DeleteNode = () => {
		const { dispatch } = useContext(GraphContext);

		function handleDeleteNode() {
			removeNode(dispatch, node);
			deselect(dispatch);
		}

		return (
			<button className={styles.deleteButton} onClick={handleDeleteNode}>
				<FontAwesomeIcon icon={faTrash} />
				<span>Delete Node</span>
			</button>
		);
	};

	return (
		<SidebarMenu title='Edit Node'>
			<div className={sidebarStyles.form}>
				<EditName />
				<EditID />
				<EditPosition />
				<DeleteNode />
			</div>
		</SidebarMenu>
	);
});

export default GraphNodeInfo;
