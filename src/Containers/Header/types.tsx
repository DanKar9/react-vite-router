export type NavLink = {
	label: string | ReactNode;
	href: string;
};

export type HeaderProps = {
  className?: string;
	navigation: NavLink[];
	children?: ReactNode;
};