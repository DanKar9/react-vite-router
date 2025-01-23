export type Link = {
	url: string;
	linkTitle?: string | ReactNode;
}

export type ListProps = {
	links: Link[];
	className?: string;
};