import {useState} from "react";
import { GrAttachment } from "react-icons/gr";

const InputFile = ({
                       defaultClasses = "w-[70px] h-[70px] ",
                       classes = '',
                       placeholder = '',
                       onChange,
                       fileType = '',
                       error = ""
                   }) => {

    const [fileName, setFileName] = useState(placeholder);

    const handleUploadFile = (e) => {
        const file = e.target.files[0]

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg', 'application/pdf'];
            if (!validTypes.includes(file.type)) {

                setFileName(placeholder);
                return;
            }

            onChange(fileType, file)

            setFileName("Attached");
        } else {
            setFileName(placeholder);
        }
    }

    return (
        <div className={`${defaultClasses} ${classes} bg-[#E0EBF8] border-l-4 border-l-primary p-2 ${fileName !== placeholder ? "bg-[#aec0d5]" : 'bg-[#E0EBF8]'}`}>
            <label className="flex items-center justify-center w-full h-full cursor-pointer"
                   htmlFor={`file-upload-${fileType}`}>
                <input
                    onChange={(e) => handleUploadFile(e)}
                    id={`file-upload-${fileType}`}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,.webp"
                    className="hidden"
                />

                <div className="flex gap-x-2 items-center">
                    <GrAttachment size={15}/>
                    <p className="text-xs break-words">{fileName ? fileName : placeholder}</p>
                </div>
                {error && <p className="text-xs text-warning">{error}</p>}
            </label>
        </div>
    )
}


export default InputFile
