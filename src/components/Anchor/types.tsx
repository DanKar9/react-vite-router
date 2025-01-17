import { FunctionComponent } from "react";
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

