import { View, Element } from "@saiefelgebali/react-diagrams";
import { stat } from "fs";
import { useContext } from "react";
import { Store } from "../../../store/store";
import DiagramEdge from "../DiagramEdge/DiagramEdge";
import DiagramNode from "../DiagramNode/DiagramNode";
import styles from "./Diagram.module.scss";

function Diagram() {
	const { state } = useContext(Store);

	const radius = 50;

	const Nodes = () =>
		state.graph.nodes.map((node, index) => (
			<DiagramNode node={node} radius={radius} key={index} />
		));

	const Edges = () =>
		state.graph.edges.map((edge, index) => (
			<DiagramEdge edge={edge} radius={radius} key={index} />
		));

	return (
		<View className={styles.view}>
			{Edges()}
			{Nodes()}
		</View>
	);
}

export default Diagram;
