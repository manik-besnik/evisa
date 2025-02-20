import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { S as Select } from "./Select-Cr-H89VX.js";
import { j as jobTypes } from "./index-B74Y7uk7.js";
import { useState } from "react";
import { I as InputBox } from "./InputBox-CqMgyXAz.js";
import { I as InputFile } from "./InputFile-Cn5gx5a_.js";
import { T as TinyEditor } from "./TinyEditor-BTm0VB73.js";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import "./Close-DxNaVPET.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "react-icons/fa6";
import "./index-DbarwM_f.js";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "react-toastify";
import "./ArrowDownSolid-8ROrdjAq.js";
import "@tinymce/tinymce-react";
const CreateJobPost = () => {
  const [type, setType] = useState(null);
  const { data, setData, post, errors, processing } = useForm({
    "type": "",
    "thumbnail": "",
    "title": "",
    "company": "",
    "salary_range": "",
    "location": "",
    "description": "",
    "last_apply_date": ""
  });
  const handleFileChange = (fileType, file) => {
    setData("thumbnail", file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.job-posts.store"));
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Add New Job | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Add New Job Post", children: /* @__PURE__ */ jsx(Link, { href: route("admin.job-posts.index"), className: "btn-primary", children: " Job Post List" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-y-2", children: [
      /* @__PURE__ */ jsx(
        Select,
        {
          placeholder: "Select Type",
          label: "Job Type(Full Time/Part Time)*",
          items: jobTypes,
          selected: type,
          setSelected: setType,
          handleValueChange: (value) => setData("type", value.id),
          defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
          error: errors.type
        }
      ),
      /* @__PURE__ */ jsx(
        InputBox,
        {
          value: data.title,
          onChange: (e) => setData("title", e.target.value),
          error: errors.title,
          id: "job-title",
          label: "Title",
          placeholder: "Ex: Software Engineer",
          divClasses: "my-3",
          defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
          labelClasses: "text-text-primary"
        }
      ),
      /* @__PURE__ */ jsx(
        InputBox,
        {
          value: data.company,
          onChange: (e) => setData("company", e.target.value),
          error: errors.company,
          id: "company",
          label: "Company Name",
          placeholder: "Enter Company Name",
          divClasses: "my-3",
          defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
          labelClasses: "text-text-primary"
        }
      ),
      /* @__PURE__ */ jsx(
        InputBox,
        {
          value: data.location,
          onChange: (e) => setData("location", e.target.value),
          error: errors.location,
          id: "company-location",
          label: "Location",
          placeholder: "Type Here",
          divClasses: "my-3",
          defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
          labelClasses: "text-text-primary"
        }
      ),
      /* @__PURE__ */ jsx(
        InputBox,
        {
          value: data.salary_range,
          onChange: (e) => setData("salary_range", e.target.value),
          error: errors.salary_range,
          id: "salary",
          label: "Salary Range",
          placeholder: "Ex: $300-$400",
          divClasses: "my-3",
          defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
          labelClasses: "text-text-primary"
        }
      ),
      /* @__PURE__ */ jsx(
        InputBox,
        {
          value: data.last_apply_date,
          onChange: (e) => setData("last_apply_date", e.target.value),
          error: errors.last_apply_date,
          id: "last-apply-date",
          label: "Last Apply Date",
          placeholder: "Ex: $300-$400",
          divClasses: "my-3",
          defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
          labelClasses: "text-text-primary",
          type: "date"
        }
      ),
      /* @__PURE__ */ jsx(
        InputFile,
        {
          placeholder: "Select Post Thumbnail",
          onChange: handleFileChange,
          fileType: "thumbanil",
          type: "file"
        }
      ),
      /* @__PURE__ */ jsx(TinyEditor, { value: data.description, onChange: (value) => setData("description", value) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn-primary",
          onClick: handleSubmit,
          disabled: processing,
          type: "submit",
          children: "Save"
        }
      ) })
    ] }) })
  ] });
};
export {
  CreateJobPost as default
};
