import {Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition} from '@headlessui/react'
import ArrowDownSolid from './SvgIcons/ArrowDownSolid'

export default function Select({
                                   items,
                                   selected,
                                   setSelected,
                                   handleValueChange,
                                   classes = '',
                                   placeholder = "Select One"
                               }) {

    const handleChange = (e) => {
        setSelected(e)
        handleValueChange(e)
    }

    return (
        <div className="w-full">
            <Listbox value={selected} onChange={handleChange}>
                {selected?.name ?
                    <ListboxButton
                        className={`${classes} rounded sm:rounded-[6px] h-[26px] sm:h-[36px] bg-side-and-button w-full flex items-center justify-between  leading-[14px] sm:leading-[20px]  text-xs sm:text-sm text-t-secondary text-text-primary px-3`}
                    >
                        {selected?.name}

                        <ArrowDownSolid/>

                    </ListboxButton> :
                    <ListboxButton
                        className={`${classes} rounded sm:rounded-[6px] h-[26px] sm:h-[36px] bg-side-and-button w-full flex items-center justify-between  leading-[14px] sm:leading-[20px]  text-xs sm:text-sm text-t-secondary text-text-primary px-3`}
                    >
                        {placeholder}

                        <ArrowDownSolid/>

                    </ListboxButton>

                }
                <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <ListboxOptions
                        anchor="bottom"
                        className="w-[var(--button-width)] rounded-xl border bg-side-and-button p-2.5 [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                        {items.map((person) => (
                            <ListboxOption
                                key={person?.name}
                                value={person}
                                className="group flex cursor-default items-center gap-2 rounded-md py-2 px-2.5 select-none data-[focus]:bg-card-and-hover"
                            >
                                <div className="text-xs leading-[14px] text-text-primary">{person.name}</div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Transition>
            </Listbox>
        </div>
    )
}
