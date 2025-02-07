const InfoItem = ({label, value}) => (
    <div className="mb-2 last:mb-0">
        <span className="text-sm text-gray-500">{label}</span>
        <p className="text-gray-800">{value ?? "N/A"}</p>
    </div>
)

export default InfoItem
