import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as DangerButton } from "./DangerButton-C_x1CXfY.js";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { usePage, router } from "@inertiajs/react";
import { T as Table } from "./Table-A2qeV3ma.js";
import { V as VisaApplyTableHeading, c as visaStatuses, p as permissionEnums } from "./index-B74Y7uk7.js";
import { a as getValue, g as getFormattedDate, i as isPermitted } from "./index-DbarwM_f.js";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import { D as DeleteConfirmModal } from "./DeleteConfirmModal-Drh0rErj.js";
import { P as Pagination } from "./Pagination-DNB83QUR.js";
const VisaApplicationTable = ({ isAdmin = false }) => {
  const visa_applies = usePage().props.visa_applies;
  const [visaApply, setVisaApply] = useState(null);
  const [show, setShow] = useState(false);
  const handleEdit = (application) => {
    if (isAdmin) {
      return router.get(route("admin.visa-applies.edit", application.id));
    }
    return router.get(route("agency.visa-applies.edit", application.id));
  };
  const handleDelete = (visaApply2) => {
    setVisaApply(visaApply2);
    setShow(true);
  };
  const handleConfirmDelete = () => {
    router.delete(route("admin.visa-applies.destroy", visaApply), {
      onSuccess: () => {
        setShow(false);
      }
    });
  };
  const handleView = (application) => {
    if (isAdmin) {
      return router.get(route("admin.visa-applies.show", application.id));
    }
    return router.get(route("agency.visa-applies.show", application.id));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Table, { heading: VisaApplyTableHeading, children: visa_applies.data.length > 0 && visa_applies.data.map((application, index) => {
      var _a;
      return /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: index + 1 }),
        /* @__PURE__ */ jsx("td", { children: application.name }),
        /* @__PURE__ */ jsx("td", { children: (_a = application == null ? void 0 : application.passport) == null ? void 0 : _a.passport_no }),
        /* @__PURE__ */ jsx("td", { children: getValue(visaStatuses, application.status) }),
        /* @__PURE__ */ jsx("td", { children: getFormattedDate(application.created_at) }),
        /* @__PURE__ */ jsxs("td", { className: "flex gap-x-2", children: [
          isPermitted(permissionEnums.VIEW_SINGLE_VISA) && /* @__PURE__ */ jsx("button", { type: "button", className: "btn-primary", onClick: () => handleView(application), children: /* @__PURE__ */ jsx(FaRegEye, {}) }),
          isPermitted(permissionEnums.EDIT_VISA) && /* @__PURE__ */ jsx("button", { type: "button", className: "btn-primary", onClick: () => handleEdit(application), children: /* @__PURE__ */ jsx(FaRegEdit, {}) }),
          isPermitted(permissionEnums.DELETE_VISA) && /* @__PURE__ */ jsx(DangerButton, { onClick: () => handleDelete(application), children: /* @__PURE__ */ jsx(FaTrashAlt, {}) })
        ] })
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx(Pagination, { links: visa_applies.links }),
    /* @__PURE__ */ jsx(
      DeleteConfirmModal,
      {
        show,
        setShow,
        handleConfirmDelete,
        title: "Delete Visa Application"
      }
    )
  ] });
};
export {
  VisaApplicationTable as V
};
