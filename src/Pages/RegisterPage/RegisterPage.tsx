import { Section } from "../../Containers/Section/Section.tsx";
import { RegisterForm, RegisterFormProps } from "../../screens/RegisterForm/RegisterForm.tsx";

export const RegisterPage = (formSetting :RegisterFormProps) => {
    return <main>
    <Section>
        <RegisterForm formSetting={formSetting}></RegisterForm>
    </Section>
    </main>
}