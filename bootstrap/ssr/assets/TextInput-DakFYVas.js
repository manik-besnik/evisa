import { jsxs, jsx } from "react/jsx-runtime";
import "react";
const TextInput = ({
  placeholder,
  type = "text",
  value,
  onChange,
  id = "input-field",
  label = "",
  divClasses = "",
  defaultClasses = "bg-white focus:border-l-red-500 border-red-500",
  inputClasses = "",
  labelClasses = "",
  error = ""
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col my-1 ${divClasses}`, children: [
    label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: `text-sm font-medium text-gray-200 mb-1 ${labelClasses}`, children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id,
        type,
        placeholder,
        value,
        onChange,
        className: `w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400  border-0 border-l-4 focus:outline-none focus:ring-0 ${defaultClasses} ${inputClasses}`
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-500 mt-2 text-xs", children: error })
  ] });
};
export {
  TextInput as T
};
