import clsx from "clsx";
import { ReactNode } from "react";
import {FieldProps} from '../types.tsx'


export const Field = ({children,label}: FieldProps) => {
	return (
		<label>
            {label && <span {label}/>}
            {children}
        </label>
	);
};