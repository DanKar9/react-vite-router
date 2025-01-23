export interface RegisterProps {
    onSubmit: (
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    ) => void
} 