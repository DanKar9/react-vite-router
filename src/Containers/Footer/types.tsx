export interface LinkTo {
	linkTitle: string;
	url: string;
}

export type Column  = {
	columnTitle: string;
	links: LinkTo[];
};

export type FooterProps = {
  className?: string;
  columns: Column[];
};