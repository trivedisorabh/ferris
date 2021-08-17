import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Icon from '~atoms/icon/Icon';
import VisuallyHidden from '~atoms/visually-hidden/VisuallyHidden';
import IconSizes from '~tokens/icon-sizes/IconSizes';
import Icons from '~tokens/icons/Icons';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface SearchFieldProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	placerholder: string;
	resetLabel: string;
}

/**
 * @category Template
 */
const SearchField = forwardRef(
	(
		{ id, placerholder, resetLabel, ...rest }: SearchFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledSearchField {...rest} data-tpl="search-field" ref={ref}>
			<StyledBody>
				<StyledInput id={id} placeholder={placerholder} type="search" />
				<StyledButton type="reset">
					<VisuallyHidden>{resetLabel}</VisuallyHidden>
					<Icon icon={Icons.Close} size={IconSizes.lg} />
				</StyledButton>
			</StyledBody>
		</StyledSearchField>
	)
);

SearchField.displayName = 'SearchField';
export default SearchField;

/**
 * @category Styles
 */

const StyledSearchField = styled.div`
	display: flex;
`;

const StyledBody = styled.div`
	position: relative;
`;

const StyledInput = styled.input`
	appearance: none;
	border: 0;
	padding: ${Spacings.xs} ${Spacings.xxl};
`;

const StyledButton = styled.button`
	background: none;
	border: 0;
	height: 20px;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
`;
