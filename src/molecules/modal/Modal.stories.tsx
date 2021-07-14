import React, { useState } from 'react';
import Button from '~atoms/button/Button';
import Row from '~atoms/row/Row';
import Spacer from '~atoms/spacer/Spacer';
import { Story } from '~common/interfaces';
import Modal, { ModalProps } from '~molecules/modal/Modal';
import Spacings from '~tokens/spacings/Spacings';

export default {
	title: 'Molecules/Modal',
	component: Modal,
};

const Template: Story<ModalProps> = ({
	open,
	children = 'Content',
	showCloseButton,
	headerText,
}: ModalProps) => {
	const [isOpen, setIsOpen] = useState(open);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			<Modal
				open={isOpen}
				showCloseButton={showCloseButton}
				headerText={headerText}
				onClose={() => setIsOpen(false)}
			>
				<p>{children}</p>
				<Button onClick={() => setIsOpen(false)}>Close</Button>
			</Modal>
		</>
	);
};

const TemplateCustomCloseButton: Story<ModalProps> = ({
	showCloseButton,
	headerText,
}: ModalProps) => {
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

export const CustomCloseButton = TemplateCustomCloseButton.bind({});
CustomCloseButton.args = { showCloseButton: false };

export const HeaderTextOnly = Template.bind({});
HeaderTextOnly.args = { open: true, showCloseButton: false, headerText: 'Listen!' };

export const CloseButtonOnly = Template.bind({});
CloseButtonOnly.args = { open: true, showCloseButton: true };

export const HeaderTextAndCloseButton = TemplateCustomCloseButton.bind({});
HeaderTextAndCloseButton.args = { open: true, showCloseButton: true, headerText: 'Hello there' };

export const LongContent = Template.bind({});
LongContent.args = {
	open: true,
	children:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? ',
};

export const Closed = Template.bind({});
Closed.args = {};
