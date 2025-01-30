export default function JobCard() {
    return (
        <div className="bg-pink-200 p-4 rounded-2xl shadow-lg border w-full">

            <div className="flex justify-between items-center text-gray-600 text-sm">
                <span>12 May, 2023</span>
            </div>

            <div className="mt-2">
                <p className="text-gray-700 text-sm">Microsoft</p>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
            </div>


            <div className="mt-4 flex justify-between items-center text-gray-800 font-semibold">
                <p>$176/hr</p>
                <p className="text-gray-600 text-sm">Redmond, WA</p>
            </div>

            <button className="w-full mt-3 bg-black text-white py-2 rounded-lg">
                Details
            </button>
        </div>
    );
}
