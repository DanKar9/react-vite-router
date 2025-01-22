import {Field} from '../Containers/Field/Field.tsx'
import {InputEmail, InputPassword,InputText} from '../components/Input/Input.tsx'
import { Button } from "../components/Action/Button.tsx";
import {Title} from '../components/Typography/Typography.tsx'

export type RigisterFormProps = {
    className?: string;
    formSetting?: Omit<FormProps, 'children'> 
}

export const RegisterForm = ({className,formSetting}: RegisterFormProps) => 
    return <Form {...formSetting} method = 'post' className={clsx{styles.container, className}}>
        <Title>Sign Up</Title>
        <Field>
            <InputText name='name' placeholder='Name'/>
        </Field>
        <Field>
        <Field>
            <InputEmail name='email' placeholder='Name'/>
        </Field>
        <Field>
            <InputPassword name='password' placeholder='password'/>
        </Field>
        <Field>
            <InputPassword  placeholder='Repeat Password'/>
        </Field>
        <Button type='submit' name='Signuo'>Sign Up</Button>
    </Form>
