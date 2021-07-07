import React, { useState } from 'react';
import { Story } from '~common/interfaces';
import Button from '~components/button/Button';
import Modal, { ModalProps } from '~components/modal/Modal';

export default {
	title: 'Components/Modal',
	component: Modal,
};

const Template: Story<ModalProps> = ({ open }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(open);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				This is teh content of the modal
			</Modal>
		</>
	);
};

export const Open = Template.bind({});
Open.args = { open: true };

export const Closed = Template.bind({});
Closed.args = {};
