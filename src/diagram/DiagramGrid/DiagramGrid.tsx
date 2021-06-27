export const DiagramGrid = () => {
	const cellSize = 200;
	const smallCellSize = cellSize / 10;

	return (
		<>
			<defs>
				<pattern
					id='smallGrid'
					width={smallCellSize}
					height={smallCellSize}
					patternUnits='userSpaceOnUse'>
					<path
						d={`M ${smallCellSize} 0 L 0 0 0 ${smallCellSize}`}
						fill='none'
						stroke='gray'
						strokeWidth='0.5'
					/>
				</pattern>
				<pattern
					id='grid'
					width={cellSize}
					height={cellSize}
					patternUnits='userSpaceOnUse'>
					<rect
						width={cellSize}
						height={cellSize}
						fill='url(#smallGrid)'
					/>
					<path
						d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
						fill='none'
						stroke='gray'
						strokeWidth='1'
					/>
				</pattern>
			</defs>

			<rect width='100%' height='100%' fill='url(#grid)' />
		</>
	);
};
