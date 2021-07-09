import React, { CSSProperties, ReactElement } from 'react';
import Button from '~atoms/button/Button';
import Spacer from '~atoms/spacer/Spacer';
import Row, { RowProps } from './Row';

const alignX: CSSProperties['justifyContent'][] = [
	'-moz-initial',
	'center',
	'end',
	'flex-end',
	'flex-start',
	'inherit',
	'initial',
	'left',
	'normal',
	'revert',
	'right',
	'space-around',
	'space-between',
	'space-evenly',
	'start',
	'stretch',
	'unset',
];

const alignY: CSSProperties['alignItems'][] = [
	'baseline',
	'center',
	'end',
	'flex-end',
	'flex-start',
	'inherit',
	'initial',
	'normal',
	'revert',
	'self-end',
	'self-start',
	'start',
	'stretch',
	'unset',
];

export default {
	title: 'Atoms/Row',
	component: Row,
	argTypes: {
		alignX: {
			description:
				'Supports all official values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content',
			defaultValue: 'normal',
			control: { type: 'select', options: alignX },
		},
		alignY: {
			description:
				'Supports all official values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items',
			defaultValue: 'normal',
			control: { type: 'select', options: alignY },
		},
	},
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<RowProps> = ({ children, alignX, alignY, reversed }: RowProps) => (
	<Row alignX={alignX} alignY={alignY} reversed={reversed}>
		{children}
	</Row>
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<Button onClick={() => alert('Dummy click')}>Default</Button>
			<Spacer />
			<Button onClick={() => alert('Dummy click')} type="reset">
				Reset
			</Button>
			<Spacer />
			<Button onClick={() => alert('Dummy click')} type="submit">
				Submit
			</Button>
		</>
	),
};
