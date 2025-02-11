import {Link, usePage} from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import BarIcon from '@/Components/SvgIcons/Bar';
import Avatar from "@/Components/SvgIcons/Avatar.jsx";
import Notification from "@/Components/Admin/Notification.jsx";

export default function NavBar({useToggleSideNav}) {


    const user = usePage().props.auth.user;


    return (
        <div className='flex justify-between py-1.5 px-4 lg:py-4 bg-white lg:rounded-[8px]'>

            <div className='hidden lg:flex items-center gap-[10px]'>
                <Link href={route('admin.admins.index')}
                      className={`${route().current() === 'admin.admins.index' && 'bg-card-and-hover'} px-3 py-2 text-[14px] font-medium leading-[20px] text-text-primary hover:bg-side-and-button rounded-md`}> Admins
                </Link>
                <Link href={route('admin.roles.index')}
                      className={`${route().current() === 'admin.roles.index' && 'bg-card-and-hover'} px-3 py-2 text-[14px] font-medium leading-[20px] text-text-primary hover:bg-side-and-button rounded-md`}> Roles
                </Link>
            </div>

            <button className='lg:hidden' onClick={() => useToggleSideNav(true)}>
                <BarIcon/>
            </button>


            <div className='flex items-center gap-5'>
                <Notification/>
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 font-medium text-xs md:text-sm text-text-primary"
                            >
                                <span>Profile</span>

                                {user?.avatar ?
                                    <img className='h-5 w-5 md:h-9 md:w-9 border border-focus-outline rounded'
                                         src={user.avatar} alt={user.name}/> : <Avatar width="20" height="20"/>}
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>
                            Profile
                            <p className='text-xs text-t-secondary'>{user?.email}</p>
                        </Dropdown.Link>

                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
}
