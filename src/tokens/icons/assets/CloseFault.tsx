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
			<path d="M16.222 2C17.204 2 18 2.796 18 3.778v12.444c0 .982-.796 1.778-1.778 1.778H3.778A1.778 1.778 0 012 16.222V3.778C2 2.796 2.796 2 3.778 2h12.444zm-1.468 3.246a.84.84 0 00-1.189 0L10 8.811 6.435 5.246a.84.84 0 00-1.189 1.189L8.811 10l-3.565 3.565a.84.84 0 001.189 1.189L10 11.187l3.565 3.567a.84.84 0 001.189-1.189L11.187 10l3.567-3.565a.84.84 0 000-1.189z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
