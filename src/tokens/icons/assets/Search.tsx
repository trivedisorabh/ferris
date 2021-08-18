import * as React from 'react';

function Search(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
			<path d="M12.591 12.591c2.148-2.148 2.13-5.648-.04-7.818s-5.67-2.189-7.819-.04c-2.148 2.147-2.13 5.648.04 7.818s5.671 2.188 7.82.04zm.675 2.089c-2.944 2.245-7.19 2.002-9.908-.715C.4 11.005.374 6.232 3.303 3.303 6.233.374 11.006.4 13.965 3.358c2.717 2.717 2.96 6.964.715 9.908l3.473 3.472a1 1 0 01-1.414 1.414l-3.473-3.472z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(Search);
export default ForwardRef;
