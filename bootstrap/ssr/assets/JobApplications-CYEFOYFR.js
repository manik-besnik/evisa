import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link, router } from "@inertiajs/react";
import { T as Table } from "./Table-A2qeV3ma.js";
import { g as getFormattedDate } from "./index-DbarwM_f.js";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import { D as DeleteConfirmModal } from "./DeleteConfirmModal-Drh0rErj.js";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { P as Pagination } from "./Pagination-DNB83QUR.js";
import "./Close-DxNaVPET.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "./index-B74Y7uk7.js";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "react-toastify";
import "./Modal-lsFLvQRk.js";
const JobApplications = ({ job_applies }) => {
  const [jobPost, setJobPost] = useState(null);
  const [show, setShow] = useState(false);
  const handleConfirmDelete = () => {
    router.delete(route("admin.job-posts.destroy", jobPost.id), {
      onSuccess: () => {
        setShow(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Job Application List | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Job Application List", children: /* @__PURE__ */ jsx(Link, { href: route("admin.job-posts.index"), className: "btn-primary", children: " Job Posts" }) }),
    /* @__PURE__ */ jsx(Table, { heading: ["SL", "Name", "Mobile No", "Apply Date", "Action"], children: job_applies.data.length > 0 && job_applies.data.map((item, index) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { children: (job_applies.current_page > 1 ? job_applies.current_page * job_applies.per_page : 0) + index + 1 }),
      /* @__PURE__ */ jsx("td", { children: item.name }),
      /* @__PURE__ */ jsx("td", { children: item.phone }),
      /* @__PURE__ */ jsx("td", { children: getFormattedDate(item.created_at) }),
      /* @__PURE__ */ jsx("td", { className: "flex gap-x-2", children: /* @__PURE__ */ jsx(Link, { href: route("admin.job-posts.applications.show", item.id), className: "btn-primary", children: /* @__PURE__ */ jsx(FaEye, {}) }) })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Pagination, { links: job_applies.links }),
    /* @__PURE__ */ jsx(DeleteConfirmModal, { show, setShow, handleConfirmDelete })
  ] });
};
export {
  JobApplications,
  JobApplications as default
};
