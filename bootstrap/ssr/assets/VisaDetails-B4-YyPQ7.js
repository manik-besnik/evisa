import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, router } from "@inertiajs/react";
import { a as getValue, v as visaDocuments, i as isPermitted } from "./index-DbarwM_f.js";
import { c as visaStatuses, b as genders, m as maritalStatuses, p as permissionEnums, v as visaProcessingTypes, a as visaTypes, g as groups } from "./index-B74Y7uk7.js";
import { FaRegEye } from "react-icons/fa6";
import { I as InfoSection, a as InfoItem } from "./InfoItem-B7VJ6rrj.js";
import { useState } from "react";
import { S as Select } from "./Select-Cr-H89VX.js";
import { MdFileDownload } from "react-icons/md";
import { D as DangerButton } from "./DangerButton-C_x1CXfY.js";
import { FaTrashAlt } from "react-icons/fa";
import { D as DeleteConfirmModal } from "./DeleteConfirmModal-Drh0rErj.js";
const VisaDetails = ({ isAdmin }) => {
  const { visa_apply } = usePage().props;
  const [status, setStatus] = useState(visaStatuses.find((item) => item.id === visa_apply.status));
  const [document, setDocument] = useState(null);
  const [show, setShow] = useState(false);
  const changeStatus = (value) => {
    router.put(route("admin.visa-applies.change-status", visa_apply.id), { status: value.id });
  };
  const deleteDocument = (url) => {
    setDocument(url);
    setShow(true);
  };
  const confirmDeleteDocument = () => {
    router.delete(route("admin.visa-applies.delete.document", { visa_apply: visa_apply.id, url: document }), {
      onSuccess: () => {
        setShow(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsxs(InfoSection, { title: "General Info", children: [
          /* @__PURE__ */ jsx(InfoItem, { label: "Name", value: visa_apply.personal_info.name }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Name (Arabic)", value: visa_apply.personal_info.name_arabic }),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "Current Nationality",
              value: visa_apply.personal_info.current_nationality.nationality
            }
          ),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "Previous Nationality",
              value: visa_apply.personal_info.prev_nationality.nationality
            }
          ),
          /* @__PURE__ */ jsx(InfoItem, { label: "Gender", value: getValue(genders, visa_apply.personal_info.gender) }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Date of Birth", value: visa_apply.personal_info.date_of_birth }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Birth Country", value: visa_apply.personal_info.birth_country.name }),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "Marital Status",
              value: getValue(maritalStatuses, visa_apply.personal_info.marital_status)
            }
          ),
          /* @__PURE__ */ jsx(InfoItem, { label: "Birth Place", value: visa_apply.personal_info.birth_place }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Birth Place (Arabic)", value: visa_apply.personal_info.birth_place_arabic }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Mother's Name", value: visa_apply.personal_info.mother_name }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Mother's Name (Arabic)", value: visa_apply.personal_info.mother_name_arabic }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Religion", value: visa_apply.personal_info.religion }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Faith", value: visa_apply.personal_info.faith }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Qualification", value: visa_apply.personal_info.qualification }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Profession", value: visa_apply.personal_info.profession })
        ] }),
        /* @__PURE__ */ jsx(InfoSection, { title: "Documents", children: JSON.parse(visa_apply.documents) && JSON.parse(visa_apply.documents.length) > 0 ? /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside text-gray-800 text-sm", children: JSON.parse(visa_apply.documents).map((doc, index) => /* @__PURE__ */ jsxs("li", { className: "mb-2 flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { children: doc.name }),
          /* @__PURE__ */ jsx("a", { href: doc.url, target: "_blank", children: /* @__PURE__ */ jsx(FaRegEye, {}) })
        ] }, index)) }) : /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No documents available" }) }),
        visa_apply.visa_document && /* @__PURE__ */ jsx(InfoSection, { title: "Downloads", children: /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside text-gray-800 text-sm", children: visaDocuments(visa_apply.visa_document).map((doc, index) => /* @__PURE__ */ jsxs("li", { className: "mb-2 flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { children: doc.name }),
          /* @__PURE__ */ jsxs("p", { className: "flex gap-x-4 items-center", children: [
            /* @__PURE__ */ jsx("a", { href: doc.url, download: doc.url, target: "_blank", children: /* @__PURE__ */ jsx(MdFileDownload, { className: "text-lg" }) }),
            /* @__PURE__ */ jsx("a", { href: doc.url, target: "_blank", children: /* @__PURE__ */ jsx(FaRegEye, {}) }),
            isPermitted(permissionEnums.DELETE_DOCUMENT_VISA) && isAdmin && /* @__PURE__ */ jsx(DangerButton, { onClick: () => deleteDocument(doc.url), children: /* @__PURE__ */ jsx(FaTrashAlt, {}) })
          ] })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2", children: [
        /* @__PURE__ */ jsxs(InfoSection, { title: "Visa Info", children: [
          /* @__PURE__ */ jsx(InfoItem, { label: "App ID", value: visa_apply.app_id }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Personal Name | Company Name", value: visa_apply.name }),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "Processing Type",
              value: getValue(visaProcessingTypes, visa_apply.processing_type)
            }
          ),
          /* @__PURE__ */ jsx(InfoItem, { label: "Visa Type", value: getValue(visaTypes, visa_apply.visa_type) }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Group", value: getValue(groups, visa_apply.group) }),
          isAdmin ? /* @__PURE__ */ jsx(
            Select,
            {
              items: visaStatuses,
              selected: status,
              label: "Visa Status",
              setSelected: setStatus,
              handleValueChange: changeStatus,
              placeholder: "Select Status"
            }
          ) : /* @__PURE__ */ jsx(InfoItem, { label: "Status", value: getValue(visaStatuses, visa_apply.status) })
        ] }),
        /* @__PURE__ */ jsxs(InfoSection, { title: "Passport Info", children: [
          /* @__PURE__ */ jsx(InfoItem, { label: "Passport Type", value: visa_apply.passport.passport_type }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Passport Number", value: visa_apply.passport.passport_no }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Issue Date", value: visa_apply.passport.passport_issue_date }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Expiry Date", value: visa_apply.passport.passport_expire_date }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Issue Place", value: visa_apply.passport.passport_issue_place }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Issue Place (Arabic)", value: visa_apply.passport.passport_issue_place_arabic }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Issue Country", value: visa_apply.passport.issue_country.name })
        ] }),
        /* @__PURE__ */ jsxs(InfoSection, { title: "Guarantor Info", children: [
          /* @__PURE__ */ jsx(InfoItem, { label: "Guarantor Name", value: visa_apply.guarantor.name }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Guarantor Passport Number", value: visa_apply.guarantor.passport_no }),
          /* @__PURE__ */ jsx(
            InfoItem,
            {
              label: "Guarantor Nationality",
              value: visa_apply.guarantor.guarantor_nationality.nationality
            }
          ),
          /* @__PURE__ */ jsx(InfoItem, { label: "Guarantor Phone", value: visa_apply.guarantor.phone }),
          /* @__PURE__ */ jsx(InfoItem, { label: "Guarantor Relation", value: visa_apply.guarantor.relation })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(DeleteConfirmModal, { show, setShow, handleConfirmDelete: confirmDeleteDocument })
  ] });
};
export {
  VisaDetails as V
};
