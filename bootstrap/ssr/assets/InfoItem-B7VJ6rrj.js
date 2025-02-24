import { jsxs, jsx } from "react/jsx-runtime";
const InfoSection = ({ title, children }) => /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-md text-gray-700 mb-2", children: title }),
  /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-md p-3", children })
] });
const InfoItem = ({ label, value }) => /* @__PURE__ */ jsxs("div", { className: "mb-2 last:mb-0", children: [
  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: label }),
  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-800", children: value ?? "N/A" })
] });
export {
  InfoSection as I,
  InfoItem as a
};
