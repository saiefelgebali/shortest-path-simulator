import React, { FormEvent } from "react";
import SidebarMenu from "../../SidebarMenu/SidebarMenu";
import sidebarStyles from "../../Sidebar.module.scss";
import { useContext } from "react";
import { GraphContext } from "../../../../graph/context/graphContext";
import { changeSnap } from "../../../../graph/context/graphActions";

function MenuMoveNode() {
	const { state, dispatch } = useContext(GraphContext);

	/**
	 * Change context snap value based on input.
	 * Min value always at 1.
	 */
	function onChangeSnap(event: FormEvent<HTMLInputElement>) {
		let newSnap = event.currentTarget.valueAsNumber;
		if (newSnap <= 1 || !newSnap) {
			newSnap = 1;
			changeSnap(dispatch, newSnap);
		} else {
			changeSnap(dispatch, newSnap);
		}
		event.currentTarget.valueAsNumber = newSnap;
	}

	return (
		<SidebarMenu title='Move Node'>
			<div className={sidebarStyles.form}>
				<label className={sidebarStyles.formLabel}>Snap to grid</label>
				<input
					className={sidebarStyles.formInput}
					type='number'
					name='snap'
					defaultValue={state.snap}
					min={0}
					step={10}
					onBlur={onChangeSnap}
				/>
				<div>Click and drag nodes to rearrange them!</div>
			</div>
		</SidebarMenu>
	);
}

export default MenuMoveNode;
