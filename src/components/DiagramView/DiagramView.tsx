import { useState, useEffect } from "react";
import DiagramContainer from "../../diagram/DiagramContainer/DiagramContainer";
import Diagram from "../../diagram/Diagram/Diagram";
import { Graph } from "../../algorithm/Graph";

function DiagramView() {
	// State of graph object
	const [graph, setGraph] = useState<Graph>();

	// Set up graph object
	useEffect(() => {
		setGraph(new Graph());
	}, []);

	// Use graph object in diagram
	const ApplicationDiagram = () => {
		if (!graph) return null;

		return <Diagram graph={graph} />;
	};

	return (
		<DiagramContainer>
			<ApplicationDiagram />
		</DiagramContainer>
	);
}

export default DiagramView;
