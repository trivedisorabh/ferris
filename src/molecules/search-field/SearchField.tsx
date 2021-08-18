import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Icon from '~atoms/icon/Icon';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import Label, { LabelProps } from '~atoms/label/Label';
import Spacer from '~atoms/spacer/Spacer';
import VisuallyHidden from '~atoms/visually-hidden/VisuallyHidden';
import { visuallyHidden } from '~common/styles';
import IconSizes from '~tokens/icon-sizes/IconSizes';
import Icons from '~tokens/icons/Icons';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface SearchFieldProps extends HTMLAttributes<HTMLDivElement> {
	disabled?: boolean;
	id: string;
	inputTextProps?: Partial<InputTextProps>;
	label: string;
	labelHidden?: boolean;
	labelProps?: Partial<LabelProps>;
	required?: boolean;
	resetLabel: string;
	value?: string;
}

/**
 * @category Template
 */
const SearchField = forwardRef(
	(
		{
			disabled,
			id,
			inputTextProps,
			label,
			labelHidden,
			labelProps,
			required,
			resetLabel,
			value,
			...rest
		}: SearchFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledSearchField {...rest} data-tpl="search-field" disabled={disabled} ref={ref}>
			<StyledLabel
				{...labelProps}
				htmlFor={id}
				labelHidden={labelHidden}
				required={required}
				disabled={disabled}
			>
				{label}
			</StyledLabel>
			<Spacer orientation="vertical" spacing={Spacings.xxs} />
			<StyledInputWrapper>
				<StyledIcon icon={Icons.Search} size={IconSizes.lg} />
				<StyledInputText
					{...inputTextProps}
					id={id}
					disabled={disabled}
					required={required}
					type="search"
					value={value}
				/>
				<StyledButton type="reset">
					<VisuallyHidden>{resetLabel}</VisuallyHidden>
					<Icon icon={Icons.Close} size={IconSizes.lg} />
				</StyledButton>
			</StyledInputWrapper>
		</StyledSearchField>
	)
);

SearchField.displayName = 'SearchField';
export default SearchField;

/**
 * @category Styles
 */
type StyledSearchFieldProps = Pick<SearchFieldProps, 'disabled'>;

const StyledSearchField = styled.div(
	({ disabled }: StyledSearchFieldProps) => css`
		display: flex;
		flex-direction: column;
		opacity: ${disabled && '0.5'};
	`
);

type StyledLabelProps = Pick<SearchFieldProps, 'labelHidden'>;

const StyledLabel = styled(Label)(
	({ labelHidden }: StyledLabelProps) => css`
		${labelHidden && visuallyHidden}
	`
);

const StyledInputWrapper = styled.div`
	position: relative;
`;

const StyledInputText = styled(InputText)`
	padding-left: ${Spacings.xxl};
	padding-right: ${Spacings.xxl};
	width: 100%;
`;

const StyledIcon = styled(Icon)`
	left: ${Spacings.xs};
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;

const StyledButton = styled.button`
	background: none;
	border: 0;
	cursor: pointer;
	line-height: 0;
	padding: 0;
	position: absolute;
	right: ${Spacings.xs};
	top: 50%;
	transform: translateY(-50%);
`;
