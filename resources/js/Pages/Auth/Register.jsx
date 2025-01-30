import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head } from "@inertiajs/react";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import UserRegister from "@/Components/Web/UserRegister.jsx";
import UserLogin from "@/Components/Web/UserLogin.jsx";

const Register = () => {
    return (
        <WebLayout showBgImage={true}>
            <Head title="Register | Dubai E-Visa" />
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20 w-full h-full">
                    <SearchContainer />
                    <UserLogin isRegister={true} />
                </div>
            </div>
        </WebLayout>
    );
};

export default Register;
