import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
import { C as Coin } from "./Coin-BkXhdH5z.js";
const InputBox = forwardRef(function InputBox2({
  btn,
  iconPrev,
  coin,
  type = "text",
  className = "",
  isFocused = false,
  classes,
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
      className: `${classes} flex items-center rounded sm:rounded-[6px] h-[26px] sm:h-[36px] overflow-hidden`,
      children: [
        iconPrev ? /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex justify-center items-center px-1.5 sm:px-3 bg-card-and-hover h-[26px] sm:h-[36px]",
            children: iconPrev
          }
        ) : null,
        /* @__PURE__ */ jsx(
          "input",
          {
            ...props,
            type,
            className: "w-full h-[26px] sm:h-9 block border-none focus:ring-0 bg-side-and-button placeholder:text-t-secondary placeholder:text-xs sm:placeholder:text-sm placeholder:leading-[14px] sm:placeholder:leading-[20px] text-xs sm:text-sm text-t-secondary leading-[14px] sm:leading-[20px]"
          }
        ),
        btn,
        coin ? /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex gap-[6px] font-medium text-xs sm:text-sm leading-[14px] sm:leading-[20px] text-text-primary whitespace-nowrap justify-center items-center px-3 bg-card-and-hover h-[36px]",
            children: [
              /* @__PURE__ */ jsx(Coin, { className: "h-4 sm:h-5" }),
              " Coin ",
              coin
            ]
          }
        ) : null
      ]
    }
  );
});
export {
  InputBox as I
};
