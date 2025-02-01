const TopSection = ({title, children}) => {
    return (
        <div className="flex justify-between items-center mb-3">
            <h3 className=''>{title}</h3>
            {children}

        </div>
    )
}

export default TopSection
