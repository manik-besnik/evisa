import { jsx } from "react/jsx-runtime";
function PrimaryBtn({ text, onClick, type = "button", classes = "", btnClasses = "", disabled = false }) {
  return /* @__PURE__ */ jsx("div", { className: `flex items-center justify-center ${classes}`, children: /* @__PURE__ */ jsx(
    "button",
    {
      type,
      onClick,
      className: `w-full py-2 bg-yellow-500 hover:bg-primary text-gray-800 font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)]  hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200 ${btnClasses}`,
      disabled,
      children: text
    }
  ) });
}
export {
  PrimaryBtn as P
};
