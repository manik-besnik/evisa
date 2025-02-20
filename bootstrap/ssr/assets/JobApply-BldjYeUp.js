import { jsxs, jsx } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { usePage, useForm, Head } from "@inertiajs/react";
import { T as TextInput } from "./TextInput-DakFYVas.js";
import { I as InputFile } from "./InputFile-p-wlam7A.js";
import { S as Select } from "./Select-6VSyQHkQ.js";
import { useState } from "react";
import { l as languageProficiency, f as jobApplyDocuments } from "./index-B74Y7uk7.js";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { P as PrimaryBtn } from "./PrimaryBtn-BeKpKB4W.js";
import "react-toastify";
import "react-icons/ri";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
const TextArea = ({
  placeholder,
  value,
  onChange,
  id = "textarea-field",
  label = "",
  divClasses = "",
  defaultClasses = "bg-white focus:border-l-red-500 border-red-500",
  textareaClasses = "",
  labelClasses = "",
  error = ""
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col my-1 ${divClasses}`, children: [
    label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: `text-sm font-medium text-gray-200 mb-1 ${labelClasses}`, children: label }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        id,
        placeholder,
        value,
        onChange,
        className: `w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 border-0 border-l-4 focus:outline-none focus:ring-0 ${defaultClasses} ${textareaClasses}`,
        rows: 4
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-500 mt-2 text-xs", children: error })
  ] });
};
const JobApply = () => {
  var _a;
  const countries = usePage().props.countries;
  const languages = usePage().props.languages;
  const jobs = usePage().props.job_posts;
  const { data, setData, post, errors, processing, reset } = useForm({
    job_post_id: ((_a = route().params) == null ? void 0 : _a.id) ?? "",
    name: "",
    phone: "",
    email: "",
    avatar: "",
    exam_name: "",
    passing_year: "",
    institute: "",
    result: "",
    computer_skill: "",
    driving_license: "",
    driving_license_issue_date: "",
    driving_license_expire_date: "",
    english_proficiency: "",
    arabic_proficiency: "",
    urdu_proficiency: "",
    mother_language: "",
    shirt_size: "",
    pant_size: "",
    show_size: "",
    height: "",
    weight: "",
    nearest_airport: "",
    summary: "",
    documents: [],
    job_experiences: [
      {
        position: "",
        duration: "",
        company: "",
        country: "",
        country_id: ""
      }
    ]
  });
  const [jobPost, setJobPost] = useState(jobs.find((item) => {
    var _a2, _b;
    return item.id === Number((_b = (_a2 = route()) == null ? void 0 : _a2.params) == null ? void 0 : _b.id);
  }) ?? null);
  const [motherLanguage, setMotherLanguage] = useState(null);
  const [englishProficiency, setEnglishProficiency] = useState(null);
  const [arabicProficiency, setArabicProficiency] = useState(null);
  const [urduProficiency, setUrduProficiency] = useState(null);
  const updateJobExperience = (index, key, value) => {
    const updatedExperiences = [...data.job_experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [key]: value,
      ...key === "country" && { country_id: value == null ? void 0 : value.id }
    };
    setData("job_experiences", updatedExperiences);
  };
  const deleteExperience = (i) => {
    data.job_experiences.splice(i, 1);
    setData("job_experiences", data.job_experiences);
  };
  const addNewExperience = () => {
    const experience = {
      position: "",
      duration: "",
      company: "",
      country: "",
      country_id: ""
    };
    const experiences = [
      ...data.job_experiences,
      experience
    ];
    setData("job_experiences", experiences);
  };
  const handleFileChange = (fileType, file) => {
    var _a2;
    const fileName = ((_a2 = jobApplyDocuments.find((item) => item.type === fileType)) == null ? void 0 : _a2.name) || "Unknown";
    const updatedDocuments = {
      ...data.documents,
      [fileType]: {
        name: fileName,
        type: fileType,
        file
      }
    };
    setData("documents", updatedDocuments);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("job-posts.store"), {
      onSuccess: () => {
        reset();
      }
    });
  };
  return /* @__PURE__ */ jsxs(WebLayout, { showBgImage: false, showServiceImage: false, children: [
    /* @__PURE__ */ jsx(Head, { title: "Job Apply | Dubai E-Visa" }),
    /* @__PURE__ */ jsxs("div", { className: "container mt-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-text-primary text-lg font-semibold mt-3", children: "Apply Form" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-y-2 gap-x-4 md:gap-y-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              TextInput,
              {
                value: data.name,
                onChange: (e) => setData("name", e.target.value),
                error: errors.name,
                id: "personal-name",
                placeholder: "Name",
                label: "Name*",
                defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                labelClasses: "text-text-primary"
              }
            ),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                value: data.phone,
                onChange: (e) => setData("phone", e.target.value),
                error: errors.phone,
                id: "phone",
                placeholder: "Mobile Number with country code",
                label: "Mobile No*",
                defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                labelClasses: "text-text-primary"
              }
            ),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                value: data.email,
                onChange: (e) => setData("email", e.target.value),
                error: errors.email,
                id: "email",
                placeholder: "Email Address",
                label: "Email*",
                defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                labelClasses: "text-text-primary"
              }
            ),
            /* @__PURE__ */ jsx(
              Select,
              {
                placeholder: "Select Job",
                label: "Apply for post*",
                items: jobs,
                selected: jobPost,
                setSelected: setJobPost,
                handleValueChange: (value) => setData("job_post_id", value.id),
                error: errors.job_post_id,
                field: "title",
                defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/4", children: /* @__PURE__ */ jsx(
            InputFile,
            {
              defaultClasses: "w-[160px] h-[160px]",
              placeholder: "Passport size pic",
              onChange: handleFileChange,
              fileType: "avatar"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-success mt-2 text-md", children: "Educational Details" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.exam_name,
              onChange: (e) => setData("exam_name", e.target.value),
              error: errors.exam_name,
              id: "centificate",
              placeholder: "EX: SSC",
              label: "Certificate*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.passing_year,
              onChange: (e) => setData("passing_year", e.target.value),
              error: errors.passing_year,
              id: "passing_year",
              placeholder: "EX: 2016",
              label: "Passing Year*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.institute,
              onChange: (e) => setData("institute", e.target.value),
              error: errors.institute,
              id: "institute",
              placeholder: "EX: Dhaka University",
              label: "Board | Universaity*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.result,
              onChange: (e) => setData("result", e.target.value),
              error: errors.result,
              id: "institute",
              placeholder: "Result in GPA/CGPA",
              label: "Result*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.computer_skill,
              onChange: (e) => setData("computer_skill", e.target.value),
              error: errors.computer_skill,
              id: "computer-skill",
              placeholder: "Enter Your Computer skill",
              label: "Computer Skill*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.driving_license,
              onChange: (e) => setData("driving_license", e.target.value),
              error: errors.driving_license,
              id: "driving_license",
              placeholder: "Enter Your Driving License",
              label: "Driving License*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.driving_license_issue_date,
              onChange: (e) => setData("driving_license_issue_date", e.target.value),
              error: errors.driving_license_issue_date,
              id: "driving_license_issue_date",
              placeholder: "Driving License Issue Date",
              label: "Driving License Issue Date*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "date"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.driving_license_expire_date,
              onChange: (e) => setData("driving_license_expire_date", e.target.value),
              error: errors.driving_license_expire_date,
              id: "driving_license_expire_date",
              placeholder: "Driving License Expire Date",
              label: "Driving License Expire Date*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "date"
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Select Label",
              label: "English*",
              items: languageProficiency,
              selected: englishProficiency,
              setSelected: setEnglishProficiency,
              handleValueChange: (value) => setData("english_proficiency", value.id),
              error: errors.english_proficiency,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Select Label",
              label: "Arabic*",
              items: languageProficiency,
              selected: arabicProficiency,
              setSelected: setArabicProficiency,
              handleValueChange: (value) => setData("arabic_proficiency", value.id),
              error: errors.arabic_proficiency,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Select Label",
              label: "Urbu/Hindi*",
              items: languageProficiency,
              selected: urduProficiency,
              setSelected: setUrduProficiency,
              handleValueChange: (value) => setData("urdu_proficiency", value.id),
              error: errors.urdu_proficiency,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Select Language",
              label: "Mother Language*",
              items: languages,
              selected: motherLanguage,
              setSelected: setMotherLanguage,
              handleValueChange: (value) => setData("mother_language", value.id),
              error: errors.mother_language,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-8", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-success text-md", children: "Job Experiences" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: addNewExperience,
              className: "flex items-center gap-x-2 py-2 px-4 text-white bg-yellow-500 hover:bg-primary font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)] text-xs hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200",
              children: [
                /* @__PURE__ */ jsx(FaPlus, { className: "text-white" }),
                " Add New Experience"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { children: data.job_experiences.map((item, i) => {
          var _a2, _b, _c, _d;
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2", children: [
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: item.position,
                  onChange: (e) => updateJobExperience(i, "position", e.target.value),
                  error: (errors == null ? void 0 : errors.job_experiences) ? (_a2 = errors == null ? void 0 : errors.job_experiences[i]) == null ? void 0 : _a2.position : "",
                  id: `position-${i}`,
                  placeholder: "EX: Software Enginner",
                  label: "Position*",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: item.duration,
                  onChange: (e) => updateJobExperience(i, "duration", e.target.value),
                  error: (errors == null ? void 0 : errors.job_experiences) ? (_b = errors == null ? void 0 : errors.job_experiences[i]) == null ? void 0 : _b.duration : "",
                  id: `duration-${i}`,
                  placeholder: "EX: 4 Years",
                  label: "Duration*",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: item.company,
                  onChange: (e) => updateJobExperience(i, "company", e.target.value),
                  error: (errors == null ? void 0 : errors.job_experiences) ? (_c = errors == null ? void 0 : errors.job_experiences[i]) == null ? void 0 : _c.company : "",
                  id: `company-${i}`,
                  placeholder: "Company Name",
                  label: "Company Name*",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                Select,
                {
                  placeholder: "Select Country",
                  label: "Country*",
                  items: countries,
                  selected: item.country,
                  setSelected: (value) => updateJobExperience(i, "country", value),
                  handleValueChange: (value) => updateJobExperience(i, "country", value),
                  error: (errors == null ? void 0 : errors.job_experiences) ? (_d = errors == null ? void 0 : errors.job_experiences[i]) == null ? void 0 : _d.country_id : "",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  classes: "mt-1"
                }
              )
            ] }),
            i > 0 && /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => deleteExperience(i),
                className: "bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between",
                children: /* @__PURE__ */ jsx(FaTrashAlt, {})
              }
            )
          ] }, i);
        }) }),
        /* @__PURE__ */ jsx("h4", { className: "text-success text-md my-4", children: "Others Information" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.shirt_size,
              onChange: (e) => setData("shirt_size", e.target.value),
              error: errors.shirt_size,
              id: "shirt-size",
              placeholder: "Type Here",
              label: "Shirt Size*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "text"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.weight,
              onChange: (e) => setData("weight", e.target.value),
              error: errors.weight,
              id: "weight",
              placeholder: "Type Here",
              label: "Weight (In KG)*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "text"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.pant_size,
              onChange: (e) => setData("pant_size", e.target.value),
              error: errors.pant_size,
              id: "pant-size",
              placeholder: "Type Here",
              label: "Pant Size(Waist)*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "text"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.height,
              onChange: (e) => setData("height", e.target.value),
              error: errors.height,
              id: "height-size",
              placeholder: "Type Here",
              label: "Height(in Centimeters)*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "text"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.show_size,
              onChange: (e) => setData("show_size", e.target.value),
              error: errors.show_size,
              id: "shoes-size",
              placeholder: "Type Here",
              label: "shoes Size*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "text"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.nearest_airport,
              onChange: (e) => setData("nearest_airport", e.target.value),
              error: errors.nearest_airport,
              id: "nearest_airport",
              placeholder: "Type Here",
              label: "Nearest Airport*",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "text"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-success text-md my-4", children: "Add Any Type of documents" }),
        errors.documents && /* @__PURE__ */ jsx("span", { className: "text-red-600 text-sm", children: errors.documents }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2", children: jobApplyDocuments.map((item, i) => /* @__PURE__ */ jsx(
          InputFile,
          {
            defaultClasses: "w-full h-10",
            fileType: item.type,
            onChange: handleFileChange,
            placeholder: item.name
          },
          i
        )) }),
        /* @__PURE__ */ jsx(
          TextArea,
          {
            value: data.summary,
            onChange: (e) => setData("summary", e.target.value),
            error: errors.summary,
            id: "summary",
            placeholder: "Write Here",
            label: "Summary*",
            defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary mt-2",
            labelClasses: "text-text-primary mt-4"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center items-center mt-4", children: /* @__PURE__ */ jsx(
          PrimaryBtn,
          {
            classes: "w-[300px]",
            disabled: processing,
            type: "submit",
            text: "Apply",
            onClick: handleSubmit
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  JobApply as default
};
