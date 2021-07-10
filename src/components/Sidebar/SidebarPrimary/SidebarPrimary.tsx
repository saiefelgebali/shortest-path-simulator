import {
	faArrowsAlt,
	faLink,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SidebarMenuSwitcher from "../SidebarMenu/SidebarMenuSwitcher";
import SidebarMenuSwitcherOption from "../SidebarMenu/SidebarMenuSwitcherOption";
import MenuCreateEdge from "./MenuCreateEdge";
import MenuCreateNode from "./MenuCreateNode";

enum Menu {
	createNode = "CREATE_NODE",
	createEdge = "CREATE_EDGE",
	moveNode = "MOVE_NODE",
}

/**
 * Give user options to add items to the graph
 */
function SidebarPrimary() {
	// Current menu state
	const [menu, setMenu] = useState<Menu>(Menu.createNode);

	const MoveNodeMenu = () => {
		return (
			<SidebarMenu title='Move Node'>
				<form>
					<label htmlFor='snap'>Snap to grid</label>
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
	};

	/**
	 * Show currently selected menu
	 */
	const CurrentMenu = () => {
		switch (menu) {
			case Menu.createNode:
				return <MenuCreateNode />;
			case Menu.createEdge:
				return <MenuCreateEdge />;
			case Menu.moveNode:
				return <MoveNodeMenu />;
		}
	};

	return (
		<SidebarContainer>
			<SidebarMenuSwitcher>
				<SidebarMenuSwitcherOption
					menu={Menu.createNode}
					currentMenu={menu}
					icon={faMapMarkerAlt}
					setMenu={setMenu}
				/>
				<SidebarMenuSwitcherOption
					menu={Menu.createEdge}
					currentMenu={menu}
					icon={faLink}
					setMenu={setMenu}
				/>
				<SidebarMenuSwitcherOption
					menu={Menu.moveNode}
					currentMenu={menu}
					icon={faArrowsAlt}
					setMenu={setMenu}
				/>
			</SidebarMenuSwitcher>
			<CurrentMenu />
		</SidebarContainer>
	);
}

export default SidebarPrimary;
