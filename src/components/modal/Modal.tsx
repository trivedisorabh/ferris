import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean;
}

const Modal = forwardRef(({ open }: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
	if (!open) return null;

	return <div ref={ref}>Modal!</div>;
});

Modal.displayName = 'Modal';
export default Modal;
