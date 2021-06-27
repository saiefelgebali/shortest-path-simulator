import { GraphNode } from "../../../graph/GraphNode";
import styles from "./DiagramNode.module.scss";

type DiagramNodeProps = {
	node: GraphNode;
};

/**
 * Represents a graph node on the diagram
 * @prop {GraphNode} node
 */
function DiagramNode({ node }: DiagramNodeProps) {
	return (
		<svg className={styles.node} x={200} y={200} width={80} height={80}>
			<circle cx='50%' cy='50%' r={40} />
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
