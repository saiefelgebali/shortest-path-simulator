import React, { useState } from "react";
import {
	faArrowsAlt,
	faMapMarked,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import SidebarMenuSwitcher from "../SidebarMenu/SidebarMenuSwitcher";
import SidebarMenuSwitcherOption from "../SidebarMenu/SidebarMenuSwitcherOption";
import MenuCreateEdge from "./menus/MenuCreateEdge";
import MenuCreateNode from "./menus/MenuCreateNode";
import styles from "./SidebarPrimary.module.scss";
import MenuMoveNode from "./menus/MenuMoveNode";
import MenuAlgorithm from "./menus/MenuAlgorithm";

enum Menu {
	create = "CREATE",
	move = "MOVE",
	algorithm = "ALGORITHM",
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

	/**
	 * Show currently selected menu
	 */
	const CurrentMenu = () => {
		switch (menu) {
			case Menu.create:
				return <CreateMenu />;
			case Menu.move:
				return <MenuMoveNode />;
			case Menu.algorithm:
				return <MenuAlgorithm />;
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
				<SidebarMenuSwitcherOption
					menu={Menu.algorithm}
					currentMenu={menu}
					icon={faMapMarked}
					setMenu={setMenu}
				/>
			</SidebarMenuSwitcher>
			<CurrentMenu />
		</SidebarContainer>
	);
}

export default SidebarPrimary;
