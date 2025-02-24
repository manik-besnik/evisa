import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link } from "@inertiajs/react";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { V as VisaApplyForm } from "./VisaUpdateForm-CwBSW4bX.js";
import { i as isPermitted } from "./index-DbarwM_f.js";
import { p as permissionEnums } from "./index-B74Y7uk7.js";
import "react";
import "./Close-DxNaVPET.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "react-icons/fa6";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "react-toastify";
import "./Select-Cr-H89VX.js";
import "./ArrowDownSolid-8ROrdjAq.js";
import "./InputBox-CqMgyXAz.js";
import "./InputFile-Cn5gx5a_.js";
const Edit = () => {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Visa Edit | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Visa Application Edit", children: /* @__PURE__ */ jsx("div", { className: "flex gap-x-2", children: isPermitted(permissionEnums.VIEW_VISA) && /* @__PURE__ */ jsx(Link, { href: route("admin.visa-applies.index"), className: "btn-primary", children: "View Application List" }) }) }),
    /* @__PURE__ */ jsx(VisaApplyForm, { isAdmin: true })
  ] });
};
export {
  Edit as default
};
