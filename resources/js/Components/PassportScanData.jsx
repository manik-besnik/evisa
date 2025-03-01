import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";

const PassportScanData = ({
                              show,
                              setShow,
                              setData,
                              passportInfo
                          }) => {


    const setAllData = () => {
        setData(passportInfo);
        setShow(false);
    };
    const toTitleCase = (str) => {
        return str
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };
    return (
        <Modal show={show} maxWidth='2xl' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>

                <div className="mb-6">
                    <p>Passport Scan Result</p>
                </div>

                <div className="mb-6">
                    {passportInfo && Object.keys(passportInfo).map((key) => (
                        <div key={key} className="flex gap-2 items-center justify-between mb-2 text-md">
                            <div>
                                <span className="text-sm">{toTitleCase(key)}: </span>
                                <span className="text-sm">{passportInfo[key] || 'N/A'}</span>
                            </div>
                            {passportInfo[key] && <button className="btn-primary" onClick={()=> setData(key,passportInfo[key])}>Accept</button>}
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => setShow(false)} className="app-btn">Cancel</button>
                    <button type="button" onClick={setAllData} className="app-btn bg-card-and-hover">Accept All</button>
                </div>
            </div>
        </Modal>
    );
}

export default PassportScanData;
