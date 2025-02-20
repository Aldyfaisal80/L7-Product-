import { Container } from "./Container"


type AuthLayoutProps = {
    children: React.ReactNode
    className?: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    className
}) => {
    return (
        <Container className={`${className}`}>{children}</Container>
    )
}