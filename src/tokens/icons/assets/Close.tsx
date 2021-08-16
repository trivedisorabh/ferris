import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
	return (
		<svg
			{...props}
			className="prefix__h-5 prefix__w-5 prefix__text-gray-700"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			focusable="false"
			height="100%"
			width="100%"
			ref={svgRef}
		>
			<path d="M8.586 10L1 2.414A1 1 0 112.414 1L10 8.586 17.586 1A1 1 0 0119 2.414L11.414 10 19 17.586A1 1 0 0117.586 19L10 11.414 2.414 19A1 1 0 111 17.586L8.586 10z" />
		</svg>
	);
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
