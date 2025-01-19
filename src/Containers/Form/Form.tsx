import {FormProps} from '../types.tsx'

    export const Form = ({children, Tag = 'form' , ...props}:FormProps) => {
        return <Tag {...props}>
            {children}
        </Tag>
    }


    