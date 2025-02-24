import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link } from "@inertiajs/react";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { T as Table } from "./Table-A2qeV3ma.js";
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
const StatusNotComplete = () => {
  return /* @__PURE__ */ jsx("span", { className: "bg-warning text-xs px-4 py-2 rounded-full", children: "Incomplete SignUp" });
};
const StatusPending = () => {
  return /* @__PURE__ */ jsx("span", { className: "bg-primary text-xs px-4 py-2 rounded-full", children: "Approval Pending" });
};
const StatusApproved = () => {
  return /* @__PURE__ */ jsx("span", { className: "bg-success text-xs px-4 py-2 rounded-full", children: "Approved" });
};
const Index = ({ agencies }) => {
  const getStatusBadge = (agency) => {
    var _a;
    if (!(agency == null ? void 0 : agency.is_signup_complete)) {
      return /* @__PURE__ */ jsx(StatusNotComplete, {});
    }
    if ((_a = agency == null ? void 0 : agency.agency) == null ? void 0 : _a.is_account_approved) {
      return /* @__PURE__ */ jsx(StatusApproved, {});
    }
    return /* @__PURE__ */ jsx(StatusPending, {});
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Agencies | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Agencies" }),
    /* @__PURE__ */ jsx(Table, { heading: [
      "SL",
      "Company Name",
      "Contact Person",
      "Username",
      "Phone",
      "Status",
      "Action"
    ], children: agencies.data.map((agency, index) => {
      var _a, _b;
      return /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: index + 1 }),
        /* @__PURE__ */ jsx("td", { children: (_a = agency == null ? void 0 : agency.agency) == null ? void 0 : _a.company_name }),
        /* @__PURE__ */ jsx("td", { children: agency.name }),
        /* @__PURE__ */ jsx("td", { children: agency.username }),
        /* @__PURE__ */ jsx("td", { children: agency.phone }),
        /* @__PURE__ */ jsx("td", { className: "text-white", children: getStatusBadge(agency) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2", children: [
          !((_b = agency == null ? void 0 : agency.agency) == null ? void 0 : _b.is_account_approved) && isPermitted(permissionEnums.APPROVE_AGENCY) && /* @__PURE__ */ jsx(Link, { href: route("admin.agencies.approve", agency.id), className: "btn-primary", children: "Approve Now" }),
          isPermitted(permissionEnums.VIEW_SINGLE_AGENCY) && /* @__PURE__ */ jsx(Link, { href: route("admin.agencies.show", agency.id), className: "btn-primary", children: "View" })
        ] }) })
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx(Pagination, { links: agencies.links })
  ] });
};
export {
  Index as default
};
