import {ToastContainer} from 'react-toastify';
import Topbar from "@/Components/Web/Topbar.jsx";
import Navbar from "@/Components/Web/Navbar.jsx";
import ServiceImage from "@/Components/Web/ServiceImage.jsx";
import {assetUrl} from "@/Components/Constant/index.js";

export default function WebLayout({children, showServiceImage = true, showBgImage = false}) {

    return (
        <div className='min-h-screen'>
            <Topbar/>
            <Navbar/>

            <div
                style={{
                    backgroundImage: showBgImage
                        ? `url(${assetUrl}images/bg.png)`
                        : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                {children}

                {showServiceImage && <div className="container relative">
                    <div className="absolute bottom-5 right-0">
                        <ServiceImage/>
                    </div>
                </div>}
            </div>

            <ToastContainer/>
        </div>
    );
}
