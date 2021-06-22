import * as React from 'react';

function Check(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			ref={svgRef}
		>
			<title>{'45212B2A-1008-4E43-BB5C-422A1072F3F5'}</title>
			<g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
				<g id="Icons/Actions/Check" fill="#676F7C">
					<path
						d="M7.17608361,14.1766665 L3.51668156,10.2267848 C3.05198094,9.73709135 2.31322609,9.73709135 1.84852547,10.2267848 C1.38382484,10.7164782 1.38382484,11.4949652 1.84852547,11.9846586 L6.33009016,16.800921 C6.79479079,17.2906144 7.54546103,17.2906144 8.01016165,16.800921 L18.2091217,6.14327781 C18.6738224,5.65358439 18.6738224,4.87509742 18.2091217,4.385404 C17.7444211,3.89571058 17.0056663,3.89571058 16.5409656,4.385404 L7.17608361,14.1766665 Z"
						id="Check"
					/>
				</g>
			</g>
		</svg>
	);
}

const ForwardRef = React.forwardRef(Check);
export default ForwardRef;
