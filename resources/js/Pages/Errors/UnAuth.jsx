import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head} from "@inertiajs/react";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";


const UnAuth = () => {
    return (
        <WebLayout showBgImage={true}>
            <Head title="Login | Dubai E-Visa"/>
            <div className="container h-full">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer/>
                </div>
            </div>
        </WebLayout>
    );
}

export default UnAuth
