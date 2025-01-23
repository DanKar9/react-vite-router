import {Field} from '../../Containers/Field/Field.tsx'
import {Form} from '../../Containers/Form/Form.tsx'
import {InputEmail, InputPassword} from '../../components/Input/Input.tsx'
import { Button } from "../../components/Action/Button.tsx";
import {Title} from '../../components/Typography/Typography.tsx'

export interface LoginFormProps {
	email: string;
	password: string;
	onEmailChange: (email: string) => void;
	onPasswordChange: (password: string) => void;
	onSubmit: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
	email,
	password,
	onEmailChange,
	onPasswordChange,
	onSubmit,
}) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
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
			<Button>Login</Button>
		</form>
	);
};

export default LoginForm;