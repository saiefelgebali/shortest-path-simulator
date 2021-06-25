import React from "react";
import styles from "./Layout.module.scss";

type UserLayoutProps = {
	children?: JSX.Element | JSX.Element[];
};

/**
 * Lays our main user interface for interaction with app
 * @param children
 */
function UserLayout({ children }: UserLayoutProps) {
	return <div className={styles.userLayout}>{children}</div>;
}

export default UserLayout;
