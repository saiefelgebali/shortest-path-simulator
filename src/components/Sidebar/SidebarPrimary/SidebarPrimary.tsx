import { useState } from "react";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SidebarMenuSwitcher from "../SidebarMenu/SidebarMenuSwitcher";
import SidebarMenuSwitcherOption from "../SidebarMenu/SidebarMenuSwitcherOption";
import styles from "./SidebarPrimary.module.scss";

enum Menu {
	createNode = "CREATE_NODE",
	createEdge = "CREATE_EDGE",
}

/**
 * Give user options to add items to the graph
 */
function SidebarPrimary() {
	const [menu, setMenu] = useState<Menu>(Menu.createNode);

	const CreateNodeMenu = () => (
		<SidebarMenu title='Create Node'>
			<form>
				<input type='text' placeholder='Name' maxLength={24} />
				<input
					type='text'
					placeholder='ID'
					maxLength={3}
					className={styles.idInput}
				/>
				<button>Add Node</button>
			</form>
		</SidebarMenu>
	);

	const CreateEdgeMenu = () => (
		<SidebarMenu title='Create Edge'>
			<form>
				<input type='number' placeholder='Weight' maxLength={24} />
				<button>Add Node</button>
			</form>
		</SidebarMenu>
	);

	/**
	 * Show currently selected menu
	 */
	const CurrentMenu = () => {
		switch (menu) {
			case Menu.createNode:
				return <CreateNodeMenu />;
			case Menu.createEdge:
				return <CreateEdgeMenu />;
		}
	};

	return (
		<SidebarContainer>
			<SidebarMenuSwitcher>
				<SidebarMenuSwitcherOption
					menu={Menu.createNode}
					currentMenu={menu}
					title='Add Node'
					setMenu={setMenu}
				/>
				<SidebarMenuSwitcherOption
					menu={Menu.createEdge}
					currentMenu={menu}
					title='Create Edge'
					setMenu={setMenu}
				/>
			</SidebarMenuSwitcher>
			<CurrentMenu />
		</SidebarContainer>
	);
}

export default SidebarPrimary;
