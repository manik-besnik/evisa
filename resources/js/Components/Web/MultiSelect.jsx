import {Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition} from '@headlessui/react'
import ArrowDownSolid from "@/Components/SvgIcons/ArrowDownSolid.jsx";
import {LiaTimesSolid} from "react-icons/lia";
import {useState} from "react";

export default function MultiSelect({
                                   items,
                                   selected,
                                   setSelected,
                                   handleValueChange,
                                   defaultClasses = 'bg-white border-red-500',
                                   classes = '',
                                   placeholder = "Select One",
                                   field = "name",
                                   label = "",
                                   labelClasses = "",
                                   error = "",
                                   selectLimit = 1000
                               }) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (item) => {

        if (selected?.length >= selectLimit) {
            return;
        }
        const isSelected = selected?.some(s => s === item);

        if (isSelected) {
            return;
        }

        setSelected([...selected, item]);
        handleValueChange([...selected, item]);
    };

    const handleRemoveItem = (index) => {
        selected.splice(index, 1);

        setSelected(selected);
        handleValueChange(selected);
    }


    const filteredItems = items.filter((item) =>
        item[field]?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full">
            {label && <label className={`text-sm font-medium text-text-primary mb-1 ${labelClasses}`}>
                {label}
            </label>}
            <Listbox as="div" value={selected} multiple>
                {({open}) => (
                    <>
                        <ListboxButton
                            className={`h-[26px] sm:h-[36px] w-full flex items-center justify-between leading-[14px] sm:leading-[20px] text-xs sm:text-sm px-3 border-0 border-l-4 ${defaultClasses} ${classes}`}
                        >

                            {selected?.length > 0 ? (
                                <span className="flex gap-x-1 text-xs">
                                    {selected?.map((item, index) => (
                                        <span key={index}
                                              className="flex gap-x-2 items-center bg-gray-200 px-2 py-1 rounded-md">
                                            <span>
                                                {item[field]}
                                            </span>
                                            <LiaTimesSolid onClick={() => handleRemoveItem(index)}/>
                                        </span>
                                    ))}
                                </span>
                            ) : (
                                <span className="text-gray-400 text-xs sm:text-sm">{placeholder}</span>
                            )}

                            <ArrowDownSolid/>
                        </ListboxButton>

                        {error && <p className="text-red-500 text-xs my-1">{error}</p>}

                        <Transition leave="transition ease-in duration-100 z-[1000]" leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                            <ListboxOptions
                                anchor="bottom"
                                className="w-[var(--button-width)] border bg-white p-2.5 [--anchor-gap:var(--spacing-1)] focus:outline-none max-h-[450px] overflow-y-scroll"
                            >

                                <div className="p-2">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search..."
                                        className="w-full p-1 text-sm h-[26px] sm:h-[36px] border border-primary focus:ring-0 ring-primary focus:border-primary focus:outline-0"
                                    />
                                </div>

                                {filteredItems.length > 0 && filteredItems.map((person, i) => (
                                    <ListboxOption
                                        key={i}
                                        value={person}
                                        onClick={() => handleChange(person)}
                                        className={`group flex items-center gap-2 rounded-md py-2 px-2.5 select-none cursor-pointer data-[focus]:bg-gray-200 ${selected?.some(s => s === person) ? 'bg-gray-200' : ''}`}
                                    >
                                        <div
                                            className="text-xs leading-[14px] text-text-primary">{person?.[field]}</div>
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Transition>
                    </>
                )}
            </Listbox>
        </div>
    )
}
