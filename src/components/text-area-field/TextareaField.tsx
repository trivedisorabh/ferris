import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Label from '~atoms/label/Label';
import TextArea from '~atoms/text-area/TextArea';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface TextAreaFieldProps {
	description: string;
	id: string;
	label: string;
	disabled?: boolean;
	required?: boolean;
	value?: string;
}

/**
 * @category Template
 */
const TextAreaField = ({
	description,
	id,
	label,
	disabled,
	required,
	value,
}: TextAreaFieldProps) => (
	<StRoot disabled={disabled}>
		<Label id={id} required={required}>
			{label}
		</Label>
		{description && <StDescription>{description}</StDescription>}
		<TextArea id={id} disabled={disabled} required={required} value={value} />
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
