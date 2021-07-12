import React, { useState } from 'react';
import { Story } from '~common/interfaces';
import Button from '~components/button/Button';
import Modal, { ModalProps } from '~components/modal/Modal';
import Row from '~components/row/Row';
import Spacer from '~components/spacer/Spacer';
import Spacings from '~tokens/spacings/Spacings';

export default {
	title: 'Components/Modal',
	component: Modal,
};

const Template: Story<ModalProps> = ({ open, children = 'Content', onClose }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(open);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				{children}
			</Modal>
		</>
	);
};

const TemplateCustomContent: Story<ModalProps> = ({ showCloseButton, headerText }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			<Modal
				open={isOpen}
				showCloseButton={showCloseButton}
				headerText={headerText}
				onClose={() => {
					setIsOpen(false);
				}}
			>
				<p>Here is a a question for you: Do you want to close this modal?</p>
				<Row alignX="end">
					<Button onClick={() => setIsOpen(false)}>Yes</Button>
					<Spacer spacing={Spacings.sm} />
					<Button onClick={() => setIsOpen(false)}>No, but actually yes</Button>
				</Row>
			</Modal>
		</>
	);
};

export const Open = Template.bind({});
Open.args = { open: true };

export const CustomContent = TemplateCustomContent.bind({});
CustomContent.args = { showCloseButton: false };

export const CustomContentAndHeader = TemplateCustomContent.bind({});
CustomContentAndHeader.args = { showCloseButton: true, headerText: 'Listen!' };

export const Closed = Template.bind({});
Closed.args = {};
