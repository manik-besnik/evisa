import { jsxs, jsx } from "react/jsx-runtime";
import "@inertiajs/react";
import { A as ArrowRight } from "./ArrowRight-DhMzUtK5.js";
import "react";
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen flex justify-center items-center py-6 sm:py-10 bg-main-and-focus", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => window.history.back(), className: "absolute top-5 left-4 md:top-10 md:left-10 btn-primary", children: [
      /* @__PURE__ */ jsx(ArrowRight, { className: "rotate-180" }),
      "Back"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[457px] min-w-[343px] md:w-[457px] bg-white rounded-2xl md:rounded-3xl border border-card-and-hover px-6 py-4 md:px-10 md:py-[30px]", children: /* @__PURE__ */ jsx("div", { children }) })
  ] });
}
export {
  Guest as G
};
