import { jsxs, jsx } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { Link, Head } from "@inertiajs/react";
import { g as getFormattedDate } from "./index-DbarwM_f.js";
import "react-toastify";
import "react-icons/fa";
import "./index-B74Y7uk7.js";
import "react";
import "react-icons/ri";
function JobCard({ job }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#F5E1B9] p-4 rounded-2xl shadow-lg border w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center text-gray-600 text-sm", children: /* @__PURE__ */ jsx("span", { children: getFormattedDate(job.last_apply_date) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm", children: job.company }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: job.title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-between items-center font-medum", children: [
      /* @__PURE__ */ jsx("p", { children: job.salary_range }),
      /* @__PURE__ */ jsx("p", { className: "text-text-primary text-sm", children: job.location })
    ] }),
    /* @__PURE__ */ jsx(
      Link,
      {
        className: "block w-full mt-3 bg-black text-center px-2 text-white py-2 rounded-lg",
        href: route("job-demand.show", job.id),
        children: "Details"
      }
    )
  ] });
}
const JobPost = ({ job_posts }) => {
  return /* @__PURE__ */ jsxs(WebLayout, { showServiceImage: false, showBgImage: false, children: [
    /* @__PURE__ */ jsx(Head, { title: "Job Demand | Dubai E-Visa" }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4", children: job_posts.data.length > 0 && job_posts.data.map((job, i) => /* @__PURE__ */ jsx(JobCard, { job }, i)) }),
      job_posts.data.length === 0 && /* @__PURE__ */ jsx("div", { className: "w-full flex min-h-[72vh] justify-center items-center text-center", children: "No Available Jobs Found" })
    ] })
  ] });
};
export {
  JobPost as default
};
