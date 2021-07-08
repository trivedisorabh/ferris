import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean;
	onClose?: () => void;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
	if (!open) return null;

	const bodyElement = document.querySelector('body');
	if (!bodyElement) {
		console.error('The modal component requires a body tag in the document.');
		return null;
	}

	return ReactDOM.createPortal(
		<ModalBackground>
			<ModalWindow>
				{onClose && <button onClick={onClose}>close</button>}
				{children}
			</ModalWindow>
		</ModalBackground>,
		bodyElement
	);
};

const ModalBackground = styled.div`
	background-color: ${Colors.black};
	bottom: 0;
	display: grid;
	left: 0;
	opacity: 0.4;
	place-items: center;
	position: fixed;
	right: 0;
	top: 0;
`;

const ModalWindow = styled.div`
	background-color: ${Colors.white};
	min-height: 200px;
	min-width: 400px;
	padding: ${Spacings.lg};
`;

Modal.displayName = 'Modal';
export default Modal;
