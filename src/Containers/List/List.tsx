
import { ReactNode } from 'react';
import {ListProps} from '../types.tsx'

export const List = ({ links, className }: ListProps) => {
	return (
		<ul>
			{links.map((link, index) => (
				<li key={index}>
					<Anchor href={link.url}>
						{link.linkIcon}
						<span>{link.linkTitle}</span>
					</Anchor>
				</li>
			))}
		</ul>
	);
};