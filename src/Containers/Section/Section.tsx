import React from 'react';
import { SectionProps } from './types';


export const Section: React.FC<SectionProps> = ({ children }) => {
	return <section>{children}</section>;
};
