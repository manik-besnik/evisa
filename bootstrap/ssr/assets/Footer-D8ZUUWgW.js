import { jsxs, jsx } from "react/jsx-runtime";
import "react";
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ jsx("p", { className: "inline-block text-t-secondary text-[10px] leading-[12px] sm:text-sm sm:leading-[20px] font-medium", children: "Technical support email: hellomaketopme@gmail.com" }),
    /* @__PURE__ */ jsx("p", { className: "inline-block text-t-secondary  text-[10px] leading-[12px] sm:text-sm sm:leading-[20px] font-medium", children: "© Maketop.me 2024" })
  ] });
}
export {
  Footer as F
};
