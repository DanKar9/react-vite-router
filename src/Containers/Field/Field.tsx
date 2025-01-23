import { ChangeEvent, FunctionComponent, ReactNode, useEffect, useState } from 'react';
import styles from './Field.module.scss';
import clsx from 'clsx';

export type FieldProps = {
    value?: string,
	className?: string;
	fieldText: string;
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	placeholder?: string;
};

export const Field: FunctionComponent<FieldProps> = ({value,className,fieldText,onChange,placeholder,}: FieldProps) => {

		const [input, setInput] = useState(value);
	
			const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setInput(e.target.value);
				onChange?.(e);
			};
	
			useEffect(() => {
				setInput(value || '');
			}, [value]);
	
	return (
		<div className={styles.container}>
		<label className={`${styles.label} ${className}`}>
			<span>{fieldText}</span>
			<input
						
						value={input}
						onChange={onInputChange}
						className={clsx(styles['input__field'])}
						placeholder={placeholder}
						
					/>
		</label>
		</div>
	);
};