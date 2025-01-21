export type FooterLink = {
	label: string | ReactNode;
	href: string;
};

export type FooterProps = {
  className?: string;
	navigation: FooterLink[];
	children?: ReactNode;
};