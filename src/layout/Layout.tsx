import React from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
	children?: JSX.Element | JSX.Element[];
};

/**
 * Top level lay out component.
 * Lays out sub layout components.
 * @param children
 */
function Layout({ children }: LayoutProps) {
	return <div className={styles.layout}>{children}</div>;
}

export default Layout;
