import {assetUrl} from "@/Components/Constant/index.js";
import Search from "@/Components/Web/Search.jsx";
import {Link} from "@inertiajs/react";

const services = [
    {
        title: "Visa Apply",
        img: "images/visa-apply.png",
        link: "visa.apply",
    },
    {
        title: "Job Apply",
        img: "images/job-apply.png",
        link: "home",
    },
    {
        title: "Job Demand",
        img: "images/job-demand.png",
        link: "home",
    },
    {
        title: "Business",
        img: "images/business.png",
        link: "home",
    },
    {
        title: "Agency",
        img: "images/agency.png",
        link: "home",
    },
    {
        title: "Others",
        img: "images/others.png",
        link: "others",
    }
]

const ServiceCard = ({img, title, link}) => {
    return (
        <Link href={route(link)}>
            <div
                className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-primary text-center text-white rounded-sm shadow-md hover:bg-primary-dark transition">
                <img className="w-10 h-10 mb-2" src={assetUrl + img} alt={title}/>
                <p className="text-xs font-medium">{title}</p>
            </div>
        </Link>

    )
}
const Hero = () => {
    return (
        <div className="w-11/12 mb-2">
            <div className="hero-top flex">
                <div className="relative">
                    <img src={`${assetUrl + 'images/hero1.png'}`} alt="hero"/>
                    <div className="absolute bottom-0 right-0">
                        <Search/>
                    </div>
                </div>
                <div>
                    <img src={`${assetUrl + 'images/hero2.png'}`} alt="hero"/>
                </div>
            </div>
            <div className="flex gap-x-2 mt-4">
                <div className="ml-20 w-56 relative">
                    <img className="w-[240px] absolute -left-8 -top-1/2"
                         src={`${assetUrl + 'images/hero-welcome.png'}`}
                         alt="welcome to dubai e-visa"/>
                </div>
                <div className="flex gap-x-2">
                    {services.map((service, i) => (
                        <ServiceCard key={i} title={service.title} img={service.img} link={service.link}/>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Hero
