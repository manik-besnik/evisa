import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {IoMdNotificationsOutline} from "react-icons/io";

const Notification = () => {

    return (
        <div className="text-right">
            <Menu>
                <MenuButton
                    className="block">
                    <span className="text-2xl mb-0"><IoMdNotificationsOutline  className="w-6 h-6"/></span>
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52  origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <MenuItem>
                        <button
                            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            Notifications
                        </button>
                    </MenuItem>

                </MenuItems>
            </Menu>
        </div>
    )
}

export default Notification
