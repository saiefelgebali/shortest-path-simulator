import { createContext, useReducer } from "react";
import { Graph } from "../graph/Graph";
import { AppState } from "./_AppState.type";
import { reducer } from "./reducer";
import { GraphNode } from "../graph/GraphNode";
import React from "react";
import { AppAction } from "./_AppAction.type";

type StoreInterface = {
	state: AppState;
	dispatch: React.Dispatch<AppAction>;
};

export const Store = createContext<StoreInterface>(null!);

type StoreProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export function StoreProvider({ children }: StoreProviderProps) {
	const initialState: AppState = {
		graph: new Graph().addNode(new GraphNode("Cambridge", "CB")),
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };

	return <Store.Provider value={value}>{children}</Store.Provider>;
}
