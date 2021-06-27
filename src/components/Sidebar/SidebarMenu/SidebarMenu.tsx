import styles from "./SidebarMenu.module.scss";

type SidebarMenuProps = {
	children?: JSX.Element | JSX.Element[];
	title: string;
};

function SidebarMenu({ children, title }: SidebarMenuProps) {
	/**
	 * Return title element if title prop is passed
	 */
	const Title = () => {
		if (!title) return null;
		return <div className={styles.menuTitle}>{title}</div>;
	};

	return (
		<div className={styles.sidebarMenu}>
			<Title />
			{children}
		</div>
	);
}

export default SidebarMenu;
