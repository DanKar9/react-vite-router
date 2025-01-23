import clsx from 'clsx';
import styles from './Button.module.scss';
import { ReactNode } from "react";
import { ActionTag, ButtonType, ButtonVariant } from './types';
import { Anchor } from '../Anchor/Anchor';


export type ButtonProps = {
	type?: ButtonType | keyof typeof ButtonType;
    variant: ButtonVariant | keyof typeof ButtonVariant;
    disabled: boolean;
    onClick: () => void;
    className?: string;
    children?: ReactNode;
    href?: string;
    name?: string;
    Tag?: ActionTag;
};
function withAction(defaults: ButtonProps = 'button') {
	return function Action(props: ButtonProps) {
        let {className,children,disabled,type,href,variant,Tag, ...rest} = {...defaults, ...props}
        Tag = Tag || 'button';
		const TagElement = (Tag === 'a') ? Anchor : Tag;
        variant = variant || 'primary'
		return (
			<TagElement
                {...rest}
				type={Tag === 'button' ? type : undefined}
				href={Tag === 'a' ? href : undefined}
				className={clsx(styles.button, styles[variant], className, {
					[styles.disabled]: disabled,
				})}
			>
				{children}
			</TagElement>
		);
	};
}
export const Button = withAction({
    Tag: 'button',
    variant:'primary'
});
export const ButtonLink = withAction({
    Tag: 'a',
    variant: 'link'
});