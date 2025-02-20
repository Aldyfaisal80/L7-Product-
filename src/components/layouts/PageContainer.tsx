type PageContainerProps = {
    children: React.ReactNode;
    className?: string;
    title?: string;
};

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <main className={`${className}`}>
            <h1 className="py-4 text-xl">{props.title}</h1>
            {children}
        </main>
    )
}
