export default function PrimaryBtn({text, onClick, type = 'button',classes=''}) {
    return (
        <div className={`"flex items-center justify-center" ${classes}`}>
            <button
                type={type}
                onClick={onClick}
                className="w-full max-w-[240px] py-2 bg-yellow-500 hover:bg-primary text-gray-800 font-medium
        shadow-[2px_2px_4px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)]
        transition-shadow duration-200"
            >
                {text}
            </button>
        </div>
    )
}
