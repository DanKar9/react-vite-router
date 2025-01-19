import {CardProps} from '../types.tsx'

    export const Card = ({children, Tag = 'a' , ...props}:CardProps) => {
        return <Tag {...props}>
            {children}
        </Tag>
    }


    