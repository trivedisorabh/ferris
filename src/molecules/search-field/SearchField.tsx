import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, {
	ChangeEvent,
	ChangeEventHandler,
	ForwardedRef,
	forwardRef,
	InputHTMLAttributes,
	useEffect,
	useState,
} from 'react';
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
export interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	defaultValue?: string;
	disabled?: boolean;
	id: string;
	inputTextProps?: Partial<InputTextProps>;
	label: string;
	labelHidden?: boolean;
	labelProps?: Partial<LabelProps>;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onReset?: () => void;
	placeholder?: string;
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
			defaultValue,
			disabled,
			id,
			inputTextProps,
			label,
			labelHidden,
			labelProps,
			onChange,
			onReset,
			placeholder,
			required,
			resetLabel,
			value,
			...rest
		}: SearchFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const [displayResetButton, setDisplayResetButton] = useState(false);
		useEffect(() => {
			if (defaultValue) setDisplayResetButton(true);
			else setDisplayResetButton(false);
		}, [defaultValue]);

		const inputChangeHandler: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
			onChange(e);
			setDisplayResetButton(false);
			if (e.target.value !== '') setDisplayResetButton(true);
		};

		const resetButtonHandler = (): void => {
			onReset && onReset();
			const element = document.getElementById(id) as HTMLButtonElement;
			element.value = '';
			setDisplayResetButton(false);
		};

		return (
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
						disabled={disabled}
						id={id}
						onChange={inputChangeHandler}
						placeholder={placeholder}
						required={required}
						type="search"
						value={value}
						defaultValue={defaultValue}
					/>
					{displayResetButton && (
						<StyledButton disabled={disabled} onClick={resetButtonHandler} type="reset">
							<VisuallyHidden>{resetLabel}</VisuallyHidden>
							<Icon icon={Icons.Close} size={IconSizes.lg} />
						</StyledButton>
					)}
				</StyledInputWrapper>
			</StyledSearchField>
		);
	}
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

	&:disabled {
		pointer-events: none;
	}
`;
