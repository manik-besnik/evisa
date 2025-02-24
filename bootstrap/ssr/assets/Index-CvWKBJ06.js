import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link } from "@inertiajs/react";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { T as Table } from "./Table-A2qeV3ma.js";
import { FiPlus } from "react-icons/fi";
import { i as isPermitted } from "./index-DbarwM_f.js";
import { p as permissionEnums } from "./index-B74Y7uk7.js";
import { P as Pagination } from "./Pagination-DNB83QUR.js";
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
const Index = ({ users }) => {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Agencies | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Users", children: isPermitted(permissionEnums.CREATE_USER) && /* @__PURE__ */ jsxs(Link, { href: route("admin.users.create"), className: "btn-primary", children: [
      /* @__PURE__ */ jsx(FiPlus, {}),
      " Add New User"
    ] }) }),
    /* @__PURE__ */ jsx(Table, { heading: ["SL", "Name", "Username", "Phone", "Email Address"], children: users.data.map((user, index) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { children: index + 1 }),
      /* @__PURE__ */ jsx("td", { children: user.name }),
      /* @__PURE__ */ jsx("td", { children: user.username }),
      /* @__PURE__ */ jsx("td", { children: user.phone }),
      /* @__PURE__ */ jsx("td", { children: user.email })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Pagination, { links: users.links })
  ] });
};
export {
  Index as default
};
