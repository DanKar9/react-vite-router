import { AnchorHTMLAttributes, createContext, useContext } from 'react';
import { LinkElement } from './Anchor';
import { AnchorContextType, LinkTag, LinkValue } from './types';
import { convertURL } from '@/utils';
export const AnchorContext = createContext<AnchorContextType>({});

export function useAnchor(href?: LinkValue): LinkTag {
	const { LinkElement, ignoreFn } = useContext(AnchorContext);
	if (href && LinkElement && typeof href === 'string') {
		if (!ignoreFn || ignoreFn(href)) return LinkElement;
	}
	return 'a';
}

export function useLinkProps(
	href?: LinkValue,
): AnchorHTMLAttributes<HTMLAnchorElement> {
	const props: AnchorHTMLAttributes<HTMLAnchorElement> = {};
	if (typeof href === 'string') {
		const url = convertURL(href);
		props.href = href;
		if (url.origin !== location.origin) {
			props.rel = 'noopener noreferrer';
			props.target = '_blank';
		}
	}
	if (typeof href === 'function') {
		props.onClick = (e:MouseEvent<HTMLAnchorElement,MouseEvent>):void => {
			e.preventDefault();
			e.stopPropagation();
			href(e);
		};
	}
    
	return props;
}



