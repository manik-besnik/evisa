import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";
import InputBox from "@/Components/InputBox.jsx";
import {useForm} from "@inertiajs/react";
import {permissions} from "@/Components/Constant/index.js";
import Checkbox from "@/Components/Checkbox.jsx";
import {toast} from 'react-toastify';


const CreateRoleModal = ({show, setShow}) => {
    const {data, setData, post} = useForm({
        name: '',
        permissions: []
    })
    const handleConfirmSubmit = (e) => {
        e.preventDefault();

        post(route('admin.roles.store'), {
            onSuccess: () => {
                toast.success('Role Added Successfully')
            }
        })

        setShow(false)

    }

    return (
        <Modal show={show} maxWidth='2xl' onClose={() => setShow(false)}>
            <div className="p-[30px] relative min-h-[400px]">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>

                <div className="mb-6">
                    <p>Add Role</p>
                </div>
                <div>
                    <form className='flex flex-col' onSubmit={handleConfirmSubmit}>

                        <div>
                            <InputBox placeholder="Enter Role" value={data.name}
                                      onChange={(e) => setData('name', e.target.value)}/>
                        </div>

                        <div>
                            <div className='h-[360px] grid grid-cols-3 gap-x-2 gap-y-1 mt-3'>
                                {permissions.map((permission, index) => (

                                    <label key={index} htmlFor={`add-permission-${index}`}
                                           className="flex cursor-pointer items-center space-x-1">
                                        <Checkbox
                                            id={`add-permission-${index}`}
                                            checked={data.permissions.includes(permission.value)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setData('permissions', [...data.permissions, permission.value]);
                                                } else {
                                                    setData('permissions', data.permissions.filter((p) => p !== permission.value));
                                                }
                                            }}
                                        />
                                        <span className="text-sm">{permission.name}</span>
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

export default CreateRoleModal;
