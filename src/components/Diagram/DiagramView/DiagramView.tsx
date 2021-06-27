import DiagramNode from "../DiagramNode/DiagramNode";
import { DiagramGrid } from "../DiagramGrid/DiagramGrid";
import styles from "./DiagramView.module.scss";
import { useContext } from "react";
import { Store } from "../../../store/store";

function DiagramView() {
	const { state } = useContext(Store);

	const Nodes = () => (
		<>
			{state.graph.nodes.map((node, index) => (
				<DiagramNode node={node} key={index} />
			))}
		</>
	);

	return (
		<svg className={styles.diagram}>
			<DiagramGrid />
			<Nodes />
		</svg>
	);
}

export default DiagramView;
