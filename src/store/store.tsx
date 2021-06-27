import { useReducer } from "react";
import { createContext } from "react";
import { Graph } from "../algorithm/Graph";
import { reducer } from "./reducer";

export const Store = createContext({});

type StoreProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export function StoreProvider({ children }: StoreProviderProps) {
	const initialState = {
		graph: new Graph(),
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };

	return <Store.Provider value={value}>{children}</Store.Provider>;
}
