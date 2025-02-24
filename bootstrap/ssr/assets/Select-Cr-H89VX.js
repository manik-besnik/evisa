import { jsx, jsxs } from "react/jsx-runtime";
import { Listbox, ListboxButton, Transition, ListboxOptions, ListboxOption } from "@headlessui/react";
import { A as ArrowDownSolid } from "./ArrowDownSolid-8ROrdjAq.js";
function Select({
  items,
  selected,
  setSelected,
  handleValueChange,
  classes = "",
  placeholder = "Select One",
  label = "",
  error = "",
  field = "name",
  labelClasses = ""
}) {
  const handleChange = (e) => {
    setSelected(e);
    handleValueChange(e);
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Listbox, { value: selected, onChange: handleChange, children: [
    label && /* @__PURE__ */ jsx("label", { className: `block text-sm font-medium text-text-primary mb-2 ${labelClasses}`, children: label }),
    (selected == null ? void 0 : selected[field]) ? /* @__PURE__ */ jsxs(
      ListboxButton,
      {
        className: `${classes} rounded sm:rounded-[6px] h-[26px] sm:h-[36px] bg-side-and-button w-full flex items-center justify-between  leading-[14px] sm:leading-[20px]  text-xs sm:text-sm text-text-primary px-3`,
        children: [
          selected == null ? void 0 : selected[field],
          /* @__PURE__ */ jsx(ArrowDownSolid, {})
        ]
      }
    ) : /* @__PURE__ */ jsxs(
      ListboxButton,
      {
        className: `${classes} rounded sm:rounded-[6px] h-[26px] sm:h-[36px] bg-side-and-button w-full flex items-center justify-between  leading-[14px] sm:leading-[20px]  text-xs sm:text-sm text-t-secondary px-3`,
        children: [
          placeholder,
          /* @__PURE__ */ jsx(ArrowDownSolid, {})
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-500  my-1", children: error }),
    /* @__PURE__ */ jsx(Transition, { leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ jsx(
      ListboxOptions,
      {
        anchor: "bottom",
        className: "w-[var(--button-width)] rounded-xl border bg-side-and-button p-2.5 [--anchor-gap:var(--spacing-1)] focus:outline-none",
        children: items.map((person) => /* @__PURE__ */ jsx(
          ListboxOption,
          {
            value: person,
            className: "group flex items-center gap-2 rounded-md py-2 px-2.5 select-none cursor-pointer data-[focus]:bg-card-and-hover",
            children: /* @__PURE__ */ jsx("div", { className: "text-xs leading-[14px] text-text-primary", children: person.name })
          },
          person == null ? void 0 : person.id
        ))
      }
    ) })
  ] }) });
}
export {
  Select as S
};
