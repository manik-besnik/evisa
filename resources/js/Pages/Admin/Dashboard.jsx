import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Dashboard({ auth, data }) {
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div>
                <div className="w-full mx-auto">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4 mt-4">
                <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                    
                    <p class="text-theme-sm text-gray-500 dark:text-gray-400">
                        Total Agent
                    </p>

                    <div class="mt-3 flex items-end justify-between">
                        <div>
                            <h4 class="text-2xl font-bold text-gray-800 dark:text-white/90">
                                {data.agent}
                            </h4>
                        </div>

                    </div>
                    
                </div>
                <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                <Link href={route('admin.visa-applies.index')}>
                    <p class="text-theme-sm text-gray-500 dark:text-gray-400">
                        Total Visa Apply
                    </p>

                    <div class="mt-3 flex items-end justify-between">
                        <div>
                            <h4 class="text-2xl font-bold text-gray-800 dark:text-white/90">
                                    {data.visaAppliesCount}
                            </h4>
                        </div>

                       
                    </div>
                    </Link>
                </div>
               
                <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                    <p class="text-theme-sm text-gray-500 dark:text-gray-400">
                        Total Job Apply
                    </p>

                    <div class="mt-3 flex items-end justify-between">
                        <div>
                            <h4 class="text-2xl font-bold text-gray-800 dark:text-white/90">
                                55.9K
                            </h4>
                        </div>

                        
                    </div>
                </div>
                
                <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                    <p class="text-theme-sm text-gray-500 dark:text-gray-400">Total Job Demand</p>

                    <div class="mt-3 flex items-end justify-between">
                        <div>
                            <h4 class="text-2xl font-bold text-gray-800 dark:text-white/90">54%</h4>
                        </div>

                    </div>
                </div>
                
                <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
                    <p class="text-theme-sm text-gray-500 dark:text-gray-400">Total CV</p>

                    <div class="mt-3 flex items-end justify-between">
                        <div>
                            <h4 class="text-2xl font-bold text-gray-800 dark:text-white/90">
                                2m 56s
                            </h4>
                        </div>

                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
