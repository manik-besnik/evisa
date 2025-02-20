import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head, Link, router } from "@inertiajs/react";
import { FiPlus, FiEdit } from "react-icons/fi";
import { T as Table } from "./Table-A2qeV3ma.js";
import { i as isPermitted, g as getFormattedDate } from "./index-DbarwM_f.js";
import { D as DangerButton } from "./DangerButton-C_x1CXfY.js";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { D as DeleteConfirmModal } from "./DeleteConfirmModal-Drh0rErj.js";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { p as permissionEnums } from "./index-B74Y7uk7.js";
import { P as Pagination } from "./Pagination-DNB83QUR.js";
import "./Close-DxNaVPET.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "react-icons/fa6";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "react-toastify";
import "./Modal-lsFLvQRk.js";
const Index = ({ job_posts }) => {
  const [jobPost, setJobPost] = useState(null);
  const [show, setShow] = useState(false);
  const handleDelete = (jobPost2) => {
    setJobPost(jobPost2);
    setShow(true);
  };
  const handleConfirmDelete = () => {
    router.delete(route("admin.job-posts.destroy", jobPost.id), {
      onSuccess: () => {
        setShow(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Add New Job | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Job Post List", children: isPermitted(permissionEnums.CREATE_JOB_POST) && /* @__PURE__ */ jsxs(Link, { href: route("admin.job-posts.create"), className: "btn-primary", children: [
      /* @__PURE__ */ jsx(FiPlus, {}),
      " Add New Job"
    ] }) }),
    /* @__PURE__ */ jsx(Table, { heading: ["SL", "Title", "Post Date", "Company", "Action"], children: job_posts.data.length > 0 && job_posts.data.map((jobPost2, index) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { children: (job_posts.current_page > 1 ? job_posts.current_page * job_posts.per_page : 0) + index + 1 }),
      /* @__PURE__ */ jsx("td", { children: jobPost2.title }),
      /* @__PURE__ */ jsx("td", { children: getFormattedDate(jobPost2.created_at) }),
      /* @__PURE__ */ jsx("td", { children: jobPost2.company }),
      /* @__PURE__ */ jsxs("td", { className: "flex gap-x-2", children: [
        isPermitted(permissionEnums.EDIT_JOB_POST) && /* @__PURE__ */ jsx(Link, { href: route("admin.job-posts.edit", jobPost2.id), className: "btn-primary", children: /* @__PURE__ */ jsx(FiEdit, {}) }),
        isPermitted(permissionEnums.DELETE_JOB_POST) && /* @__PURE__ */ jsx(DangerButton, { onClick: () => handleDelete(jobPost2), children: /* @__PURE__ */ jsx(FaTrashAlt, {}) })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Pagination, { links: job_posts.links }),
    /* @__PURE__ */ jsx(DeleteConfirmModal, { show, setShow, handleConfirmDelete })
  ] });
};
export {
  Index,
  Index as default
};
