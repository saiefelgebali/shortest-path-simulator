import { Grid } from "../Grid/Grid";
import styles from "./Diagram.module.scss";

function Diagram() {
	return (
		<svg className={styles.diagram}>
			<Grid />
		</svg>
	);
}

export default Diagram;
