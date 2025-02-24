import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
const InputBox = forwardRef(function InputBox2({
  btn,
  iconPrev,
  coin,
  type = "text",
  className = "",
  isFocused = false,
  id = "input-id",
  classes = "",
  label = "",
  error = "",
  labelClasses = "",
  defaultClasses = "",
  divClasses = "",
  ...props
}, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${classes} flex flex-col gap-y-2 justify-start overflow-hidden`,
      children: [
        label && /* @__PURE__ */ jsx("label", { className: `${labelClasses} text-left text-sm lg:text-md text-text-primary`, htmlFor: id, children: label }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ...props,
            type,
            className: "w-full h-[26px] rounded sm:rounded-[6px] sm:h-9 block border-none focus:ring-0 bg-side-and-button placeholder:text-t-secondary placeholder:text-xs sm:placeholder:text-sm placeholder:leading-[14px] sm:placeholder:leading-[20px] text-xs sm:text-sm text-t-secondary leading-[14px] sm:leading-[20px]"
          }
        ),
        error && /* @__PURE__ */ jsx("p", { className: "text-warning text-sm", children: error })
      ]
    }
  );
});
export {
  InputBox as I
};
