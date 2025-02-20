import { type Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard - Notifications',
}

const DashboardNotificationsLayout: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    return (
        <div>{children}</div>
    )
}

export default DashboardNotificationsLayout