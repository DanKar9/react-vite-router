import clsx from "clsx";
import {ModalProps} from '../types.tsx'

export function Modal({ children,onClose,className }: ModalProps) {
	return (
		<div
			className={clsx(styles.overlay, className)}
			onClick={(e) => e.stopPropagation()}
		>
			<div className={styles.modal}>
				<button className={clsx(styles.icon, className)} onClick={onClose}>
					<Icon name="close" />
				</button>
				{children}
			</div>
		</div>
	);
}