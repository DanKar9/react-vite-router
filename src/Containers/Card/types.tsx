import {FunctionComponent} from 'react'

export type CardTag = keyof Pick<React.JSX.IntrinsicElements, 'a' | 'button' | FunctionComponent>

export interface CardProps {
	children: React.ReactNode;
	Tag: CardTag;
}