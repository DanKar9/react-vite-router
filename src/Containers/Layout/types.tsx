import { HeaderProps } from "./Header/types.tsx";
import { ReactNode } from "react";
import { FooterProps } from "./Footer/types.tsx";


export type LayoutProps = {
	className?: string;
	children?: ReactNode;
	headerItems: HeaderProps;
	footerItems: FooterProps;
};