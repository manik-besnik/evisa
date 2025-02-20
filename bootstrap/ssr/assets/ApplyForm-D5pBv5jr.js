import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link } from "@inertiajs/react";
import { V as VisaApplyForm } from "./VisaApplyForm-DdXcYzZl.js";
import "react";
import "./Close-DxNaVPET.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "react-icons/fa6";
import "./index-DbarwM_f.js";
import "./index-B74Y7uk7.js";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "react-toastify";
import "./Select-Cr-H89VX.js";
import "./ArrowDownSolid-8ROrdjAq.js";
import "./InputBox-CqMgyXAz.js";
import "./InputFile-Cn5gx5a_.js";
import "axios";
const ApplyForm = () => {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Agency Visa Apply | Dubai E-Visa" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h3", { children: "Apply Form" }),
      /* @__PURE__ */ jsx(Link, { href: route("agency.visa-applies.index"), className: "btn-primary", children: "Visa Apply List" })
    ] }),
    /* @__PURE__ */ jsx(VisaApplyForm, { submitUrl: route("agency.visa-applies.store") })
  ] });
};
export {
  ApplyForm as default
};
