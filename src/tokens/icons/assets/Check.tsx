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
			<path d="M7.176 14.177l-3.66-3.95a1.13 1.13 0 00-1.667 0 1.283 1.283 0 000 1.758L6.33 16.8c.465.49 1.215.49 1.68 0l10.2-10.658a1.283 1.283 0 000-1.758 1.13 1.13 0 00-1.669 0l-9.365 9.792z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
