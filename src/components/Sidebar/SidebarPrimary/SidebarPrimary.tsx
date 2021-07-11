import React, { useState } from "react";
import { faArrowsAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import SidebarMenuSwitcher from "../SidebarMenu/SidebarMenuSwitcher";
import SidebarMenuSwitcherOption from "../SidebarMenu/SidebarMenuSwitcherOption";
import MenuCreateEdge from "./menus/MenuCreateEdge";
import MenuCreateNode from "./menus/MenuCreateNode";
import styles from "./SidebarPrimary.module.scss";
import MenuMoveNode from "./menus/MenuMoveNode";

enum Menu {
	create = "CREATE",
	move = "MOVE",
}

/**
 * Give user options to add items to the graph
 */
function SidebarPrimary() {
	// Current menu state
	const [menu, setMenu] = useState<Menu>(Menu.create);

	const CreateMenu = () => (
		<div className={styles.menuList}>
			<MenuCreateNode />
			<MenuCreateEdge />
		</div>
	);

	const MoveMenu = () => (
		<div className={styles.menuList}>
			<MenuMoveNode />
		</div>
	);

	/**
	 * Show currently selected menu
	 */
	const CurrentMenu = () => {
		switch (menu) {
			case Menu.create:
				return <CreateMenu />;
			case Menu.move:
				return <MoveMenu />;
		}
	};

	return (
		<SidebarContainer>
			<SidebarMenuSwitcher>
				<SidebarMenuSwitcherOption
					menu={Menu.create}
					currentMenu={menu}
					icon={faPlus}
					setMenu={setMenu}
				/>
				<SidebarMenuSwitcherOption
					menu={Menu.move}
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
