import { useState } from "react";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SidebarMenuSwitcher from "../SidebarMenu/SidebarMenuSwitcher";
import SidebarMenuOption from "../SidebarMenu/SidebarMenuOption";
import styles from "./SidebarPrimary.module.scss";

enum Menu {
	createNode = "CREATE_NODE",
	createEdge = "CREATE_EDGE",
}

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
			<SidebarMenuSwitcher menu={menu} setMenu={setMenu}>
				<SidebarMenuOption
					menu={Menu.createNode}
					currentMenu={menu}
					title='Create Node'
					setMenu={setMenu}
				/>
				<SidebarMenuOption
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
