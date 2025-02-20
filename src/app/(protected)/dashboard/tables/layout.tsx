import { type Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard - Tables',
}

const DashboardTablesLayout: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    return (
        <div>{children}</div>
    )
}

export default DashboardTablesLayout