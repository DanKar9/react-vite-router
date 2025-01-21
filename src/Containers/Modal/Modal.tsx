import clsx from "clsx";
import {ModalProps} from '../types.tsx'

export const Modal = ({ children,onClose,className }: ModalProps) => {
	return (
        <>
		<div className={clsx(styles.overlay, className)}
			onClick={(e) => e.stopPropagation()}
		>
			<div className={styles.modal}>
				<button onClick={onClose}></button>
				{children}
			</div>
		</div>
        </>
	);
}