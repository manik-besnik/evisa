import { assetUrl } from "@/Components/Constant/index.js";
import Search from "@/Components/Web/Search.jsx";
import { Link } from "@inertiajs/react";

const services = [
    {
        title: "Visa Apply",
        img: "images/visa-apply.png",
        link: "visa.create",
    },
    {
        title: "Job Apply",
        img: "images/job-apply.png",
        link: 'job.create',
    },
    {
        title: "Job Demand",
        img: "images/job-demand.png",
        link: "job-demand.create",
    },
    {
        title: "Business",
        img: "images/business.png",
        link: "home",
    },
    {
        title: "Agency",
        img: "images/agency.png",
        link: "agency.create",
    },
    {
        title: "Others",
        img: "images/others.png",
        link: "home",
    }
]

const ServiceCard = ({ img, title, link }) => {
    return (
        <Link href={route(link)}>
            <div
                className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-[#748A96] text-center text-white rounded-sm shadow-md hover:bg-primary-dark transition">
                <img className="w-10 h-10 mb-2" src={assetUrl + img} alt={title} />
                <p className="text-xs font-medium">{title}</p>
            </div>
        </Link>

    )
}
const Hero = () => {
    return (
        <div>
            <div className="hero-top flex flex-col md:flex-row">
                {/* hero1 image - hide on mobile */}
                <div className="hidden md:block relative">
                    <img src={`${assetUrl + 'images/hero1.png'}`} alt="hero1" className="h-auto" />

                    {/* Search bottom-right on desktop */}
                    <div className="absolute bottom-0 right-0">
                        <Search />
                    </div>
                </div>

                {/* hero2 image - shown on all, with Search centered on mobile */}
                <div className="relative w-full">
                    <img src={`${assetUrl + 'images/hero2.png'}`} alt="hero2" className="w-full h-auto" />

                    {/* Search center on mobile only */}
                    <div className="
                md:hidden 
                absolute bottom-0 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2
            ">
                        <Search />
                    </div>
                </div>
            </div>

            {/* Services section */}
            <div className="flex flex-col items-center md:flex-row gap-x-2 mt-4">
                <div className="relative w-56 mb-4 md:mb-0 md:ml-20 hidden md:block">
                    <img
                        className="w-[240px] absolute -left-8 -top-1/2"
                        src={`${assetUrl + 'images/hero-welcome.png'}`}
                        alt="welcome to dubai e-visa"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-x-2 md:ml-0 2xl:ml-52">
                        {services.map((service, i) => (
                            <ServiceCard key={i} title={service.title} img={service.img} link={service.link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero
