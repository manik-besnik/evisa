import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { A as ArrowRight } from "./ArrowRight-DhMzUtK5.js";
import { Link } from "@inertiajs/react";
const errorImg = "/build/assets/error-img-De_wkjt2.png";
const Error = () => {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center text-center", children: /* @__PURE__ */ jsxs("div", { className: "p-5 max-w-[500px] select-none", children: [
    /* @__PURE__ */ jsx("img", { className: "mb-5 pointer-events-none", src: errorImg, alt: "error-image" }),
    /* @__PURE__ */ jsxs(Link, { href: "/", className: "landing-secondary-btn inline-flex sm:px-5", children: [
      /* @__PURE__ */ jsx(ArrowRight, { className: "rotate-180", color: "#fff" }),
      "Back to Home"
    ] })
  ] }) });
};
export {
  Error as default
};
