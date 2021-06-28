import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;

const styles = css`
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default margin */
	h1,
	h2,
	h3,
	h4 {
		margin: 0;
	}

	/* Set core body defaults */
	body {
		color: rgb(39, 51, 66);
		font: 1rem/1.5 Arial, sans-serif;
		text-rendering: optimizeSpeed;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
`;
