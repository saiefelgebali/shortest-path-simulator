import React, { useEffect, createContext, useReducer } from "react";
import { findShortestPath, ShortestPathResult } from "../algorithm";
import { Graph, GraphNode, GraphEdge } from "../index";
import { GraphAction } from "./graphActions";
import { graphReducer } from "./graphReducer";
import ActionController from "./ActionController";

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
	useEffect(() => {
		window.addEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				const result = findShortestPath(
					graph,
					graph.nodes[0],
					graph.nodes[graph.nodes.length - 1]
				);
				console.log(result);
			}

			if (!(event.key === "z" && event.ctrlKey)) return;
			ActionController.undo();
		});
	}, []);

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
