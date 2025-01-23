import React, { ChangeEvent } from 'react';
import {Field} from '../../Containers/Field/Field.tsx'
import { Button } from "../../components/Action/Button.tsx";


export interface RegisterFormProps {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    onNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onRepeatPasswordChange: (confirmPassword: string) => void;
    onSubmit: (
        name: string,
        email: string,
        password: string,
        repeatPassword: string
    ) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
    name,
    email,
    password,
    repeatPassword,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onRepeatPasswordChange,
    onSubmit,
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, email, password, repeatPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Field
                fieldText="Имя"
                type="text"
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onNameChange(event.target.value)
                }
            />
            <Field
                fieldText="Почта"
                type="email"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onEmailChange(event.target.value)
                }
            />
            <Field
                fieldText="Пароль"
                type="password"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onPasswordChange(event.target.value)
                }
            />
            <Field
                fieldText="Подтверждение пароля"
                type="password"
                value={repeatPassword}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onRepeatPasswordChange(event.target.value)
                }
            />
            <Button>Register</Button>
        </form>
    );
};