
import { ReactNode } from 'react';
import {ListProps} from '../types.tsx'
import { Anchor } from "../../components/Anchor/Anchor";

export const List = ({ links, className }: ListProps) => {
	return (
		<ul>
			{links.map((link, index) => (
				<li key={index}>
					<Anchor href={link.url}>
						<span>{link.linkTitle}</span>
					</Anchor>
				</li>
			))}
		</ul>
	);
};