import React, { SyntheticEvent, useState } from "react";
import { Grid } from "../Grid/Grid";
import styles from "./Diagram.module.scss";

function Diagram() {
	const [container, setContainer] = useState<HTMLElement | null>();

	/**
	 * Scroll container using mouse move events on window
	 */
	function handleMouseMove(event: MouseEvent): void {
		container?.scrollBy(-event.movementX, -event.movementY);
	}

	/**
	 * Revert to default state
	 */
	function handleMouseUp(): void {
		if (!container) return;
		container.style.cursor = "default";
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
	 * Save diagramContainer on load in DOM
	 */
	function handleLoad(event: SyntheticEvent<SVGSVGElement>) {
		setContainer(event.currentTarget.parentElement);
	}

	/**
	 * Apply move diagram operations using mouse events
	 */
	function handleMouseDown(event: React.MouseEvent<SVGSVGElement>): void {
		event.preventDefault();
		// Middle mouse click
		if (event.button === 1) {
			if (!container) return;
			container.style.cursor = "move";
			enableMoveDiagram();
		}
	}

	return (
		<svg
			className={styles.diagram}
			onLoadCapture={handleLoad}
			onMouseDown={handleMouseDown}>
			<Grid />
		</svg>
	);
}

export default Diagram;
