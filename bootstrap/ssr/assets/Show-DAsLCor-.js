import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head } from "@inertiajs/react";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
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
const Show = ({ agency }) => {
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Agencies | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Agency Details" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-md", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Contact Person:" }),
        " ",
        agency.name
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Email:" }),
        " ",
        agency.email
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
        " ",
        agency.phone
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Username:" }),
        " ",
        agency.username
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Nationality:" }),
        " ",
        agency.nationality_id
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Living Country:" }),
        " ",
        agency.living_country_id
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Language:" }),
        " ",
        agency.language_id
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Profession:" }),
        " ",
        agency.profession
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "City:" }),
        " ",
        agency.city
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Signup Complete:" }),
        " ",
        agency.is_signup_complete ? "Yes" : "No"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-md", children: "Profile Picture" }),
      agency.avatar ? /* @__PURE__ */ jsx("img", { src: agency.avatar, alt: "User Avatar", className: "w-32 h-32 rounded-full shadow" }) : /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "No avatar uploaded" })
    ] }),
    agency.agency && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-4", children: "Company Details" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-md", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Company Name:" }),
          " ",
          agency.agency.company_name
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "EID No:" }),
          " ",
          agency.agency.eid_no || "N/A"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Passport No:" }),
          " ",
          agency.agency.passport_no || "N/A"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "UID No:" }),
          " ",
          agency.agency.uid_no || "N/A"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Bank Details:" }),
          " ",
          agency.agency.bank_details || "N/A"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Nominee Name:" }),
          " ",
          agency.agency.nominee_name || "N/A"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Nominee Passport:" }),
          " ",
          agency.agency.nominee_passport_no || "N/A"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Account Approved:" }),
          " ",
          agency.agency.is_account_approved ? "Approved" : "Not Approved"
        ] })
      ] })
    ] })
  ] });
};
export {
  Show,
  Show as default
};
