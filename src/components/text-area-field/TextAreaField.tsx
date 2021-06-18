import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
import Label, { LabelProps } from '~atoms/label/Label';
import TextArea, { TextAreaProps } from '~atoms/text-area/TextArea';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface TextAreaFieldProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	label: string;
	description?: string;
	disabled?: boolean;
	labelProps?: LabelProps;
	required?: boolean;
	textAreaProps?: Partial<TextAreaProps>;
	value?: string;
}

/**
 * @category Template
 */
const TextAreaField = ({
	id,
	label,
	description,
	disabled,
	labelProps,
	required,
	textAreaProps,
	value,
	...rest
}: TextAreaFieldProps) => (
	<StRoot {...rest} data-tpl="text-area-field" disabled={disabled}>
		<Label {...labelProps} id={id} required={required}>
			{label}
		</Label>
		{description && <StDescription>{description}</StDescription>}
		<TextArea {...textAreaProps} id={id} disabled={disabled} required={required} value={value} />
	</StRoot>
);

export default TextAreaField;

/**
 * @category Styles
 */
type StRootProps = Pick<TextAreaFieldProps, 'disabled'>;

const StRoot = styled.div(
	({ disabled }: StRootProps) => css`
		opacity: ${disabled && '0.5'};
	`
);

const StDescription = styled.div`
	color: ${Colors.grayDarkest};
`;
