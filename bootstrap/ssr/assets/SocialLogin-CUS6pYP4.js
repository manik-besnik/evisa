import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { e as assetUrl } from "./index-B74Y7uk7.js";
const Switch = ({ value, onChange, classes = "" }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    onChange(!value);
  };
  return /* @__PURE__ */ jsx("div", { className: `flex items-center ${classes}`, children: /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleToggle,
      className: "relative w-12 h-1 bg-gray-400",
      "aria-pressed": value,
      "aria-label": "Toggle switch",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-warning rounded-full shadow-md transform transition-transform duration-300 ease-in-out
            ${value ? "translate-x-10" : "translate-x-0"}`
        }
      )
    }
  ) });
};
function Facebook(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 111.68 111.82", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M436.23 687h6.67v-13.55h-14.24c-10.45 0-19.75 7.61-19.75 18.07v15.91h-15.29v17h15.29v42.47h17v-42.48H440l2.76-17H425.9v-11.17c0-5.23 5.11-9.21 10.33-9.21",
        transform: "translate(-347.74 -655.08)",
        style: { fill: "#fff" }
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M436.23 655.08h-64.36c-13.06 0-24.13 10.12-24.13 23.18v64.36a24.48 24.48 0 0 0 24.13 24.14h37.39v-42.59h-15.14v-16.09h15.14v-16.57c0-10.45 8.95-18.45 19.4-18.45h14.67v14.2h-7.1c-5.22 0-9.94 3.76-9.94 9v11.83h16.49L440 724.17h-13.71v42.59h9.94c13.07 0 23.19-11.07 23.19-24.14v-64.36a22.86 22.86 0 0 0-23.19-23.18",
        transform: "translate(-347.74 -655.08)",
        style: { fill: "#0095d7" }
      }
    )
  ] });
}
const SocialLogin = ({ classes }) => {
  return /* @__PURE__ */ jsxs("div", { className: `flex justify-end gap-x-4 text-white ${classes}`, children: [
    /* @__PURE__ */ jsx("a", { href: route("google.redirect"), children: /* @__PURE__ */ jsx("img", { src: `${assetUrl + "images/google.svg"}`, alt: "google", className: "w-7 h-7" }) }),
    /* @__PURE__ */ jsx("a", { href: route("facebook.redirect"), children: /* @__PURE__ */ jsx(Facebook, { className: "w-7 h-7" }) })
  ] });
};
export {
  SocialLogin as S,
  Switch as a
};
