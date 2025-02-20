import { jsxs, jsx } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { Head } from "@inertiajs/react";
import { S as SearchContainer } from "./SearchContainer-F1-t464e.js";
import { e as assetUrl } from "./index-B74Y7uk7.js";
import "react";
import { P as PrimaryBtn } from "./PrimaryBtn-BeKpKB4W.js";
import "react-toastify";
import "react-icons/fa";
import "react-icons/ri";
import "./Search-CxuJE3gW.js";
import "./Select-6VSyQHkQ.js";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
const Other = () => {
  return /* @__PURE__ */ jsxs(WebLayout, { showBgImage: true, children: [
    /* @__PURE__ */ jsx(Head, { title: "Other | Dubai E-Visa" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-20", children: [
      /* @__PURE__ */ jsx(SearchContainer, {}),
      /* @__PURE__ */ jsx("div", { className: "w-1/2 h-[72vh]", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-700 h-full relative", children: [
        /* @__PURE__ */ jsx("img", { className: "w-full h-auto", src: `${assetUrl + "images/agent_dashboard.png"}`, alt: "" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-[60%] w-full p-5 flex flex-col gap-y-2", children: [
          /* @__PURE__ */ jsx(PrimaryBtn, { btnClasses: "uppercase", text: "Referral Partner" }),
          /* @__PURE__ */ jsx(PrimaryBtn, { btnClasses: "uppercase", text: "Channel Partner" }),
          /* @__PURE__ */ jsx(PrimaryBtn, { btnClasses: "uppercase", text: "Official Partner" })
        ] })
      ] }) })
    ] }) })
  ] });
};
export {
  Other as default
};
