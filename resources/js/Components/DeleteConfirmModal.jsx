import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";


const DeleteConfirmModal = ({
                          show,
                          setShow,
                          handleConfirmDelete,
                          title = 'Delete Item',
                          subTitle = "Are you sure want to delete this item?"
                      }) => {
    return (
        <Modal show={show} maxWidth='sm' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>

                <div className="mb-6">
                    <p>{title}</p>
                    <p className="mt-2">{subTitle}</p>
                </div>
                <div className="flex justify-end gap-4">
                    <button type="button" onClick={() => setShow(false)} className='app-btn'>Cancel</button>
                    <button type="button" onClick={handleConfirmDelete}
                            className='app-btn bg-card-and-hover'>Confirm Delete
                    </button>
                </div>
            </div>

        </Modal>
    )
}

export default DeleteConfirmModal;
