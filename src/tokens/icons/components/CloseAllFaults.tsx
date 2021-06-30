import * as React from 'react';

function CloseAllFaults(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
			<path d="M.833 5c.459 0 .834.375.834.833V17.5c0 .458.375.833.833.833h11.667c.458 0 .833.375.833.834a.836.836 0 01-.833.833h-12.5C.75 20 0 19.25 0 18.333v-12.5C0 5.375.375 5 .833 5zm17.27-5C19.152 0 20 .849 20 1.896v12.208A1.896 1.896 0 0118.104 16H5.896A1.896 1.896 0 014 14.104V1.896C4 .85 4.849 0 5.896 0h12.208zm-1.35 3.246a.84.84 0 00-1.188 0L12 6.811 8.435 3.246a.84.84 0 00-1.189 1.189L10.811 8l-3.565 3.565a.84.84 0 001.189 1.189L12 9.187l3.565 3.567a.84.84 0 001.189-1.189L13.187 8l3.567-3.565a.84.84 0 000-1.189z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(CloseAllFaults);
export default ForwardRef;
