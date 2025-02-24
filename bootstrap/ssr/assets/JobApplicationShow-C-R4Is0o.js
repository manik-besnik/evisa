import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { usePage, Head, Link } from "@inertiajs/react";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { a as getValue } from "./index-DbarwM_f.js";
import { l as languageProficiency } from "./index-B74Y7uk7.js";
import { I as InfoSection, a as InfoItem } from "./InfoItem-B7VJ6rrj.js";
import { FaRegEye } from "react-icons/fa6";
import "react";
import "./Close-DxNaVPET.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "react-toastify";
const JobApplicationShow = () => {
  const { job_apply, experiences } = usePage().props;
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Job Apply Details" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Job Apply Details", children: /* @__PURE__ */ jsx("div", { className: "flex gap-x-2", children: /* @__PURE__ */ jsx(Link, { href: route("admin.visa-applies.index"), className: "btn-primary", children: "View Job Apply List" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsxs(InfoSection, { title: "General Info", children: [
          /* @__PURE__ */ jsx(InfoItem, { label: "Name", value: job_apply.name }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Mobile Number", value: job_apply.phone }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Email Address", value: job_apply.email }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Shirt Size", value: job_apply.shirt_size }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Weight(in kgs)", value: job_apply.weight }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Height(in cm)", value: job_apply.height }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Pant Size", value: job_apply.pant_size }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Show Size", value: job_apply.show_size }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Nearest Airport", value: job_apply.nearest_airport }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Summary", value: job_apply.summary })
        ] }),
        /* @__PURE__ */ jsx(InfoSection, { title: "Documents", children: job_apply.documents && job_apply.documents.length > 0 ? /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside text-gray-800", children: job_apply.documents.map((doc, index) => /* @__PURE__ */ jsxs("li", { className: "mb-2 flex text-sm justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { children: doc.name }),
          /* @__PURE__ */ jsx("a", { href: doc.url, target: "_blank", children: /* @__PURE__ */ jsx(FaRegEye, {}) })
        ] }, index)) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No documents available" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2", children: [
        /* @__PURE__ */ jsxs(InfoSection, { title: "Education", children: [
          /* @__PURE__ */ jsx(InfoItem, { label: "Certificate", value: job_apply.education.exam_name }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Year", value: job_apply.education.passing_year }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Board or University", value: job_apply.education.institute }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Computer Skill", value: job_apply.education.computer_skill }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Driving License", value: job_apply.education.driving_license }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Issue Date", value: job_apply.education.driving_license_issue_date }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Expire Date", value: job_apply.education.driving_license_expire_date }),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "English",
              value: getValue(languageProficiency, job_apply.education.english_proficiency)
            }
          ),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "Urdu/Hindi",
              value: getValue(languageProficiency, job_apply.education.urdu_proficiency)
            }
          ),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "Arabic",
              value: getValue(languageProficiency, job_apply.education.arabic_proficiency)
            }
          ),
          /* @__PURE__ */ jsx(InfoItem, { label: "Mother Language", value: job_apply.education.language.name })
        ] }),
        /* @__PURE__ */ jsx(InfoSection, { title: "Job Experiences", children: experiences.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
          /* @__PURE__ */ jsx(InfoItem, { label: "Country", value: item.country.name }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Company", value: item.company }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Position", value: item.position }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Duration", value: item.duration })
        ] }, i)) })
      ] })
    ] }) })
  ] });
};
export {
  JobApplicationShow as default
};
