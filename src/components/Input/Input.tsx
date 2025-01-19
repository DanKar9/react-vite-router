import clsx from 'clsx';
import { ChangeEvent, ReactElement } from "react";
import styles from './Input.module.scss';
import { InputHTMLAttributes} from 'react';



export type InputProps = {
	value?: string;
	onChange?: (value:string) => void;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({className, ...props}:InputProps) => {
    return <input {...props}/>
}

export const InputText = (props:InputProps) => Input({...props, type:'text'})

export const InputPassword = (props:InputProps) => Input({...props, type:'password'})

export const InputEmail = (props:InputProps) => Input({...props, type:'email'})