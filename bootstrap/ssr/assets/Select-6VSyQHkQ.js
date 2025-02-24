import { jsxs, jsx } from "react/jsx-runtime";
import { Listbox, ListboxButton, Transition, ListboxOptions, ListboxOption } from "@headlessui/react";
import { A as ArrowDownSolid } from "./ArrowDownSolid-8ROrdjAq.js";
import { useState } from "react";
function Select({
  items,
  selected,
  setSelected,
  handleValueChange,
  defaultClasses = "bg-white border-red-500",
  classes = "",
  placeholder = "Select One",
  field = "name",
  label = "",
  labelClasses = "",
  error = ""
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSelected(e);
    handleValueChange(e);
  };
  const filteredItems = items.filter(
    (item) => {
      var _a;
      return (_a = item[field]) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase());
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    label && /* @__PURE__ */ jsx("label", { className: `text-sm font-medium text-text-primary mb-1 ${labelClasses}`, children: label }),
    /* @__PURE__ */ jsxs(Listbox, { value: selected, onChange: handleChange, children: [
      (selected == null ? void 0 : selected[field]) ? /* @__PURE__ */ jsxs(
        ListboxButton,
        {
          className: ` h-[26px] sm:h-[36px] w-full flex items-center justify-between  leading-[14px] sm:leading-[20px] text-xs sm:text-sm px-3 border-0  border-l-4 ${defaultClasses} ${classes} `,
          children: [
            selected == null ? void 0 : selected[field],
            /* @__PURE__ */ jsx(ArrowDownSolid, {})
          ]
        }
      ) : /* @__PURE__ */ jsxs(
        ListboxButton,
        {
          className: `h-[26px] sm:h-[36px] w-full flex items-center justify-between  leading-[14px] sm:leading-[20px] text-gray-400 text-xs sm:text-sm px-3 border-0  border-l-4 ${defaultClasses} ${classes}`,
          children: [
            placeholder,
            /* @__PURE__ */ jsx(ArrowDownSolid, {})
          ]
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs my-1", children: error }),
      /* @__PURE__ */ jsx(Transition, { leave: "transition ease-in duration-100 z-[1000]", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ jsxs(
        ListboxOptions,
        {
          anchor: "bottom",
          className: "w-[var(--button-width)] border bg-white p-2.5 [--anchor-gap:var(--spacing-1)] focus:outline-none max-h-[450px] overflow-y-scroll",
          children: [
            /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: "Search...",
                className: "w-full p-1 text-sm h-[26px] sm:h-[36px]  border border-primary focus:ring-0 ring-primary focus:border-primary focus:outline-0"
              }
            ) }),
            filteredItems.length > 0 && filteredItems.map((person, i) => /* @__PURE__ */ jsx(
              ListboxOption,
              {
                value: person,
                className: "group flex items-center gap-2 rounded-md py-2 px-2.5 select-none cursor-pointer data-[focus]:bg-gray-200",
                children: /* @__PURE__ */ jsx("div", { className: "text-xs leading-[14px] text-text-primary", children: person == null ? void 0 : person[field] })
              },
              i
            ))
          ]
        }
      ) })
    ] })
  ] });
}
export {
  Select as S
};
