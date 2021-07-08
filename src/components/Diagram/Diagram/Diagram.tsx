import { View } from "@saiefelgebali/react-diagrams";
import { useContext } from "react";
import { Store } from "../../../store/store";
import DiagramEdge from "../DiagramEdge/DiagramEdge";
import DiagramNode from "../DiagramNode/DiagramNode";
import styles from "./Diagram.module.scss";

function Diagram() {
	const { state } = useContext(Store);

	const Nodes = () =>
		state.graph.nodes.map((node, index) => (
			<DiagramNode node={node} key={index} />
		));

	const Edges = () =>
		state.graph.edges.map((edge, index) => (
			<DiagramEdge edge={edge} key={index} />
		));

	return (
		<View className={styles.view}>
			{Edges()}
			{Nodes()}
		</View>
	);
}

export default Diagram;
