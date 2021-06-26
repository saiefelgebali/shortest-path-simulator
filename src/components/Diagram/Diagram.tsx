import DiagramNode from "../DiagramNode/DiagramNode";
import { Grid } from "../Grid/Grid";
import styles from "./Diagram.module.scss";

function Diagram() {
	return (
		<svg className={styles.diagram}>
			<Grid />
			<DiagramNode x={200} y={200} r={30} />
		</svg>
	);
}

export default Diagram;
