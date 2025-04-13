import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head } from "@inertiajs/react";
import { assetUrl } from "@/Components/Constant/index.js";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";

const Agency = () => {
    return (
        <WebLayout showBgImage={true}>
            <Head title="Other | Dubai E-Visa" />
            <div className="px-6">
                <div className="flex gap-x-10">
                    <div className="bg-amber-50 p-6 shadow-md w-7/12">
                        <h2 className="font-semibold mb-4 text-[16px]">Partnerships are made at 3 levels. See the table below for all the benefits and information:</h2>

                        <div className="mb-4">
                            <h3 className="font-bold text-[16px]">Introduction:</h3>
                            <p className="text-gray-700 text-[14px]">
                                This is an agreement to use our software. Through this software, a transparent live update management system
                                portal has been created for job and visa applications. So that applicants, agencies and service holders do not
                                have any doubts about transparency and trust in all matters, and the highest services can be provided.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold text-[16px]">Our agency services:</h3>
                            <p className="text-gray-700 text-[14px]">There are 3 levels of partnership. See the table below for all the benefits and information:</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-amber-600 text-white">
                                        <th className="border border-amber-700 p-2 text-left text-[16px]">PARTNERSHIP TIER</th>
                                        <th className="border border-amber-700 p-2 text-left text-[16px]">ABOUT</th>
                                        <th className="border border-amber-700 p-2 text-left text-[16px]">BENEFITS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-amber-200 p-2">
                                            <span className="font-semibold text-[15px]">Referral Partnership or abbreviated as (RP)</span>
                                        </td>
                                        <td className="border border-amber-200 p-2 text-[14px]">
                                            First Level ; Referral Partnership<br />
                                            Affiliates cannot use our services for themselves, only for their clients and
                                            the sole purpose is to refer clients to us and apply for services for their clients.
                                        </td>
                                        <td className="border border-amber-200 p-2 text-[14px]">
                                            <ul className="list-disc pl-5">
                                                <li>Portal Access</li>
                                                <li>Eligible for 5% commission after successfully completing 10 client services and transactions</li>
                                                <li>Entry Level Partnership</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    <tr className="bg-white">
                                        <td className="border border-amber-200 p-2">
                                            <span className="font-semibold text-[15px]">Channel Partnership or abbreviated as (CP)</span>
                                        </td>
                                        <td className="border border-amber-200 p-2 text-[14px]">
                                            Second Level; Channel Partnership (CP)<br />
                                            To be promoted, a CP must successfully complete 100 client services and
                                            transactions or a deposit of $5,000 (refundable) provided by the RP in
                                            which a designated user will be given with priority and commission benefits
                                            upon qualification.
                                        </td>
                                        <td className="border border-amber-200 p-2 text-[14px]">
                                            <ul className="list-disc pl-5">
                                                <li>Portal Access</li>
                                                <li>Eligible for office setup</li>
                                                <li>5% to 10% commission</li>
                                                <li>Higher priority than RP</li>
                                                <li>Advance credit of $5000</li>
                                            </ul>
                                        </td>
                                    </tr>

                                    <tr className="bg-white">
                                        <td className="border border-amber-200 p-2">
                                            <span className="font-semibold text-[15px]">Official Partnership or abbreviated as (OP)</span>
                                        </td>
                                        <td className="border border-amber-200 p-2 text-[14px]">
                                            Third level ; Official Partnership (OP)<br />
                                            The most advantageous level, qualifying with a deposit of 10,000$
                                            (refundable) by the CP. They will be able to access our services themselves,
                                            a visa will be provided to someone who can successfully complete the services
                                            and they will receive additional commissions on activities outside the
                                            specified commission. See the table for more information.
                                        </td>
                                        <td className="border border-amber-200 p-2 text-[14px]">
                                            <ul className="list-disc pl-5">
                                                <li>Portal Access</li>
                                                <li>Representative can apply for sponsorship</li>
                                                <li>Office & branding will be provided</li>
                                                <li>10% to 30% commission (depending on client service)</li>
                                                <li>Advance credit of $20000</li>
                                                <li>Highest priority</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="w-1/5 h-[72vh]">
                        <div className="bg-gray-700 h-full relative">
                            <img className="w-full h-auto" src={`${assetUrl + 'images/agent_dashboard.png'}`} alt="" />
                            <div className="absolute top-[60%] w-full p-5 flex flex-col gap-y-2">
                                <PrimaryBtn btnClasses="uppercase" text="Referral Partner" />
                                <PrimaryBtn btnClasses="uppercase" text="Channel Partner" />
                                <PrimaryBtn btnClasses="uppercase" text="Official Partner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Agency;