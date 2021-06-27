import { ActionType, AppAction } from "./_AppAction.type";
import { AppState } from "./_AppState.type";

export function reducer(state: AppState, action: AppAction) {
	switch (action.type) {
		case ActionType.addNode:
			return state;
		case ActionType.addEdge:
			return state;
		default:
			return state;
	}
}
