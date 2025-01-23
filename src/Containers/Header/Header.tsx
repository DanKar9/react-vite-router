
import { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import { Anchor } from '@/components/Anchor/Anchor.tsx';
import {List} from '../List/List.tsx'
import {HeaderProps} from '../types.tsx'


export const Header: FunctionComponent<HeaderProps> = ({className,navigation,children,}: HeaderProps) => {
	return (
		<header className={clsx(styles.header, className, )}>
			<div className={styles.container}>
				<Anchor href="/"/>
				<nav className={clsx(styles.nav)}>
				<List links={[{ label: 'Home', href: '/' },
				{ label: 'Sign Up', href: '/register' },
				{ label: 'Sign In', href: '/login' }
			]} />
				</nav>
				<nav className={styles.controls}>{children}</nav>
			</div>
		</header>
	);
};