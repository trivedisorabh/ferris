import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Label, { LabelProps } from '~atoms/label/Label';
import TextArea, { TextAreaProps } from '~atoms/text-area/TextArea';
import Colors from '~tokens/colors/Colors';

export interface TextAreaFieldProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * If provided, this text will appear under the label
	 */
	description?: string;

	/**
	 * If true, the input will be non-interactable
	 */
	disabled?: boolean;

	/**
	 * This id will connect the internal TextArea and its Label
	 *
	 * @remarks
	 * The id must be unique on the page
	 *
	 * @see {@link TextArea}
	 * @see {@link Label}
	 */
	id: string;

	/**
	 * This text will display above the input field
	 */
	label: string;

	/**
	 * These LabelProps will be passed on to the internal Label
	 *
	 * @see {@link LabelProps}
	 * @see {@link Label}
	 */
	labelProps?: LabelProps;

	/**
	 * If true, the input will be set to be required and a visual indicator will appear
	 */
	required?: boolean;

	/**
	 * These TextAreaProps will be passed on to the internal TextArea
	 *
	 * @see {@link TextAreaProps}
	 * @see {@link TextArea}
	 */
	textAreaProps?: Partial<TextAreaProps>;

	/**
	 * Sets the value of the TextArea.
	 *
	 * @remarks This prop will make the component controlled and so you must provide an onChange handler
	 * @see {@link https://reactjs.org/docs/forms.html#controlled-components}
	 */
	value?: string;
}

/**
 * TextAreaField
 *
 * This component renders a text area with corresponding label and other functionality, to be used in a form.
 * For more information, @see {@link https://skf.invisionapp.com/dsm/ab-skf/4-web-applications/nav/5fa7caf78c01200018354495/asset/5ea69e3b60bb930a70de53bd | DSM Documentation}
 *
 * @beta
 */
const TextAreaField = forwardRef(
	(
		{
			id,
			label,
			description,
			disabled,
			labelProps,
			required,
			textAreaProps,
			value,
			...rest
		}: TextAreaFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledTextAreaField {...rest} data-tpl="text-area-field" disabled={disabled} ref={ref}>
			<Label {...labelProps} htmlFor={id} required={required}>
				{label}
			</Label>
			{description && <StyledDescription>{description}</StyledDescription>}
			<TextArea {...textAreaProps} id={id} disabled={disabled} required={required} value={value} />
		</StyledTextAreaField>
	)
);

TextAreaField.displayName = 'TextAreaField';
export default TextAreaField;

type StyledTextAreaFieldProps = Pick<TextAreaFieldProps, 'disabled'>;

const StyledTextAreaField = styled.div(
	({ disabled }: StyledTextAreaFieldProps) => css`
		opacity: ${disabled && '0.5'};
	`
);

const StyledDescription = styled.div`
	color: ${Colors.grayDarkest};
`;
