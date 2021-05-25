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
	items: BreadcrumbItem[];
	small?: boolean;
}

/**
 * @category Template
 */
const Breadcrumb = ({ items, small }: BreadcrumbProps) => (
	<StRoot aria-label="Breadcrumb" small={small}>
		<StList>
			{items.map((item, index) => {
				const isCurrent = index === items.length - 1 ? true : false;
				return (
					<StItem key={index}>
						{getLink(item, isCurrent)}
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
const getLink = ({ href, label }: BreadcrumbItem, isCurrent: boolean) => (
	<StLink aria-current={isCurrent ? 'location' : undefined} href={href} isCurrent={isCurrent}>
		{label}
	</StLink>
);

/**
 * @category Styles
 */
type StRootProps = Pick<BreadcrumbProps, 'small'>;

const StRoot = styled.nav(
	({ small }: StRootProps) => css`
		font-size: ${small && '0.75rem'};
	`
);

const StList = styled.ol`
	display: flex;
	align-items: center;
	list-style: none;
`;

const StItem = styled.li`
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
		color: ${isCurrent ? 'black' : 'grey'};
		text-decoration: none;
	`
);

const StIcon = styled.span`
	margin-left: 0.25rem;
`;
