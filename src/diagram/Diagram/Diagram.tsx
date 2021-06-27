import DiagramNode from "../DiagramNode/DiagramNode";
import { DiagramGrid } from "../DiagramGrid/DiagramGrid";
import styles from "./Diagram.module.scss";
import { Graph } from "../../algorithm/Graph";

type DiagramProps = {
	graph: Graph;
};

function Diagram({ graph }: DiagramProps) {
	const Nodes = () => (
		<>
			{graph.nodes.map((node, index) => (
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

export default Diagram;
