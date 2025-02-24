import { jsx, jsxs } from "react/jsx-runtime";
import { e as assetUrl } from "./index-B74Y7uk7.js";
import { S as Search } from "./Search-CxuJE3gW.js";
const SearchContainer = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("img", { src: `${assetUrl + "images/hero1.png"}`, alt: "hero" }),
    /* @__PURE__ */ jsx("div", { className: "absolute w-full flex justify-center bottom-0 left-0", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center mx-auto", children: /* @__PURE__ */ jsx(Search, {}) }) })
  ] }) });
};
export {
  SearchContainer as S
};
