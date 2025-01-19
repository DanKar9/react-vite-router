import {FunctionComponent} from 'react'

export type FormTag = 'form' | Funcion Component

export interface FormProps {
	children: React.ReactNode;
	Tag?: FormTag;
}