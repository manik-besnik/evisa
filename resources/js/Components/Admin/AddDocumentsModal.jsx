import Close from "@/Components/SvgIcons/Close.jsx";
import InputBox from "@/Components/InputBox.jsx";
import Modal from "@/Components/Modal.jsx";
import {useForm, usePage} from "@inertiajs/react";
import {FaPlus} from "react-icons/fa6";
import {FaTrashAlt} from "react-icons/fa";
import {useState} from "react";
import {toast} from "react-toastify";


const InputFile = ({
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

            setFileName(file.name);
        } else {
            setFileName(placeholder);
        }
    }

    return (
        <div className={`${classes} bg-side-and-button placeholder:text-t-secondary rounded sm:rounded-[6px] p-2`}>
            <label className="flex items-center justify-center w-full cursor-pointer"
                   htmlFor={`file-upload-${fileType}`}>
                <input
                    onChange={(e) => handleUploadFile(e)}
                    id={`file-upload-${fileType}`}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,.webp"
                    className="hidden"
                />
                <p className="text-xs break-words">{fileName ? fileName : placeholder}</p>
                {error && <p className="text-xs text-warning">{error}</p>}
            </label>
        </div>
    )
}

const AddDocumentsModal = ({show, setShow}) => {

    const {visa_apply, errors} = usePage().props;

    const {data, setData, post} = useForm({
        documents: [
            {
                name: "",
                file: null,
            }
        ]
    })

    const addNewDocument = () => {
        const document = {
            name: "",
            file: "",
        }

        const documents = [
            ...data.documents,
            document
        ]

        setData('documents', documents)
    }

    const deleteDocument = (i) => {

        data.documents.splice(i, 1)

        setData('documents', data.documents)

    }
    const updateDocuments = (index, key, value) => {
        const updatedDocuments = [...data.documents];

        updatedDocuments[index] = {
            ...updatedDocuments[index],
            [key]: value

        };

        setData('documents', updatedDocuments);
    };

    const handleConfirmSubmit = (e) => {
        e.preventDefault();

        post(route('admin.visa-applies.add-document', visa_apply.id), {
            onError: (errors) => {
                toast.error("Something is Missing")
            },
            onSuccess: () => {
                setShow(false);
                setData('documents', [
                    {
                        name: "",
                        file: null,
                    }
                ])
            }
        })
    }


    return (
        <Modal show={show} maxWidth='2xl' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>

                <div className="mb-6 flex justify-between mr-10">
                    <p>Add Documents</p>
                    <button type="button" onClick={addNewDocument}
                            className="btn-primary">
                        <FaPlus/> Add New Document
                    </button>
                </div>
                <div>
                    <form className='flex flex-col' onSubmit={handleConfirmSubmit}>

                        <div>
                            {data.documents.map((item, i) => (
                                <div key={i} className="flex items-end gap-2">
                                    <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 items-end gap-x-2">
                                        <div>
                                            <span className="block text-sm mb-1">Name*</span>
                                            <InputBox
                                                placeholder="EX: Visa Document"
                                                classes="h-26 py-1"
                                                label="Name"
                                                value={item.name}
                                                onChange={(e) => updateDocuments(i, "name", e.target.value)}
                                                error={errors?.documents ? errors?.documents[i]?.name : ""}
                                            />


                                        </div>

                                        <InputFile
                                            classes="w-full h-9" placeholder="Select File"
                                            onChange={(fileType, file) => updateDocuments(i, 'file', file)}
                                        />

                                    </div>


                                    {i > 0 &&
                                        (<button type="button" onClick={() => deleteDocument(i)}
                                                 className="bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-7 flex item-center justify-between rounded">
                                            <FaTrashAlt/>
                                        </button>)
                                    }
                                </div>
                            ))}

                        </div>


                        <div className="flex justify-end gap-4 mt-4">
                            <button type="button" onClick={() => setShow(false)} className='app-btn'>Cancel</button>
                            <button type="submit" onClick={handleConfirmSubmit}
                                    className='app-btn bg-card-and-hover'>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </Modal>
    )
}

export default AddDocumentsModal
