import React from "react";
import SidebarMenu from "../../SidebarMenu/SidebarMenu";
import sidebarStyles from "../../Sidebar.module.scss";

function MenuMoveNode() {
	return (
		<SidebarMenu title='Move Node'>
			<form className={sidebarStyles.form}>
				<label className={sidebarStyles.formLabel}>Snap to grid</label>
				<input
					type='range'
					name='snap'
					min={0}
					max={200}
					step={5}
					list='snapRangeList'
				/>
				<datalist id='snapRangeList'>
					<option value={0}></option>
					<option value={50}></option>
					<option value={100}></option>
					<option value={150} label='150'></option>
					<option value={200}></option>
				</datalist>
				<div>Click and drag nodes to rearrange them!</div>
			</form>
		</SidebarMenu>
	);
}

export default MenuMoveNode;
