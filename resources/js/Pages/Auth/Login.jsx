import {Head} from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout.jsx";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import UserLogin from "@/Components/Web/UserLogin.jsx";


export default function Login() {


    return (
        <WebLayout showBgImage={true}>
            <Head title="Login | Dubai E-Visa"/>
            <div className="container h-full">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer/>
                    <UserLogin />
                </div>
            </div>
        </WebLayout>
    );
}
