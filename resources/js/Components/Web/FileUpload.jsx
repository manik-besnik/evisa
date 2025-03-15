import {useState} from "react";
import {GrAttachment} from "react-icons/gr";

const InputFile = ({
                       defaultClasses = "w-full h-auto",
                       classes = '',
                       placeholder = '',
                       onChange,
                       fileType = '',
                       error = "",
                       children = null
                   }) => {

    const [fileName, setFileName] = useState(placeholder);
    const [readFile, setReadFile] = useState(null)

    const handleUploadFile = (e) => {
        const file = e.target.files[0]

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg', 'application/pdf'];
            if (!validTypes.includes(file.type)) {

                setFileName(placeholder);
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setReadFile(reader.result);
            };

            reader.readAsDataURL(file);

            onChange(fileType, file)

            setFileName("Attached");
        } else {
            setFileName(placeholder);
        }
    }

    return (
        <div
            className={`${defaultClasses} ${classes} ${fileName !== placeholder ? "bg-[#aec0d5]" : 'bg-[#E0EBF8]'}`}>
            <label className="w-full h-full cursor-pointer"
                   htmlFor={`file-upload-${fileType}`}>
                <input
                    onChange={(e) => handleUploadFile(e)}
                    id={`file-upload-${fileType}`}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,.webp"
                    className="hidden"
                />

                {readFile ? (
                    <div className="flex items-center justify-center">
                        <img src={readFile} className="w-auto h-40 text-center" alt="Uploaded file"/>
                    </div>
                ) : (
                    children ? children : (
                        <div className="flex flex-col items-center">
                            <GrAttachment size={15}/>
                            <p className="text-xs break-words">{fileName ? fileName : placeholder}</p>
                        </div>
                    )
                )}
                {error && <p className="text-xs text-warning">{error}</p>}


            </label>
        </div>
    )
}


export default InputFile
