import React, { useEffect, useState } from "react";
import { useCallback } from "react";

type DiagramDragMoveProps = {
	children: JSX.Element | JSX.Element[];
	snap: number;
	onPointerDown?: (event: React.PointerEvent) => void;
	onPointerUp?: (event: PointerEvent) => void;
	onPointerMove?: (event: PointerEvent) => void;
	onDragMove: (
		event: PointerEvent,
		initialPosition?: { x: number; y: number },
		snapToGrid?: Function
	) => void;
};

/**
 * Wrapper component for movable elements
 */
function DiagramDragMove(props: DiagramDragMoveProps) {
	const {
		children,
		snap,
		onPointerDown,
		onPointerUp,
		onPointerMove,
		onDragMove,
	} = props;

	const [isDragging, setIsDragging] = useState(false);
	const [initialPosition, setInitialPosition] = useState({
		x: 0,
		y: 0,
	});

	// Fired when pointer down on draggable element
	function handlePointerDown(event: React.PointerEvent) {
		setIsDragging(true);
		setInitialPosition({ x: event.pageX, y: event.pageY });

		onPointerDown && onPointerDown(event);
	}

	// Fired when pointer up on window
	const handlePointerUp = useCallback(
		(event: PointerEvent) => {
			if (!isDragging) return;
			setIsDragging(false);

			onPointerUp && onPointerUp(event);
		},
		[onPointerUp, setIsDragging, isDragging]
	);

	// Fired when pointer moving on window
	const handlePointerMove = useCallback(
		(event: PointerEvent) => {
			// Keep element snapped to grid
			function snapToGrid(position: { x: number; y: number }) {
				const x = Math.round(position.x / snap) * snap;
				const y = Math.round(position.y / snap) * snap;

				return { x, y };
			}

			if (isDragging) onDragMove(event, initialPosition, snapToGrid);

			onPointerMove && onPointerMove(event);
		},
		[isDragging, initialPosition, snap, onDragMove, onPointerMove]
	);

	// Register window event handlers
	useEffect(() => {
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointermove", handlePointerMove);

		return () => {
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointermove", handlePointerMove);
		};
	}, [handlePointerUp, handlePointerMove]);

	return <g onPointerDown={handlePointerDown}>{children}</g>;
}

export default DiagramDragMove;
