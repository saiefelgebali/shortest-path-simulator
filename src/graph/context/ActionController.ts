export class Action {
	execute: Function;
	undo: Function;

	constructor(execute: Function, undo: Function) {
		this.execute = execute;
		this.undo = undo;
	}
}

class ActionController {
	actionStack: Action[] = [];
	undoStack: Action[] = [];

	/**
	 * Add an action to the top of the actionStack
	 * @param execute - Function to apply action
	 * @param undo    - Function to revert action
	 */
	addAction(execute: Function, undo: Function) {
		const action = new Action(execute, undo);
		this.actionStack.push(action);
		action.execute();
	}

	/**
	 * Revert latest change made, and add change to undoStack
	 */
	undo() {
		// Get latest action
		const latestAction = this.actionStack[this.actionStack.length - 1];

		if (!latestAction) return;

		// Undo action
		latestAction.undo();
		this.actionStack.pop();
		this.undoStack.push(latestAction);
	}

	redo() {
		// Get latest undone action
		const latestUndoneAction = this.undoStack[this.undoStack.length - 1];

		if (!latestUndoneAction) return;

		// Execute action
		latestUndoneAction.execute();
		this.undoStack.pop();
		this.actionStack.push(latestUndoneAction);
	}
}

export default new ActionController();
