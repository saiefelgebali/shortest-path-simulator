import DiagramNode from "../DiagramNode/DiagramNode";
import { DiagramGrid } from "../DiagramGrid/DiagramGrid";
import styles from "./Diagram.module.scss";

function Diagram() {
	return (
		<svg className={styles.diagram}>
			<DiagramGrid />
			<DiagramNode x={0} y={0} />
			<DiagramNode x={400} y={200} />
			<DiagramNode x={500} y={400} />
		</svg>
	);
}

export default Diagram;
