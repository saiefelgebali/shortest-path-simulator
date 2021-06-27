import styles from "./SidebarContainer.module.scss";

type SidebarContainerProps = {
	children?: JSX.Element | JSX.Element[];
};

function SidebarContainer({ children }: SidebarContainerProps) {
	return <div className={styles.container}>{children}</div>;
}

export default SidebarContainer;
