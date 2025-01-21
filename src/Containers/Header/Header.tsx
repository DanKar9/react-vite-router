import { ReactNode } from "react";
import { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import { Anchor } from '@/components/Anchor/Anchor.tsx';
import {List} from '../List.tsx'

export type NavLink = {
	label: string | ReactNode;
	href: string;
};

export type HeaderProps = {
  className?: string;
	navigation: NavLink[];
	children?: ReactNode;
};

function map() {
	
}
export const Header: FunctionComponent<HeaderProps> = ({className,navigation,children,}: HeaderProps) => {
	return (
		<header className={clsx(styles.header, className, )}>
			<div className={styles.container}>
				<Anchor href="/"/>
				<nav className={clsx(styles.nav)}>
					<List links={list.map(el=>({url: el.href, linkTitle: el.label}))}></List>
				</nav>
				<nav className={styles.controls}>{children}</nav>
			</div>
		</header>
	);
};