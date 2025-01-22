import {Field} from '../Containers/Field/Field.tsx'
import {InputEmail, InputPassword} from '../components/Input/Input.tsx'
import { Button } from "../components/Action/Button.tsx";
import {Title} from '../components/Typography/Typography.tsx'

export type LoginFormProps = {
    className?: string;
    formSetting?: Omit<FormProps, 'children'> 
}

export const LoginForm = ({className,formSetting}: LoginFormProps) => {
    return <Form {...formSetting} method = 'post' className={clsx{styles.container, className}}>
        <Title>Sign In</Title>
        <Field>
            <InputEmail name='email' placeholder='email@.com'/>
        </Field>
        <Field>
            <InputPassword name='password' placeholder='password'/>
        </Field>
        <Button type='submit' name='Signin'>Sign In</Button>
    </Form>
}