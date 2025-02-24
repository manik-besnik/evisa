import { jsxs, jsx } from "react/jsx-runtime";
const TopSection = ({ title, children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
    /* @__PURE__ */ jsx("h3", { className: "", children: title }),
    children
  ] });
};
export {
  TopSection as T
};
