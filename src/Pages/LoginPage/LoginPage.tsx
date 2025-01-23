import { Section } from "../../Containers/Section/Section.tsx";
import { LoginForm, LoginFormProps } from "../../screens/LoginForm/LoginForm.tsx";

export const LoginPage = ({className, formSetting} :LoginFormProps) => {
    return <main>
    <Section>
        <LoginForm formSetting={formSetting}></LoginForm>
    </Section>
    </main>
}