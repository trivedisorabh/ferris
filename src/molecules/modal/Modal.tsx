import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Options as FocusTrapOptions } from 'focus-trap';
import FocusTrap from 'focus-trap-react';
import React, { HTMLAttributes, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Heading from '~atoms/heading/Heading';
import Icon from '~atoms/icon/Icon';
import VisuallyHidden from '~atoms/visually-hidden/VisuallyHidden';
import Colors from '~tokens/colors/Colors';
import FontSizes from '~tokens/font-sizes/FontSizes';
import IconSizes from '~tokens/icon-sizes/IconSizes';
import Icons from '~tokens/icons/Icons';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	focusTrapOptions?: FocusTrapOptions;
	headerText?: string;
	onClose?: () => void;
	open: boolean;
	showCloseButton?: boolean;
}

/**
 * @category Templates
 */
const Modal = ({
	children,
	focusTrapOptions,
	headerText = '',
	onClose,
	open = false,
	showCloseButton = false,
}: ModalProps) => {
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

			<FocusTrap focusTrapOptions={focusTrapOptions}>
				<ModalWindow>
					{(headerText || showCloseButton) && (
						<ModalHeaderRow>
							{headerText && <StyledHeading as="h1">{headerText}</StyledHeading>}
							{showCloseButton && (
								<ModalCloseButton onClick={closeModal}>
									<Icon icon={Icons.Close} color={Colors.white} size={IconSizes.lg} />
									{/* This button name might need localization support in the future */}
									<VisuallyHidden>Close</VisuallyHidden>
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

Modal.displayName = 'Modal';
export default Modal;

/**
 * @category Styles
 */
const fadeIn = css`
	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	animation: fadeIn 200ms;
	animation-fill-mode: backwards;
`;

const ModalBackground = styled.div`
	${fadeIn}

	background-color: rgba(0, 0, 0, 0.4);
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
`;

/*  Absolute position centering is used to center the window without having
		access to modify its parent. */
const ModalWindow = styled.div`
	${fadeIn}

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

const StyledHeading = styled(Heading)`
	font-size: ${FontSizes.xl};
`;

const ModalCloseButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	line-height: 0;
	margin-left: auto;
	padding: 0;

	&:focus-visible {
		outline-color: ${Colors.white};
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 2px;
	}
`;

const ModalContentWrapper = styled.div`
	padding: ${Spacings.lg};
`;
