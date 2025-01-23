import clsx from 'clsx'
import styles from './Typeography.module.scss'
import { TypographyProps,TypographyVariants } from "../types.tsx";



const withTypography = (defaults: TypographyProps) => {

	return function Typography(props: TypographyProps) {
        let {className,children,variant,Tag, ...rest} = {
            ...defaults,
            ...props
        }
        Tag = Tag || 'span'
        variant = variant || TypographyVariant.normal
		return (
        <Tag {...rest} className={clsx(styles.container, className)}>
			{children}
		</Tag>
        )
	}
}
export const Text = withTypography({
    Tag: 'span',
    variant: 'variant'
});
export const Title = withTypography({
    Tag: 'h3',
    variant: 'title'
});