import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";


const DeleteConfirmModal = ({
                          show,
                          setShow,
                          imageURL
                      }) => {
    return (
        <Modal show={show} maxWidth='2xl' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>

                <div className="mb-6">
                    <p className="mb-4">Document View</p>
                    <div>
                        <img src={imageURL} className="w-full h-auto rounded" alt="image-preview"/>
                    </div>

                </div>
                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => setShow(false)} className='app-btn'>Cancel</button>

                </div>
            </div>

        </Modal>
    )
}

export default DeleteConfirmModal;
