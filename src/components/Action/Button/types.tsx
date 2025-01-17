

export interface ButtonProps {
	primary?: boolean;
    className?: string;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;

}