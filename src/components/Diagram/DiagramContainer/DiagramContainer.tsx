import { useRef } from "react";
import styles from "./DiagramContainer.module.scss";

type DiagramContainerProps = {
	children: JSX.Element | JSX.Element[];
};

/**
 * Contains diagram and SVG elements.
 * Enables panning the view using the middle mouse button
 */
function DiagramContainer({ children }: DiagramContainerProps) {
	const container = useRef<HTMLDivElement>(null!);

	/**
	 * Scroll container using mouse move events on window
	 */
	function handleMouseMove(event: MouseEvent): void {
		container.current?.scrollBy(-event.movementX, -event.movementY);
	}

	/**
	 * Revert to default state
	 */
	function handleMouseUp(): void {
		if (!container.current) return;
		container.current.style.cursor = "default";
		disableMoveDiagram();
	}

	/**
	 * Apply mousemove events on window
	 */
	function enableMoveDiagram() {
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	}

	/**
	 * Remove mousemove events on window
	 */
	function disableMoveDiagram() {
		window.removeEventListener("mousemove", handleMouseMove);
		window.removeEventListener("mouseup", handleMouseUp);
	}

	/**
	 * Apply move diagram operations using mouse events
	 */
	function handleMouseDown(event: React.MouseEvent<HTMLDivElement>): void {
		event.preventDefault();
		// Middle mouse click
		if (event.button === 1) {
			if (!container.current) return;
			container.current.style.cursor = "move";
			enableMoveDiagram();
		}
	}
	return (
		<div
			ref={container}
			className={styles.container}
			onMouseDown={handleMouseDown}>
			{children}
		</div>
	);
}

export default DiagramContainer;
