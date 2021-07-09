import React, { ReactElement } from 'react';
import Button from '~atoms/button/Button';
import Spacer, { SpacerProps } from './Spacer';

export default {
	title: 'Atoms/Spacer',
	component: Spacer,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<SpacerProps> = ({ orientation, spacing }: SpacerProps) => (
	<>
		<Button
			onClick={() => {
				alert('Dummy click!');
			}}
		>
			Default
		</Button>
		<Spacer orientation={orientation} spacing={spacing} />
		<Button
			onClick={() => {
				alert('Dummy click!');
			}}
		>
			Resest
		</Button>
	</>
);

export const Default = Template.bind({});
Default.args = {
	orientation: 'vertical',
};
