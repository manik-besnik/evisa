import {Head} from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout.jsx";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import UserLogin from "@/Components/Web/UserLogin.jsx";


export default function Login() {


    return (
         <WebLayout showBgImage={true}>
                    <Head title="Login | Dubai E-Visa" />
                    <div className="container h-full">
                        {/* Desktop and Tablet Layout (768px and above) */}
                        <div className="hidden md:grid md:grid-cols-2 gap-x-20">
                            <SearchContainer />
                            <UserLogin />
                        </div>
        
                        {/* Mobile Layout (below 768px) - Only UserLogin */}
                        <div className="block md:hidden">
                            <UserLogin />
                        </div>
                    </div>
                </WebLayout>
    );
}
