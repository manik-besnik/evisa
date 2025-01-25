import {Head} from "@inertiajs/react";
import Hero from "@/Components/Web/Hero.jsx";
import WebLayout from "@/Layouts/WebLayout.jsx";


export default function Home() {


    return (
        <WebLayout>
            <Head title="Home | Dubai E-Visa"/>
            <Hero />
        </WebLayout>
    );
}
