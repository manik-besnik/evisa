const InfoSection = ({title, children}) => (
    <div className="mb-4">
        <h2 className="text-md text-gray-700 mb-2">{title}</h2>
        <div className="bg-white rounded-lg shadow-md p-3">{children}</div>
    </div>
)
export default InfoSection
