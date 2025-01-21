import clsx from 'clsx';
import styles from './Footer.module.scss';
import { Anchor } from '@/components/Anchor/Anchor';
import {FooterProps} from '../types.tsx'


export function Footer({className,navigation,children}: FooterProps) {
	return (
        <footer className={clsx(styles.footer, className, )}>
        <div className={styles.container}>
            <Anchor href="/"/>
            <nav className={clsx(styles.nav)}>
                <List links={list.map(el=>({url: el.href, linkTitle: el.label}))}></List>
            </nav>
            <nav className={styles.controls}>{children}</nav>
        </div>
        </footer>

	);
}