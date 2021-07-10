import React from "react";
import { useContext } from "react";
import { GraphNode } from "../../../../graph";
import { addNode } from "../../../../graph/context/graphActions";
import { GraphContext } from "../../../../graph/context/graphContext";
import SidebarMenu from "../../SidebarMenu/SidebarMenu";
import styles from "../SidebarPrimary.module.scss";
import sidebarStyles from "../../Sidebar.module.scss";

function MenuCreateNode() {
	const { dispatch } = useContext(GraphContext);

	function handleSubmitCreateNode(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// Get data
		const formData = new FormData(event.currentTarget);
		const name = formData.get("name") as string;
		const id = formData.get("id") as string;
		if (!name || !id) return;

		// Create node
		const node = new GraphNode(name, id);

		// Update graph
		addNode(dispatch, node);
		event.currentTarget.reset();
	}

	return (
		<SidebarMenu title='Create Node'>
			<form
				onSubmit={handleSubmitCreateNode}
				className={sidebarStyles.form}>
				<label className={sidebarStyles.formLabel}>Name</label>
				<input
					type='text'
					name='name'
					maxLength={24}
					placeholder='Room 1'
					className={sidebarStyles.formInput}
				/>
				<label className={sidebarStyles.formLabel}>ID</label>
				<input
					type='text'
					name='id'
					placeholder='RM1'
					maxLength={3}
					className={`${sidebarStyles.formInput} ${styles.idInput}`}
				/>
				<button className={sidebarStyles.formSubmit}>Add Node</button>
			</form>
		</SidebarMenu>
	);
}

export default MenuCreateNode;
