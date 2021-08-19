import * as React from 'react';

function ChevronUp(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			focusable="false"
			height="100%"
			width="100%"
			ref={svgRef}
		>
			<path d="M13.463 13.293l-3.88-3.88-3.88 3.88a.996.996 0 11-1.41-1.41l4.59-4.59a.996.996 0 011.41 0l4.59 4.59c.39.39.39 1.02 0 1.41-.39.38-1.03.39-1.42 0z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(ChevronUp);
export default ForwardRef;
