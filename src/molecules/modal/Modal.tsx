import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Heading from '~atoms/heading/Heading';
import Icon from '~atoms/icon/Icon';
import { visuallyHidden } from '~common/styles';
import Colors from '~tokens/colors/Colors';
import Icons from '~tokens/icons/Icons';
import Spacings from '~tokens/spacings/Spacings';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean;
	onClose?: () => void;
	showCloseButton?: boolean;
	headerText?: string;
}

const Modal = ({ open, onClose, showCloseButton, headerText, children }: ModalProps) => {
	if (!open) return null;

	const bodyElement = document.querySelector('body');
	if (!bodyElement) {
		console.error('The modal component requires a body tag in the document.');
		return null;
	}

	function closeModal() {
		document.removeEventListener('keyup', handleKeyUp);
		onClose && onClose();
	}

	function handleKeyUp(key: KeyboardEvent) {
		if (key.code === 'Escape') {
			closeModal();
		}
	}

	useEffect(function keyboardListener() {
		document.addEventListener('keyup', handleKeyUp);
		return () => {
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	return ReactDOM.createPortal(
		<>
			<ModalBackground></ModalBackground>

			<ModalWindow>
				{(headerText || showCloseButton) && (
					<ModalHeaderRow headerText={headerText}>
						{headerText && <Heading as="h1">{headerText}</Heading>}
						{showCloseButton && (
							<ModalCloseButton onClick={closeModal}>
								<Icon icon={Icons.Close} color={Colors.white} />
								<ModalCloseButtonName>Close</ModalCloseButtonName>
							</ModalCloseButton>
						)}
					</ModalHeaderRow>
				)}
				<ModalContentWrapper>{children}</ModalContentWrapper>
			</ModalWindow>
		</>,
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

/*  Absolute position centering is used to center the window without having
		access to modify its parent. */
const ModalWindow = styled.div`
	background-color: ${Colors.white};
	left: 50%;
	max-height: 50vh;
	min-height: 200px;
	min-width: 400px;
	overflow-y: auto;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
`;

type ModalHeaderRowProps = Pick<ModalProps, 'headerText'>;

const ModalHeaderRow = styled.div(
	({ headerText }: ModalHeaderRowProps) => css`
		align-items: flex-start;
		background-color: ${headerText ? Colors.brandBase : 'transparent'};
		color: ${headerText ? Colors.white : Colors.blackBrand};
		display: flex;
		justify-content: ${headerText ? 'space-between' : 'end'};
		padding: ${Spacings.md};
	`
);

const ModalCloseButton = styled.button`
	background: none;
	border: none;
	padding: 0;
`;

const ModalCloseButtonName = styled.span`
	${visuallyHidden}
`;

const ModalContentWrapper = styled.div`
	padding: ${Spacings.lg};
`;

Modal.displayName = 'Modal';
export default Modal;
