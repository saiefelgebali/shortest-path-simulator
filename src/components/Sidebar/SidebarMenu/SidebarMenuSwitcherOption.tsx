import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./SidebarMenuSwitcher.module.scss";

type SidebarMenuSwitcherOptionProps = {
	menu: string;
	currentMenu: string;
	icon: any;
	setMenu: React.Dispatch<React.SetStateAction<any>>;
};

function SidebarMenuSwitcherOption({
	menu,
	currentMenu,
	icon,
	setMenu,
}: SidebarMenuSwitcherOptionProps) {
	/**
	 * Fires on click option
	 */
	function onClick() {
		setMenu(menu);
	}

	/**
	 * Determine whether this option is currently selected
	 */
	const isActive = () => (menu === currentMenu ? styles.isActive : null);

	const className = `${styles.option} ${isActive()}`;

	return (
		<div className={className} onClick={onClick}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
}

export default SidebarMenuSwitcherOption;
