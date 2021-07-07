import {
	faArrowsAlt,
	faLink,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext } from "react";
import { GraphNode } from "../../../graph/GraphNode";
import { addNode } from "../../../store/actions";
import { Store } from "../../../store/store";
import SidebarContainer from "../SidebarContainer/SidebarContainer";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SidebarMenuSwitcher from "../SidebarMenu/SidebarMenuSwitcher";
import SidebarMenuSwitcherOption from "../SidebarMenu/SidebarMenuSwitcherOption";
import styles from "./SidebarPrimary.module.scss";

enum Menu {
	createNode = "CREATE_NODE",
	createEdge = "CREATE_EDGE",
	moveNode = "MOVE_NODE",
}

/**
 * Give user options to add items to the graph
 */
function SidebarPrimary() {
	const { state, dispatch } = useContext(Store);

	// Current menu state
	const [menu, setMenu] = useState<Menu>(Menu.createNode);

	function handleSubmitCreateNode(event: React.FormEvent) {
		event.preventDefault();
		if (!state.graph) return;

		// @ts-ignore
		const name = event.currentTarget.name.value;
		// @ts-ignore
		const id = event.currentTarget.id.value;

		const node = new GraphNode(name, id);

		// Update graph
		addNode(dispatch, node);
	}

	const CreateNodeMenu = () => (
		<SidebarMenu title='Create Node'>
			<form onSubmit={handleSubmitCreateNode}>
				<input
					type='text'
					name='name'
					maxLength={24}
					placeholder='Name'
				/>
				<input
					type='text'
					name='id'
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
				return <CreateNodeMenu />;
			case Menu.createEdge:
				return <CreateEdgeMenu />;
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
