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
	parameters: {
		chromatic: {
			delay: 300, // Allows for fade in to complete before screenshot
		},
	},
	argTypes: {
		open: {
			control: false,
			description:
				'Controls wether the modal component is open or not. (In Storybook this is controlled via the button in the story.)',
		},
		showCloseButton: { description: 'If true, a close button will be places in the modal header.' },
		headerText: {
			description: 'If present, the text will display in the modal header.',
		},
		onClose: {
			control: false,
			description: 'Fires when the built in close button is clicked, or the key Escape is pressed.',
		},
		focusTrapOptions: {
			control: false,
			description:
				'Options object that will be passed along to [focus-trap](https://github.com/focus-trap/focus-trap#createoptions), which wraps the modal.',
		},
	},
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
				<p>This content, including the buttons below, is completely determined by the user.</p>
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

export const HeaderTextOnly = Template.bind({});
HeaderTextOnly.args = { open: true, showCloseButton: false, headerText: 'Listen!' };

export const CloseButtonOnly = Template.bind({});
CloseButtonOnly.args = { open: true, showCloseButton: true };

export const HeaderTextAndCloseButton = TemplateCustomCloseButton.bind({});
HeaderTextAndCloseButton.args = { open: true, showCloseButton: true, headerText: 'Hello there' };

export const CustomCloseButton = TemplateCustomCloseButton.bind({});
CustomCloseButton.args = { showCloseButton: false };

export const LongContent = Template.bind({});
LongContent.args = {
	open: true,
	children:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro ipsum eaque inventore non unde. Odit ex architecto molestias ratione possimus quod vero, ab assumenda aut iste numquam quaerat vitae? ',
};

export const Closed = Template.bind({});
Closed.args = {};
