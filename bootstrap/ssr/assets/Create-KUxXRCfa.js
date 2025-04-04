import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link } from "@inertiajs/react";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { A as AddUserForm } from "./AddUserForm-B5YZat1U.js";
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
const Create = () => {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Agencies | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Add User", children: isPermitted(permissionEnums.VIEW_USER) && /* @__PURE__ */ jsx(Link, { href: route("admin.users.index"), className: "btn-primary", children: " User List" }) }),
    /* @__PURE__ */ jsx(AddUserForm, { submitRoute: route("admin.users.store") })
  ] });
};
export {
  Create as default
};
