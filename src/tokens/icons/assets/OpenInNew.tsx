import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
			<path d="M16 17H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H3a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM12 2c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 101.41 1.41L17 4.41V7c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
