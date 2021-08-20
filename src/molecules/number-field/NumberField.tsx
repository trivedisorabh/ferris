import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ChangeEvent, ForwardedRef, forwardRef, InputHTMLAttributes, useRef } from 'react';
import Icon from '~atoms/icon/Icon';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import Label, { LabelProps } from '~atoms/label/Label';
import Spacer from '~atoms/spacer/Spacer';
import VisuallyHidden from '~atoms/visually-hidden/VisuallyHidden';
import Colors from '~tokens/colors/Colors';
import IconSizes from '~tokens/icon-sizes/IconSizes';
import Icons from '~tokens/icons/Icons';
import Sizes from '~tokens/sizes/Sizes';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface NumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	decrementLabel: string;
	defaultValue?: string;
	description?: string;
	disabled?: boolean;
	id: string;
	incrementLabel: string;
	inputTextProps?: Partial<InputTextProps>;
	label: string;
	labelProps?: Partial<LabelProps>;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	required?: boolean;
	step?: number;
	value?: string;
}

/**
 * @category Template
 */
const NumberField = forwardRef(
	(
		{
			decrementLabel,
			defaultValue,
			description,
			disabled,
			id,
			incrementLabel,
			inputTextProps,
			label,
			labelProps,
			onChange,
			placeholder,
			required,
			step,
			value,
			...rest
		}: NumberFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const inputRef = useRef<HTMLInputElement>(null);

		const incrementNumber = () => {
			if (inputRef.current) inputRef.current.stepUp();
		};
		const decrementNumber = () => {
			if (inputRef.current) inputRef.current.stepDown();
		};

		return (
			<StyledNumberField {...rest} data-tpl="number-field" disabled={disabled} ref={ref}>
				<Label {...labelProps} disabled={disabled} htmlFor={id} required={required}>
					{label}
				</Label>
				<Spacer orientation="vertical" spacing={Spacings.xxs} />
				{description && (
					<>
						<StyledDescription>{description}</StyledDescription>
						<Spacer orientation="vertical" spacing={Spacings.xxs} />
					</>
				)}
				<StyledInputWrapper>
					<StyledInputText
						{...inputTextProps}
						defaultValue={defaultValue}
						disabled={disabled}
						id={id}
						placeholder={placeholder}
						ref={inputRef}
						required={required}
						step={step}
						type="number"
						value={value}
						onChange={onChange}
					/>
					<StyledControls>
						<StyledButton disabled={disabled} onClick={incrementNumber} type="button">
							<VisuallyHidden>{incrementLabel}</VisuallyHidden>
							<StyledIcon icon={Icons.ChevronUp} size={IconSizes.lg} />
						</StyledButton>
						<StyledButton disabled={disabled} onClick={decrementNumber} type="button">
							<VisuallyHidden>{decrementLabel}</VisuallyHidden>
							<StyledIcon icon={Icons.ChevronDown} size={IconSizes.lg} />
						</StyledButton>
					</StyledControls>
				</StyledInputWrapper>
			</StyledNumberField>
		);
	}
);

NumberField.displayName = 'NumberField';
export default NumberField;

/**
 * @category Styles
 */
type StyledNumberFieldProps = Pick<NumberFieldProps, 'disabled'>;

const StyledNumberField = styled.div(
	({ disabled }: StyledNumberFieldProps) => css`
		display: flex;
		flex-direction: column;
		opacity: ${disabled && '0.5'};
	`
);

const StyledDescription = styled.div`
	color: ${Colors.grayDarkest};
`;

const StyledInputWrapper = styled.div`
	position: relative;
`;

const StyledInputText = styled(InputText)`
	padding-right: calc(${Sizes.size_3} + ${Spacings.xs});
	width: 100%;
`;

const StyledControls = styled.div`
	bottom: 0;
	display: flex;
	flex-flow: column;
	position: absolute;
	right: 0;
	top: 0;
`;

const StyledButton = styled.button`
	background: ${Colors.grayLighter};
	border: 1px solid ${Colors.grayDark};
	cursor: pointer;
	flex: auto;
	line-height: 0;
	padding: 0;
	position: relative;
	width: ${Sizes.size_3};

	&:disabled {
		pointer-events: none;
	}

	&:last-of-type {
		border-top: 0;
	}
`;

const StyledIcon = styled(Icon)`
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
`;