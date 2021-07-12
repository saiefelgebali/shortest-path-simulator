import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { findShortestPath } from "../algorithm";
import { Graph, GraphNode, GraphEdge } from "../index";
import ActionController from "./ActionController";
import { GraphAction } from "./graphActions";
import { graphReducer } from "./graphReducer";

/**
 * Store graph state
 */
export type GraphState = {
	graph: Graph;
	current?: GraphNode | GraphEdge;
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
				const result = graph.findShortestPath(
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
	};

	const [state, dispatch] = useReducer(graphReducer, initialState);
	const value = { state, dispatch };

	return (
		<GraphContext.Provider value={value}>{children}</GraphContext.Provider>
	);
}
