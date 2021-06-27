import React from "react";
import styles from "./SidebarMenuSwitcher.module.scss";

type SidebarMenuSwitcherOptionProps = {
	menu: string;
	currentMenu: string;
	title: string;
	setMenu: React.Dispatch<React.SetStateAction<any>>;
};

function SidebarMenuSwitcherOption({
	menu,
	currentMenu,
	title,
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
			{title}
		</div>
	);
}

export default SidebarMenuSwitcherOption;
