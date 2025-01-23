import { AnchorHTMLAttributes,FunctionComponent,MouseEvent } from "react";
import { AnchorProps } from "./Anchor";
import { AnchorContext } from './AnchorContext.tsx';

export type LinkTag =
	| keyof Pick<React.JSX.IntrinsicElements, 'a'>
	| FunctionComponent<AnchorProps>;
    
export type AnchorContextType = {
	LinkElement?: FunctionComponent<AnchorProps>;
	ignoreFn?: (href: string) => boolean;
};

export type AnchorProviderProps = AnchorContextType & {
	children: React.ReactNode;
};


export type LinkValue = string | ((event: MouseEvent<HTMLAnchorElement>) => void);

 export type AnchorProps = Omit<
 AnchorHTMLAttributes<HTMLAnchorElement>,
 'href'
> & {
	href?: LinkValue;
};
