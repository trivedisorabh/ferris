import React, { ReactElement } from 'react';
import Button from '~components/button/Button';
import Spacer from '~components/spacer/Spacer';
import Row, { RowProps } from './Row';

export default {
	title: 'Components/Row',
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
