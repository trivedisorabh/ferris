import styled from '@emotion/styled';
import FocusTrap from 'focus-trap-react';
import React, { HTMLAttributes, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Heading from '~atoms/heading/Heading';
import Icon from '~atoms/icon/Icon';
import { visuallyHidden } from '~common/styles';
import Colors from '~tokens/colors/Colors';
import FontSizes from '~tokens/font-sizes/FontSizes';
import IconSizes from '~tokens/icon-sizes/IconSizes';
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

			<FocusTrap>
				<ModalWindow>
					{(headerText || showCloseButton) && (
						<ModalHeaderRow>
							{headerText && (
								<Heading as="h1" headingStyle={{ fontSize: FontSizes.xl }}>
									{headerText}
								</Heading>
							)}
							{showCloseButton && (
								<ModalCloseButton onClick={closeModal}>
									<Icon icon={Icons.Close} color={Colors.white} size={IconSizes.lg} />
									{/* This button name might need localization support in the future */}
									<ModalCloseButtonName>Close</ModalCloseButtonName>
								</ModalCloseButton>
							)}
						</ModalHeaderRow>
					)}
					<ModalContentWrapper>{children}</ModalContentWrapper>
				</ModalWindow>
			</FocusTrap>
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

const ModalHeaderRow = styled.div`
	align-items: center;
	background-color: ${Colors.brandBase};
	color: ${Colors.white};
	display: flex;
	height: 48px;
	padding: ${Spacings.sm} ${Spacings.md};
`;

const ModalCloseButton = styled.button`
	background: none;
	border: none;
	line-height: 0;
	margin-left: auto;
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
