import React, { createContext, useReducer } from "react";
import { ShortestPathResult } from "../algorithm";
import { Graph, GraphNode, GraphEdge } from "../index";
import { GraphAction } from "./graphActions";
import { graphReducer } from "./graphReducer";

/**
 * Store graph state
 */
export type GraphState = {
	graph: Graph;
	current?: GraphNode | GraphEdge;
	snap: number;
	shortestPath?: ShortestPathResult;
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

	const initialState = {
		graph,
		snap: 50,
	};

	const [state, dispatch] = useReducer(graphReducer, initialState);
	const value = { state, dispatch };

	return (
		<GraphContext.Provider value={value}>{children}</GraphContext.Provider>
	);
}
