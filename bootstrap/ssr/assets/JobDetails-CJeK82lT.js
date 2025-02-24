import { jsxs, jsx } from "react/jsx-runtime";
import { Head, router } from "@inertiajs/react";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { a as getValue } from "./index-DbarwM_f.js";
import { j as jobTypes } from "./index-B74Y7uk7.js";
import "react-toastify";
import "react-icons/fa";
import "react";
import "react-icons/ri";
function JobDetails({ job_post }) {
  const jobApply = () => {
    return router.get(route("job-posts.create", { id: job_post.id }));
  };
  return /* @__PURE__ */ jsxs(WebLayout, { showServiceImage: false, showBgImage: false, children: [
    /* @__PURE__ */ jsx(Head, { title: "Job Demand | Dubai E-Visa" }),
    /* @__PURE__ */ jsx("div", { className: "container gap-4 my-4", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-lg shadow", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: job_post.title }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx("button", { onClick: jobApply, className: "bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark", children: "Apply Now" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl font-bold uppercase",
            children: job_post.company.charAt(0)
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-medium mb-1", children: job_post.company }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "w-4 h-4",
                  children: [
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      }
                    )
                  ]
                }
              ),
              job_post.location
            ] }),
            /* @__PURE__ */ jsx("span", { children: "•" }),
            /* @__PURE__ */ jsx("span", { children: getValue(jobTypes, job_post.type) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: job_post.description } })
    ] }) })
  ] });
}
export {
  JobDetails as default
};
