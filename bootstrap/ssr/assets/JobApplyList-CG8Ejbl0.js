import { jsxs, jsx } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { usePage, Head } from "@inertiajs/react";
import { g as getFormattedDate } from "./index-DbarwM_f.js";
import "react-toastify";
import "react-icons/fa";
import "./index-B74Y7uk7.js";
import "react";
import "react-icons/ri";
const JobApplyList = () => {
  const { job_apply_list } = usePage().props;
  return /* @__PURE__ */ jsxs(WebLayout, { showServiceImage: false, showBgImage: false, children: [
    /* @__PURE__ */ jsx(Head, { title: "Job Apply List | Dubai E-Visa" }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h3", { className: "my-2 text-xl", children: "Job Apply List" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white text-sm mb-4", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-[#B8860B] text-white", children: [
          /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-l border-t border-[#D4AF37]", children: "ID" }),
          /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Job Title" }),
          /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Company" }),
          /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Location" }),
          /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Apply Date" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-200", children: job_apply_list.length > 0 ? job_apply_list.map((row, index) => {
          var _a, _b, _c;
          return /* @__PURE__ */ jsxs(
            "tr",
            {
              className: `${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors duration-150`,
              children: [
                /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-l border-r border-b border-gray-200", children: row.id }),
                /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: (_a = row.job_post) == null ? void 0 : _a.title }),
                /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: (_b = row.job_post) == null ? void 0 : _b.company }),
                /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: (_c = row.job_post) == null ? void 0 : _c.location }),
                /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: getFormattedDate(row.created_at) })
              ]
            },
            row.id
          );
        }) : /* @__PURE__ */ jsx("p", { children: "Data Not Found" }) })
      ] }) })
    ] })
  ] });
};
export {
  JobApplyList as default
};
