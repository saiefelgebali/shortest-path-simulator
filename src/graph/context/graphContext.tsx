import React, { createContext, useReducer } from "react";
import { Graph, GraphNode, GraphEdge } from "../index";
import { GraphAction } from "./graphActions";
import { graphReducer } from "./graphReducer";

/**
 * Store graph state
 */
export type GraphState = {
	graph: Graph;
};

interface IGraphContext {
	state: GraphState;
	dispatch: React.Dispatch<GraphAction>;
}

export const GraphContext = createContext<IGraphContext>(null!);

/**
 * Provider for context API
 */
type GraphContextProviderProps = {
	children: React.ReactNode;
};

export function GraphContextProvider({ children }: GraphContextProviderProps) {
	const graph = new Graph();

	const n1 = new GraphNode("CAMBRIDGE", "1");
	const n2 = new GraphNode("LONDON", "2");
	const n3 = new GraphNode("KINGS LYNN", "3");
	const n4 = new GraphNode("ELY", "4");
	const n5 = new GraphNode("WATLINGTON", "5");

	const e1 = new GraphEdge(n1, n2, 20);
	const e2 = new GraphEdge(n1, n3, 20);
	const e3 = new GraphEdge(n2, n4, 20);
	const e4 = new GraphEdge(n3, n5, 20);
	const e5 = new GraphEdge(n4, n5, 20);

	graph.addNode(n1);
	graph.addNode(n2);
	graph.addNode(n3);
	graph.addNode(n4);
	graph.addNode(n5);

	graph.addEdge(e1);
	graph.addEdge(e2);
	graph.addEdge(e3);
	graph.addEdge(e4);
	graph.addEdge(e5);

	const initialState = {
		graph,
	};

	const [state, dispatch] = useReducer(graphReducer, initialState);
	const value = { state, dispatch };

	return (
		<GraphContext.Provider value={value}>{children}</GraphContext.Provider>
	);
}
