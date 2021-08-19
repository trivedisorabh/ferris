import * as React from 'react';

function ChevronDown(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
			<path d="M5.713 7.293l3.88 3.88 3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(ChevronDown);
export default ForwardRef;
