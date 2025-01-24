import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";
import InputBox from "@/Components/InputBox.jsx";
import {useForm, usePage} from "@inertiajs/react";
import {toast} from 'react-toastify';
import Select from "@/Components/Select.jsx";
import React, {useState} from "react";


const CreateAdminModal = ({show, setShow}) => {

    const roles = usePage().props.roles

    const {data, setData, post} = useForm({
        name: '',
        email: '',
        role_id: '',
        role: 1,
        password: ''
    })

    const [adminRole, setAdminRole] = useState(null)

    const handleChangeRole = (role) => {
        setData('role_id', role.id)
    }

    const handleConfirmSubmit = (e) => {
        e.preventDefault();

        post(route('admin.admins.store'), {
            onSuccess: () => {
                toast.success('Admin Added Successfully')
            }
        })

        setShow(false)
    }

    return (
        <Modal show={show} maxWidth='xl' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>

                <div className="mb-6">
                    <p>Add Admin</p>
                </div>
                <div>
                    <form className='flex flex-col gap-2' onSubmit={handleConfirmSubmit}>

                        <div>
                            <InputBox
                                placeholder="Enter Admin Name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                        </div>
                        <div>
                            <InputBox
                                placeholder="Enter Admin Email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                        </div>
                        <div>
                            <InputBox
                                placeholder="Enter Admin Password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                        </div>

                        <div className='w-full'>
                            <Select items={roles}
                                    placeholder="Select Role"
                                    selected={adminRole}
                                    setSelected={setAdminRole}
                                    handleValueChange={handleChangeRole}
                            />
                        </div>


                        <div className="flex justify-end gap-4">
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

export default CreateAdminModal;
