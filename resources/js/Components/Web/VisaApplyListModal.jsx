import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";
import Table from "@/Components/Table.jsx";
import {visaStatuses} from "@/Components/Constant/index.js";
import { getValue,} from "@/Components/Helper/index.js";
import {FaRegEye} from "react-icons/fa6";
import {Link} from "@inertiajs/react";


const VisaApplyListModal = ({ show, setShow, visaApplies = [] }) => {

    return (
        <Modal show={show} maxWidth='2xl' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>
                <p className="my-2">Search Result</p>
                <Table heading={['SL', 'Name', 'Passport NO', 'Status', 'Action']}>
                    {visaApplies?.length > 0 && visaApplies?.map((application, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{application?.personal_info?.name}</td>
                            <td>{application?.passport?.passport_no}</td>

                            <td>{getValue(visaStatuses, application.status)}</td>
                            <td>
                                <Link href={route('visa-apply.show', application.id)} className='btn-primary'>
                                    <FaRegEye/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </Table>

            </div>

        </Modal>
    )
}

export default VisaApplyListModal;
