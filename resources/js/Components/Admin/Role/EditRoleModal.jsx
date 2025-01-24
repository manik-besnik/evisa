import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";
import InputBox from "@/Components/InputBox.jsx";
import {useForm} from "@inertiajs/react";
import {permissions} from "@/Components/Constant/index.js";
import Checkbox from "@/Components/Checkbox.jsx";
import {useEffect} from "react";
import {toast} from "react-toastify";


const EditRoleModal = ({role, show, setShow}) => {
    const {data, setData, put} = useForm({
        id: null,
        name: '',
        permissions: []
    })

    useEffect(() => {

        setData('permissions', [])
        setData('id', role.id)
        setData('name', role.name)
        if (role.permissions?.length) {
            setData('permissions', role.permissions)
        }
    }, [JSON.stringify(role)]);

    const handleConfirmSubmit = (e) => {
        e.preventDefault();
        put(route('admin.roles.update', data.id), {
            onSuccess: () => {

                setShow(false)
                toast.success('Role updated Successfully')
            },
            onError: () => {
                toast.error('Role update Failed')
            }
        })

    }

    return (
        <Modal show={show} maxWidth='xl' onClose={() => setShow(false)}>
            <div className="p-[30px] relative min-h-[400px]">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>

                <div className="mb-6">
                    <p>Edit Role</p>
                </div>
                <div>
                    <form className='flex flex-col' onSubmit={handleConfirmSubmit}>

                        <div>
                            <InputBox value={data.name} onChange={(e) => setData('name', e.target.value)}/>
                        </div>

                        <div>
                            <div className='grid grid-cols-3 gap-2 mt-3'>
                                {permissions.map((permission, index) => (

                                    <label key={index} htmlFor={`permission-${index}`}
                                           className="flex cursor-pointer items-center space-x-1">
                                        <Checkbox
                                            id={`permission-${index}`}
                                            checked={data.permissions?.includes(permission.value)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setData('permissions', [...data.permissions, permission.value]);
                                                } else {
                                                    setData('permissions', data.permissions?.filter((p) => p !== permission.value));
                                                }
                                            }}
                                        />
                                        <span>{permission.name}</span>
                                    </label>

                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 absolute bottom-[30px] right-[30px]">
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

export default EditRoleModal;
