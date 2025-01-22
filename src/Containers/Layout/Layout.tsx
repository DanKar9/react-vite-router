
import { FunctionComponent } from "react";
import { Footer } from "./Footer/Footer";
import clsx from "clsx";
import styles from './Layout.module.scss';
import { Header } from "./Header/Header";
import {LayoutProps} from './types.tsx'





export const Layout: FunctionComponent<LayoutProps>  = ({ className, children, headerItems, footerItems }: LayoutProps) => {
	return <div className={clsx(styles.layout, className)}>
		<Header {...headerItems}></Header>
		<div className={styles.content}>{children}</div>
		<Footer {...footerItems} />
	</div>;
}