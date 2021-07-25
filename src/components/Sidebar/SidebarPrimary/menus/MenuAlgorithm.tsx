import React from "react";
import SidebarMenu from "../../SidebarMenu/SidebarMenu";
// import styles from "../SidebarPrimary.module.scss";
import sidebarStyles from "../../Sidebar.module.scss";
import { useContext } from "react";
import { GraphContext } from "../../../../graph/context/graphContext";
import { findShortestPath } from "../../../../graph/context/graphActions";

function MenuAlgorithm() {
	const { dispatch } = useContext(GraphContext);

	const onStartAlgorithm = () => {
		findShortestPath(dispatch);
	};

	return (
		<SidebarMenu title='Shortest Path'>
			<div className={sidebarStyles.form}>
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
