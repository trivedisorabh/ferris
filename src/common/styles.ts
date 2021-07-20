import { css } from '@emotion/react';

/* Hides an element visually, but leaves it accessible to screen readers */
export const visuallyHidden = css`
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important;
	height: 1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
`;

export const focusOutline = css`
	outline-color: rgb(15, 88, 214);
	outline-offset: 2px;
	outline-style: solid;
	outline-width: 2px;
`;
