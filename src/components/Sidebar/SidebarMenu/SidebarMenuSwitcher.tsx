import React from "react";
import styles from "./SidebarMenuSwitcher.module.scss";

type SidebarMenuSwitcherProps = {
	children?: JSX.Element[];
};

function SidebarMenuSwitcher({ children }: SidebarMenuSwitcherProps) {
	return <div className={styles.sidebarMenuSwitcher}>{children}</div>;
}

export default SidebarMenuSwitcher;
