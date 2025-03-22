import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { assetUrl } from "@/Components/Constant/index.js";

const Blog = () => {
    const { auth } = usePage().props;
    const countries = usePage().props.countries;

    // Sample blog data - replace this with your actual data fetching logic
    const [blogPosts, setBlogPosts] = useState([
        {
            id: 1,
            image: `${assetUrl + 'images/UAE-Visa.jpg'}`,
            title: "How to Renew Other Emirates Driving License in the UAE?",
            date: "24 FEB",
            readMoreLink: "/blog/renew-emirates-driving-license"
        },
        {
            id: 2,
            image: `${assetUrl + 'images/UAE-Visa.jpg'}`,
            title: "How you can sponsor your family that if you don't have salary of 4000 AED",
            date: "21 FEB",
            readMoreLink: "/blog/sponsor-family-uae"
        },
        {
            id: 3,
            image: `${assetUrl + 'images/UAE-Visa.jpg'}`,
            title: "What happens if you lose your ID in the UAE? Follow these simple steps",
            date: "21 FEB",
            readMoreLink: "/blog/lost-id-uae"
        }
    ]);

    return (
        <WebLayout showBgImage={false} showServiceImage={false}>
            <Head title="UAE Visa Blog | Dubai E-Visa" />

            <div className="container mx-auto px-4 py-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white shadow-md overflow-hidden">
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="w-14 text-center absolute top-0 right-2 bg-green-500 text-white px-3 py-1">
                                    {post.date}
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-4">{post.title}</h2>

                                <hr />
                                <div className="mt-4">
                                    <a
                                        href={post.readMoreLink}
                                        className="text-gray-500 inline-flex items-center"
                                    >
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WebLayout>
    );
};

export default Blog;