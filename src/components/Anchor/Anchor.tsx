
import { useAnchor, useLinkProps } from './AnchorContext';
import { AnchorProps } from "@/components/Anchor/types.tsx";


export function Anchor({ href, children, ...props }: AnchorProps) {
	const LinkElement = useAnchor(href);
	const propsLink = useLinkProps(href);
	return (
		<LinkElement {...props} {...propsLink}>
			{children}
		</LinkElement>
	);
    }