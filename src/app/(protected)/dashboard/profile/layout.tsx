import { type Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard - Profile',
}

const DashboardProfileLayout: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    return (
        <div>{children}</div>
    )
}

export default DashboardProfileLayout