import React from "react";
import styles from "./SidebarMenu.module.scss";

type SidebarMenuSwitcherProps = {
	children?: JSX.Element[];
	menu: string;
	setMenu: React.Dispatch<React.SetStateAction<any>>;
};

function SidebarMenuSwitcher({ children }: SidebarMenuSwitcherProps) {
	return <div className={styles.sidebarMenuSwitcher}>{children}</div>;
}

export default SidebarMenuSwitcher;
