const Loading = ({stage = "Scanning"}) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
            <div className="text-center">
                <div className="flex justify-center space-x-4 mb-8">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full bg-primary animate-bubble`}
                            style={{animationDelay: `${index * 0.15}s`}}
                        ></div>
                    ))}
                </div>
                <p className="text-white text-xl font-semibold animate-pulse">{stage}</p>

            </div>
        </div>
    )
}

export default Loading

