import styles from "./DiagramNode.module.scss";

type DiagramNodeProps = {
	x: number;
	y: number;
};

/**
 * Represents a graph node on the diagram
 * @prop {number} x - position on the x-axis
 * @prop {number} y - position on the y-axis
 * @returns
 */
function DiagramNode({ x, y }: DiagramNodeProps) {
	return (
		<svg className={styles.node} x={x} y={y} width={80} height={80}>
			<circle cx='50%' cy='50%' r={40} fill='black' />
			<text
				x='50%'
				y='50%'
				textAnchor='middle'
				fill='white'
				fontSize='24px'
				fontFamily='Arial'
				dy='8px'>
				CB
			</text>
		</svg>
	);
}

export default DiagramNode;
