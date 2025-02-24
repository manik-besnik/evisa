import { jsx, jsxs } from "react/jsx-runtime";
const Table = ({ heading = [], children }) => {
  return /* @__PURE__ */ jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxs("table", { className: "table", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: heading.map((item, i) => /* @__PURE__ */ jsx("th", { children: item }, i)) }) }),
    /* @__PURE__ */ jsx("tbody", { children })
  ] }) });
};
export {
  Table as T
};
