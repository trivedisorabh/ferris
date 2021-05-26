import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

/**
 * @category Props
 */
export interface BreadcrumbItem {
	href: string;
	label: string;
}

export interface BreadcrumbProps {
	ariaCurrentLabel: 'location' | 'page';
	items: BreadcrumbItem[];
	isSmall?: boolean;
}

/**
 * @category Template
 */
const Breadcrumb = ({ ariaCurrentLabel, items, isSmall }: BreadcrumbProps) => (
	<StRoot aria-label="Breadcrumb" isSmall={isSmall}>
		<StList>
			{items.map((item, index) => {
				const isCurrent = index === items.length - 1 ? true : false;
				return (
					<StItem key={index}>
						{getLink(item, isCurrent, ariaCurrentLabel)}
						{index !== items.length - 1 && <StIcon aria-hidden="true">→</StIcon>}
					</StItem>
				);
			})}
		</StList>
	</StRoot>
);

export default Breadcrumb;

/**
 * @category Helpers
 */
const getLink = (
	{ href, label }: BreadcrumbItem,
	isCurrent: boolean,
	ariaCurrentLabel: BreadcrumbProps['ariaCurrentLabel']
) => (
	<StLink aria-current={isCurrent ? ariaCurrentLabel : undefined} href={href} isCurrent={isCurrent}>
		{label}
	</StLink>
);

/**
 * @category Styles
 */
type StRootProps = Pick<BreadcrumbProps, 'isSmall'>;

const StRoot = styled.nav(
	({ isSmall }: StRootProps) => css`
		font-size: ${isSmall && '0.75rem'};
	`
);

const StList = styled.ol`
	display: flex;
	list-style: none;
`;

const StItem = styled.li`
	display: inherit;
	margin-left: 1rem;

	&:first-of-type {
		margin-left: 0;
	}
`;

interface StItemProps {
	isCurrent: boolean;
}

const StLink = styled.a(
	({ isCurrent }: StItemProps) => css`
		color: grey;
		text-decoration: none;

		&:hover,
		&:focus,
		&:active {
			color: #000;
		}

		${isCurrent &&
		css`
			color: #000;
			font-weight: bold;
		`}
	`
);

const StIcon = styled.span`
	margin-left: 0.25rem;
`;
