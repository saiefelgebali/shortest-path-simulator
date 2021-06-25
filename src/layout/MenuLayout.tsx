import React from "react";
import styles from "./Layout.module.scss";

type MenuProps = {
	children?: JSX.Element | JSX.Element[];
};

/**
 * Lays out menu components by row
 * @param children
 */
function MenuLayout({ children }: MenuProps) {
	return <div className={styles.menuLayout}>{children}</div>;
}

export default MenuLayout;
