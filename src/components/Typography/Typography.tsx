import styles from './Text.module.scss';
import { TypographyProps,TypographyVariants } from "@/components/Typography/types.tsx";



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
		</Tag>;
        )
	}
}
export const Text = withTypography("span");
export const Title = withTypography("h3");