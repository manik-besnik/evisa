import {toast, ToastContainer} from 'react-toastify';
import Topbar from "@/Components/Web/Topbar.jsx";
import Navbar from "@/Components/Web/Navbar.jsx";
import ServiceImage from "@/Components/Web/ServiceImage.jsx";
import {assetUrl} from "@/Components/Constant/index.js";
import {usePage} from "@inertiajs/react";
import {useEffect} from "react";

export default function WebLayout({children, showServiceImage = true, showBgImage = false}) {

    const {flash, errors} = usePage().props;

    useEffect(() => {
        if (flash?.success) {
            toast(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
        if (errors?.message) {
            toast.error(errors.message);
        }
    }, [flash, errors]);

    return (
        <div className='min-h-screen'>
            <Topbar/>
            <Navbar/>

            <div className='relative' 
                style={{
                    backgroundImage: showBgImage
                        ? `url(${assetUrl}images/bg.png)`
                        : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                {children}

                {showServiceImage && (
                    <div className="container relative">
                        <div className="absolute bottom-5 right-0 hidden md:block">
                            <ServiceImage />
                        </div>
                    </div>
                )}

                
            </div>

            <ToastContainer/>
        </div>
    );
}
