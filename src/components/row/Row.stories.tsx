import React, { ReactElement } from 'react';
import Button from '~components/button/Button';
import Spacer from '~components/spacer/Spacer';
import Row, { RowProps } from './Row';

export default {
	title: 'Layout/Row',
	component: Row,
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
	children: [
		<Button key={0} onClick={() => alert('Dummy click')}>
			Default
		</Button>,
		<Spacer key={1} />,
		<Button key={2} onClick={() => alert('Dummy click')} type="reset">
			Reset
		</Button>,
		<Spacer key={3} />,
		<Button key={4} onClick={() => alert('Dummy click')} type="submit">
			Submit
		</Button>,
	],
};
