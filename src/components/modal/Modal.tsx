import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean;
	onClose?: () => void;
}

const Modal = forwardRef(
	({ open, onClose, children }: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
		if (!open) return null;

		return (
			<ModalBackground ref={ref}>
				<ModalWindow>
					{onClose && <button onClick={onClose}>close</button>}
					{children}
				</ModalWindow>
			</ModalBackground>
		);
	}
);

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
