import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { T as TextInput } from "./TextInput-DakFYVas.js";
import { S as Select } from "./Select-6VSyQHkQ.js";
import { v as visaProcessingTypes, a as visaTypes, g as groups, c as visaStatuses } from "./index-B74Y7uk7.js";
import { useState } from "react";
import { useForm, router, usePage, Link, Head } from "@inertiajs/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import { a as getValue } from "./index-DbarwM_f.js";
import "react-toastify";
import "react-icons/fa";
import "react-icons/ri";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
const SearchForm = () => {
  var _a;
  const queryParams = (_a = route()) == null ? void 0 : _a.params;
  let visaProcessingType = "";
  if (queryParams == null ? void 0 : queryParams.processing_type) {
    visaProcessingType = visaProcessingTypes.find((item) => item.id === Number(queryParams == null ? void 0 : queryParams.processing_type));
  }
  let type = "";
  if (queryParams == null ? void 0 : queryParams.visa_type) {
    type = visaTypes.find((item) => item.id === Number(queryParams == null ? void 0 : queryParams.visa_type));
  }
  let visaGroup = "";
  if (queryParams == null ? void 0 : queryParams.group) {
    visaGroup = groups.find((item) => item.id === Number(queryParams == null ? void 0 : queryParams.group));
  }
  let status = "";
  if (queryParams == null ? void 0 : queryParams.visa_status) {
    status = visaStatuses.find((item) => item.id === Number(queryParams == null ? void 0 : queryParams.visa_status));
  }
  const [processingType, setProcessingType] = useState(visaProcessingType);
  const [visaType, setVisaType] = useState(type);
  const [group, setGroup] = useState(visaGroup);
  const [visaStatus, setVisaStatus] = useState(status);
  const { data, setData, processing } = useForm({
    name: (queryParams == null ? void 0 : queryParams.name) || "",
    app_id: (queryParams == null ? void 0 : queryParams.app_id) || "",
    processing_type: (queryParams == null ? void 0 : queryParams.processing_type) || "",
    visa_type: (queryParams == null ? void 0 : queryParams.visa_type) || "",
    from_date: (queryParams == null ? void 0 : queryParams.from_date) || "",
    to_date: (queryParams == null ? void 0 : queryParams.to_date) || "",
    personal_name: (queryParams == null ? void 0 : queryParams.personal_name) || "",
    passport_no: (queryParams == null ? void 0 : queryParams.passport_no) || "",
    group: (queryParams == null ? void 0 : queryParams.group) || "",
    visa_status: (queryParams == null ? void 0 : queryParams.visa_status) || ""
  });
  const resetForm = () => {
    setProcessingType("");
    setVisaType("");
    setGroup("");
    setVisaStatus("");
    setData("name", "");
    setData("app_id", "");
    setData("processing_type", "");
    setData("visa_type", "");
    setData("from_date", "");
    setData("to_date", "");
    setData("personal_name", "");
    setData("passport_no", "");
    setData("group", "");
    setData("visa_status", "");
  };
  const handleSearch = () => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "" && value !== null)
    );
    router.get(route("visa-apply.index"), filteredData);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h3", { className: "text-text-primary text-lg font-semibold mt-3", children: "Search Report" }),
    /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-x-4 items-center", children: [
        /* @__PURE__ */ jsx(
          TextInput,
          {
            value: data.name,
            id: "personal-name",
            placeholder: "Personal Name",
            label: "Personal Name",
            divClasses: "my-3",
            inputClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            labelClasses: "text-text-primary",
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            placeholder: "Processing Type",
            label: "Processing Type",
            items: visaProcessingTypes,
            selected: processingType,
            setSelected: setProcessingType,
            handleValueChange: (value) => setData("processing_type", value.id),
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            classes: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            placeholder: "Visa Type",
            label: "Visa Type",
            items: visaTypes,
            selected: visaType,
            setSelected: setVisaType,
            handleValueChange: (value) => setData("visa_type", value.id),
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            classes: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "from-date",
            value: data.from_date,
            onChange: (e) => setData("from_date", e.target.value),
            placeholder: "From Date",
            label: "From Date",
            divClasses: "my-3",
            inputClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            labelClasses: "text-text-primary",
            type: "date",
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "to-date",
            value: data.to_date,
            onChange: (e) => setData("to_date", e.target.value),
            placeholder: "To Date",
            label: "To Date",
            divClasses: "my-3",
            inputClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            labelClasses: "text-text-primary",
            type: "date",
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            placeholder: "Name",
            label: "Name",
            divClasses: "my-3",
            inputClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            labelClasses: "text-text-primary",
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "passport-no",
            value: data.passport_no,
            onChange: (e) => setData("passport_no", e.target.value),
            placeholder: "Passport No",
            label: "Passport No",
            divClasses: "my-3",
            inputClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            labelClasses: "text-text-primary",
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "app-id",
            value: data.app_id,
            onChange: (e) => setData("app_id", e.target.value),
            placeholder: "App ID",
            label: "App ID",
            divClasses: "my-3",
            inputClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            labelClasses: "text-text-primary",
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            placeholder: "Select Group",
            label: "Group ID",
            items: groups,
            selected: group,
            setSelected: setGroup,
            handleValueChange: (value) => setData("group", value.id),
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            classes: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            placeholder: "Select Status",
            label: "Status",
            items: visaStatuses,
            selected: visaStatus,
            setSelected: setVisaStatus,
            handleValueChange: (value) => setData("visa_status", value.id),
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
            classes: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex gap-x-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleSearch,
            type: "button",
            disabled: processing,
            className: `py-2 px-4 bg-warning rounded hover:bg-warning text-white font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)]  hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200 `,
            children: "Search Visa"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: resetForm,
            type: "button",
            className: `py-2 px-4 rounded bg-yellow-500 hover:bg-primary text-gray-800 font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)]  hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200 `,
            children: "Clear"
          }
        )
      ] })
    ] })
  ] });
};
const SearchResult = () => {
  const visa_applies = usePage().props.visa_applies;
  return /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white text-sm mb-4", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-[#B8860B] text-white", children: [
      /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-l border-t border-[#D4AF37]", children: "App ID" }),
      /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Name" }),
      /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Passport No" }),
      /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Nationality" }),
      /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Visa Type" }),
      /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-left border-r border-t border-[#D4AF37]", children: "Status" }),
      /* @__PURE__ */ jsx("th", { className: "px-3 py-2 text-center border-r border-t border-[#D4AF37]", children: "Action" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-200", children: visa_applies.length > 0 ? visa_applies.map((row, index) => /* @__PURE__ */ jsxs(
      "tr",
      {
        className: `${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors duration-150`,
        children: [
          /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-l border-r border-b border-gray-200", children: row.app_id }),
          /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: row.name }),
          /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: row.passport.passport_no }),
          /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: row.personal_info.current_nationality.nationality }),
          /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: getValue(visaTypes, row.visa_type) }),
          /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-sm border-r border-b border-gray-200", children: getValue(visaStatuses, row.status) }),
          /* @__PURE__ */ jsx("td", { className: "px-3 py-2 text-center border-r border-b border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("visa-apply.show", row.id),
                className: "text-gray-600 hover:text-gray-800",
                children: /* @__PURE__ */ jsx(MdOutlineRemoveRedEye, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("visa-apply.index"),
                className: "text-gray-600 hover:text-gray-800",
                children: /* @__PURE__ */ jsx(FiRefreshCw, {})
              }
            )
          ] }) })
        ]
      },
      row.id
    )) : "Data Not Found" })
  ] }) }) });
};
const Report = () => {
  return /* @__PURE__ */ jsxs(WebLayout, { showServiceImage: false, showBgImage: false, children: [
    /* @__PURE__ */ jsx(Head, { title: "Search Result | Dubai E-Visa" }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx(SearchForm, {}),
      /* @__PURE__ */ jsx(SearchResult, {})
    ] })
  ] });
};
export {
  Report as default
};
