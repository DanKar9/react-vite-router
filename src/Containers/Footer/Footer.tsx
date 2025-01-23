import clsx from 'clsx';
import styles from './Footer.module.scss';
import { Anchor } from '../../components/Anchor/Anchor';
import {FooterProps} from '../types.tsx'
import {List} from '../List/List.tsx'


export const Footer =({className,columns}: FooterProps) => {
	return (
        <footer className={clsx(styles.footer, className, )}>
        <div className={styles.container}>
				<Anchor href="/"/>
				<nav className={clsx(styles.nav)}>
				<List links={[{ label: 'Home', href: '/' },
				{ label: 'Sign Up', href: '/register' },
				{ label: 'Sign In', href: '/login' }
			]} />
				</nav>
			</div>
        </footer>

	);
}