import { AuthLayout as AuthLayoutComponent } from '@/components/layouts/AuthLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Auth'
}

const AuthLayout: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    return (
        <AuthLayoutComponent>{children}</AuthLayoutComponent>
    )
}

export default AuthLayout