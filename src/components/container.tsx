interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto xl:px-10 md:px-6 max-sm:px-4">
            {children}
        </div>
    )
}

export default Container