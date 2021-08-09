import { View } from "@saiefelgebali/react-diagrams";
import { useContext } from "react";
import { GraphContext } from "../../../graph/context/graphContext";
import DiagramEdge from "../DiagramEdge/DiagramEdge";
import DiagramNode from "../DiagramNode/DiagramNode";
import styles from "./Diagram.module.scss";

function Diagram() {
	const { state } = useContext(GraphContext);

	const Nodes = () =>
		state.graph.nodes.map((node, index) => (
			<DiagramNode node={node} key={index} />
		));

	const Edges = () => {
		return state.graph.edges.map((edge, index) => (
			<DiagramEdge
				edge={edge}
				path={state.shortestPath?.path.includes(edge)}
				key={index}
			/>
		));
	};

	return (
		<View className={styles.view}>
			{Edges()}
			{Nodes()}
		</View>
	);
}

export default Diagram;
