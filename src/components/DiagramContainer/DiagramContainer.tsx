import styles from "./DiagramContainer.module.scss";

type DiagramContainerProps = {
	children: JSX.Element | JSX.Element[];
};

function DiagramContainer({ children }: DiagramContainerProps) {
	return <div className={styles.container}>{children}</div>;
}

export default DiagramContainer;
