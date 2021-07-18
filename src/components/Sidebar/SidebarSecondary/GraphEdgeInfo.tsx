import React from "react";
import { GraphEdge } from "../../../graph";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import styles from "./SidebarSecondary.module.scss";
import sidebarStyles from "../Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deselect, removeEdge } from "../../../graph/context/graphActions";
import { useContext } from "react";
import { GraphContext } from "../../../graph/context/graphContext";

const GraphEdgeInfo = React.memo(({ edge }: { edge: GraphEdge }) => {
	const EdgeNodes = () => {
		return (
			<>
				<label className={sidebarStyles.formLabel}>From</label>
				<div>
					{edge.fromNode.id} - {edge.fromNode.name}
				</div>
				<label className={sidebarStyles.formLabel}>To</label>
				<div>
					{edge.toNode.id} - {edge.toNode.name}
				</div>
			</>
		);
	};

	const EdgeWeight = () => {
		return (
			<>
				<label className={sidebarStyles.formLabel}>Weight</label>
				<input
					className={sidebarStyles.formInput}
					type='number'
					name='weight'
					value={edge.weight}
				/>
			</>
		);
	};

	const DeleteEdge = () => {
		const { dispatch } = useContext(GraphContext);

		function handleDeleteEdge() {
			removeEdge(dispatch, edge);
			deselect(dispatch);
		}

		return (
			<button className={styles.deleteButton} onClick={handleDeleteEdge}>
				<FontAwesomeIcon icon={faTrash} />
				<span>Delete Edge</span>
			</button>
		);
	};

	return (
		<SidebarMenu title='Edit Edge'>
			<div className={sidebarStyles.form}>
				<EdgeNodes />
				<EdgeWeight />
				<DeleteEdge />
			</div>
		</SidebarMenu>
	);
});

export default GraphEdgeInfo;
