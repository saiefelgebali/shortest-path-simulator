import React, { useEffect, useState } from "react";
import { useCallback } from "react";

type DiagramDragMoveProps = {
	children: JSX.Element | JSX.Element[];
	onPointerDown?: (event: React.PointerEvent) => void;
	onPointerUp?: (event: PointerEvent) => void;
	onPointerMove?: (event: React.PointerEvent) => void;
	onDragMove: (event: React.PointerEvent) => void;
};

/**
 * Wrapper component for movable elements
 */
function DiagramDragMove(props: DiagramDragMoveProps) {
	const { children, onPointerDown, onPointerUp, onPointerMove, onDragMove } =
		props;

	const [isDragging, setIsDragging] = useState(false);

	// Fired when pointer down on draggable element
	function handlePointerDown(event: React.PointerEvent) {
		setIsDragging(true);

		onPointerDown && onPointerDown(event);
	}

	// Fired when pointer up on window
	const handlePointerUp = useCallback(
		(event: PointerEvent) => {
			if (!isDragging) return;
			setIsDragging(false);

			onPointerUp && onPointerUp(event);
		},
		[onPointerUp]
	);

	// Fired when pointer moving on window
	function handlePointerMove(event: React.PointerEvent) {
		if (isDragging) onDragMove(event);

		onPointerMove && onPointerMove(event);
	}

	// Register window event handlers
	useEffect(() => {
		window.addEventListener("pointerup", handlePointerUp);

		return () => {
			window.removeEventListener("pointerup", handlePointerUp);
		};
	}, [handlePointerUp]);

	return (
		<g onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}>
			{children}
		</g>
	);
}

export default DiagramDragMove;
