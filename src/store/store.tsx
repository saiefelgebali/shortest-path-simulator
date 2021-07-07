import { createContext, useReducer } from "react";
import { Graph } from "../graph/Graph";
import { AppState } from "./_AppState.type";
import { reducer } from "./reducer";
import { GraphNode } from "../graph/GraphNode";
import React from "react";
import { AppAction } from "./_AppAction.type";
import { GraphEdge } from "../graph/GraphEdge";

type StoreInterface = {
	state: AppState;
	dispatch: React.Dispatch<AppAction>;
};

export const Store = createContext<StoreInterface>(null!);

type StoreProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export function StoreProvider({ children }: StoreProviderProps) {
	const graph = new Graph();

	const n1 = new GraphNode("Cambridge", "CB");
	graph.addNode(n1);

	const n2 = new GraphNode("London", "LDN");
	graph.addNode(n2);

	const n3 = new GraphNode("King's Lynn", "KLN");
	graph.addNode(n3);

	graph.addEdge(new GraphEdge(n1, n2, 20));
	graph.addEdge(new GraphEdge(n1, n3, 20));
	graph.addEdge(new GraphEdge(n2, n3, 20));

	graph.findShortestPath(n1, n2);

	const initialState: AppState = {
		graph,
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };

	return <Store.Provider value={value}>{children}</Store.Provider>;
}
