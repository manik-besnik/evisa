import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {IoMdNotificationsOutline} from "react-icons/io";
import {Link, usePage} from "@inertiajs/react";

const Notification = () => {

    const {notifications} = usePage().props

    return (
        <div className="text-right">
            {notifications && <Menu>
                <MenuButton className="block">
                    <span className="text-2xl mb-0">
                        <IoMdNotificationsOutline className="w-6 h-6"/>
                    </span>
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-80 h-[70vh] overflow-y-scroll origin-top-right rounded-xl border bg-main-and-focus text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 text-lg px-3 data-[focus]:bg-white/10">
                            Notifications
                        </button>
                    </MenuItem>

                    {notifications.length > 0 && notifications.map((item, i) => (
                        <MenuItem key={i}>
                            <Link href={route('admin.notifications.show', item.id)}
                                  className="group text-sm hover:bg-side-and-button flex w-full items-center gap-2 py-2 px-3 ">
                                {item.title}
                            </Link>
                        </MenuItem>
                    ))}

                </MenuItems>
            </Menu>}
        </div>
    )
}

export default Notification
