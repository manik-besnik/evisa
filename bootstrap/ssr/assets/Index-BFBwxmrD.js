import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link } from "@inertiajs/react";
import { FiPlus } from "react-icons/fi";
import { V as VisaApplicationTable } from "./VisaApplicationTable-CSce45as.js";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
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
import "./DangerButton-C_x1CXfY.js";
import "react-icons/fa";
import "./Table-A2qeV3ma.js";
import "./DeleteConfirmModal-Drh0rErj.js";
import "./Modal-lsFLvQRk.js";
import "./Pagination-DNB83QUR.js";
const Index = () => {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Visa Application List | E-Visa Dubai" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Visa Apply List", children: isPermitted(permissionEnums.CREATE_VISA) && /* @__PURE__ */ jsxs(Link, { href: route("admin.visa-applies.create"), className: "btn-primary", children: [
      /* @__PURE__ */ jsx(FiPlus, {}),
      " Add New Application"
    ] }) }),
    /* @__PURE__ */ jsx(VisaApplicationTable, { isAdmin: true })
  ] });
};
export {
  Index as default
};
