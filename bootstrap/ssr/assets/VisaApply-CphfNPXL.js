import { jsx, jsxs } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { T as TextInput } from "./TextInput-DakFYVas.js";
import { S as Select } from "./Select-6VSyQHkQ.js";
import { b as genders, m as maritalStatuses, v as visaProcessingTypes, a as visaTypes, g as groups, d as documentTypes } from "./index-B74Y7uk7.js";
import { useState } from "react";
import { usePage, useForm, Head } from "@inertiajs/react";
import { P as PrimaryBtn } from "./PrimaryBtn-BeKpKB4W.js";
import { I as InputFile } from "./InputFile-p-wlam7A.js";
import { toast } from "react-toastify";
import { GrAttachment } from "react-icons/gr";
import "react-icons/fa";
import "react-icons/ri";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
const PassportInputFile = ({
  defaultClasses = "w-[70px] h-[70px] ",
  classes = "",
  placeholder = "",
  onChange,
  fileType = "",
  error = ""
}) => {
  const [fileName, setFileName] = useState(placeholder);
  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        setFileName(placeholder);
        return;
      }
      onChange(fileType, file);
      setFileName("Attached");
    } else {
      setFileName(placeholder);
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${defaultClasses} ${classes} border-l-4 border-l-primary p-2 ${fileName !== placeholder ? "bg-[#aec0d5]" : "bg-[#E0EBF8]"}`,
      children: /* @__PURE__ */ jsxs(
        "label",
        {
          className: "flex items-center justify-center w-full h-full cursor-pointer",
          htmlFor: `file-upload-${fileType}`,
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                onChange: (e) => handleUploadFile(e),
                id: `file-upload-${fileType}`,
                type: "file",
                accept: ".pdf,.png,.jpg,.jpeg,.webp",
                className: "hidden"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsx(GrAttachment, { size: 30 }),
              /* @__PURE__ */ jsx("p", { className: "text-xs break-words mt-3", children: fileName ? fileName : placeholder })
            ] }),
            error && /* @__PURE__ */ jsx("p", { className: "text-xs text-warning", children: error })
          ]
        }
      )
    }
  );
};
const VisaApply = () => {
  const { countries, personal_info, passport, guarantor } = usePage().props;
  let prevCurrentNationality = "";
  if (personal_info == null ? void 0 : personal_info.current_nationality) {
    prevCurrentNationality = countries.find((item) => item.id === personal_info.current_nationality);
  }
  let prevPrevNationality = "";
  if (personal_info == null ? void 0 : personal_info.prev_nationality) {
    prevPrevNationality = countries.find((item) => item.id === personal_info.prev_nationality);
  }
  let prevGender = "";
  if (personal_info == null ? void 0 : personal_info.gender) {
    prevGender = genders.find((item) => item.id === personal_info.gender);
  }
  let prevBirthCountry = "";
  if (personal_info == null ? void 0 : personal_info.birth_country) {
    prevBirthCountry = countries.find((item) => item.id === personal_info.birth_country);
  }
  let prevMaritalStatus = "";
  if (personal_info == null ? void 0 : personal_info.marital_status) {
    prevMaritalStatus = maritalStatuses.find((item) => item.id === personal_info.marital_status);
  }
  let prevPassportIssueCountry = "";
  if (passport == null ? void 0 : passport.passport_issue_country) {
    prevPassportIssueCountry = countries.find((item) => item.id === passport.passport_issue_country);
  }
  let guarantorPrevNationality = "";
  if (guarantor == null ? void 0 : guarantor.nationality) {
    guarantorPrevNationality = countries.find((item) => item.id === guarantor.nationality) ?? "";
  }
  const [isPassportRequired, setIsPassportRequired] = useState(false);
  const [isPhotoRequired, setIsPhotoRequired] = useState(false);
  const [processingType, setProcessingType] = useState("");
  const [visaType, setVisaType] = useState("");
  const [group, setGroup] = useState("");
  const [currentNationality, setCurrentNationality] = useState(prevCurrentNationality);
  const [prevNationality, setPrevNationality] = useState(prevPrevNationality);
  const [gender, setGender] = useState(prevGender);
  const [birthCountry, setBirthCountry] = useState(prevBirthCountry);
  const [maritalStatus, setMaritalStatus] = useState(prevMaritalStatus);
  const [passportIssueCountry, setPassportIssueCountry] = useState(prevPassportIssueCountry);
  const [guarantorNationality, setGuarantorNationality] = useState(guarantorPrevNationality);
  const { data, setData, post, errors, processing } = useForm({
    personal_name: "",
    processing_type: null,
    visa_type: null,
    group: null,
    name: (personal_info == null ? void 0 : personal_info.name) ? personal_info.name : "",
    name_arabic: (personal_info == null ? void 0 : personal_info.name_arabic) ? personal_info.name_arabic : "",
    current_nationality: (personal_info == null ? void 0 : personal_info.current_nationality) ? personal_info.current_nationality : "",
    prev_nationality: (personal_info == null ? void 0 : personal_info.prev_nationality) ? personal_info.prev_nationality : "",
    gender: (personal_info == null ? void 0 : personal_info.gender) ? personal_info.gender : "",
    date_of_birth: (personal_info == null ? void 0 : personal_info.date_of_birth) ? personal_info.date_of_birth : "",
    birth_country: (personal_info == null ? void 0 : personal_info.birth_country) ? personal_info.birth_country : "",
    marital_status: (personal_info == null ? void 0 : personal_info.marital_status) ? personal_info.marital_status : "",
    birth_place: (personal_info == null ? void 0 : personal_info.birth_place) ? personal_info.birth_place : "",
    birth_place_arabic: (personal_info == null ? void 0 : personal_info.birth_place_arabic) ? personal_info.birth_place_arabic : "",
    mother_name: (personal_info == null ? void 0 : personal_info.mother_name) ? personal_info.mother_name : "",
    mother_name_arabic: (personal_info == null ? void 0 : personal_info.mother_name_arabic) ? personal_info.mother_name_arabic : "",
    religion: (personal_info == null ? void 0 : personal_info.religion) ? personal_info.religion : "",
    faith: (personal_info == null ? void 0 : personal_info.faith) ? personal_info.faith : "",
    qualification: (personal_info == null ? void 0 : personal_info.qualification) ? personal_info.qualification : "",
    profession: (personal_info == null ? void 0 : personal_info.profession) ? personal_info.profession : "",
    passport_type: (passport == null ? void 0 : passport.passport_type) ? passport.passport_type : "",
    passport_no: (passport == null ? void 0 : passport.passport_no) ? passport.passport_no : "",
    passport_issue_date: (passport == null ? void 0 : passport.passport_issue_date) ? passport.passport_issue_date : "",
    passport_expire_date: (passport == null ? void 0 : passport.passport_expire_date) ? passport.passport_expire_date : "",
    passport_issue_place: (passport == null ? void 0 : passport.passport_issue_place) ? passport.passport_issue_place : "",
    passport_issue_place_arabic: (passport == null ? void 0 : passport.passport_issue_place_arabic) ? passport.passport_issue_place_arabic : "",
    passport_issue_country: (passport == null ? void 0 : passport.passport_issue_country) ? passport.passport_issue_country : "",
    guarantor_name: (guarantor == null ? void 0 : guarantor.name) ? guarantor.name : "",
    guarantor_passport_no: (guarantor == null ? void 0 : guarantor.passport_no) ? guarantor.passport_no : "",
    guarantor_nationality: (guarantor == null ? void 0 : guarantor.nationality) ? guarantor.nationality : "",
    guarantor_phone: (guarantor == null ? void 0 : guarantor.phone) ? guarantor.phone : "",
    guarantor_relation: (guarantor == null ? void 0 : guarantor.relation) ? guarantor.relation : "",
    documents: {
      "passport": {
        "name": "Passport",
        "type": "passport",
        "file": null
      },
      "photo": {
        "name": "Photo",
        "type": "photo",
        "file": null
      }
    }
  });
  const updateVisaProcessingType = (value) => {
    setData("processing_type", value.id);
  };
  const updateVisaType = (value) => {
    setData("visa_type", value.id);
  };
  const updateGroup = (value) => {
    setData("group", value.id);
  };
  const updateCurrentNationality = (value) => {
    setData("current_nationality", value.id);
  };
  const updatePrevNationality = (value) => {
    setData("prev_nationality", value.id);
  };
  const updateGender = (value) => {
    setData("gender", value.id);
  };
  const updateBirthCountry = (value) => {
    setData("birth_country", value.id);
  };
  const updateMaritalStatus = (value) => {
    setData("marital_status", value.id);
  };
  const updatePassportIssueCountry = (value) => {
    setData("passport_issue_country", value.id);
  };
  const updateGuarantorNationality = (value) => {
    setData("guarantor_nationality", value.id);
  };
  const handleFileChange = (fileType, file) => {
    if (fileType === "passport") {
      setIsPassportRequired(false);
    }
    if (fileType === "photo") {
      setIsPhotoRequired(false);
    }
    data.documents[fileType] = {
      "name": documentTypes[fileType].name,
      "type": fileType,
      "file": file
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.documents["passport"].file && !data.documents["photo"].file) {
      setIsPhotoRequired(true);
      setIsPassportRequired(true);
      return;
    }
    if (!data.documents["passport"].file) {
      setIsPassportRequired(true);
      return;
    }
    if (!data.documents["photo"].file) {
      setIsPhotoRequired(true);
      return;
    }
    post(route("visa-apply.store"), {
      onSuccess: () => {
        toast("your application submitted successfully");
      }
    });
  };
  return /* @__PURE__ */ jsxs(WebLayout, { showBgImage: false, showServiceImage: false, children: [
    /* @__PURE__ */ jsx(Head, { title: "Apply For New Visa | Dubai E-Visa" }),
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-text-primary text-lg font-semibold mt-3", children: "Apply Visa" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.personal_name,
              onChange: (e) => setData("personal_name", e.target.value),
              error: errors.personal_name,
              id: "personal-name",
              placeholder: "Personal Name | Company Name",
              label: "Personal Name | Company Name",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Processing Type",
              label: "Processing Type*",
              items: visaProcessingTypes,
              selected: processingType,
              setSelected: setProcessingType,
              handleValueChange: updateVisaProcessingType,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              error: errors.processing_type
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Visa Type",
              label: "Visa Type*",
              items: visaTypes,
              selected: visaType,
              setSelected: setVisaType,
              handleValueChange: updateVisaType,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              error: errors.visa_type
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Select Group",
              label: "Group Membership(if any)",
              items: groups,
              selected: group,
              setSelected: setGroup,
              handleValueChange: updateGroup,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              error: errors.group
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-x-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-2/3", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-success mt-2 text-md", children: "Personal Information" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-x-4", children: [
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.name,
                  onChange: (e) => setData("name", e.target.value),
                  error: errors.name,
                  id: "fullname-english",
                  placeholder: "Full Name English",
                  label: "Full Name (English)",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.name_arabic,
                  onChange: (e) => setData("name_arabic", e.target.value),
                  error: errors.name_arabic,
                  id: "fullname-arabic",
                  placeholder: "Full Name Arabic",
                  label: "Full Name (Arabic)",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                Select,
                {
                  placeholder: "Select Nationality",
                  label: "Current Nationality*",
                  items: countries,
                  selected: currentNationality,
                  setSelected: setCurrentNationality,
                  handleValueChange: updateCurrentNationality,
                  error: errors.current_nationality,
                  field: "nationality",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                Select,
                {
                  placeholder: "Select Nationality",
                  label: "Prev Nationality",
                  items: countries,
                  selected: prevNationality,
                  setSelected: setPrevNationality,
                  handleValueChange: updatePrevNationality,
                  error: errors.prev_nationality,
                  field: "nationality",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                Select,
                {
                  placeholder: "Select Gender",
                  label: "Gender*",
                  items: genders,
                  selected: gender,
                  setSelected: setGender,
                  handleValueChange: updateGender,
                  error: errors.gender,
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.date_of_birth,
                  onChange: (e) => setData("date_of_birth", e.target.value),
                  error: errors.date_of_birth,
                  id: "date-of-birth",
                  placeholder: "Date Of Birth",
                  label: "Date Of Birth",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary",
                  type: "date"
                }
              ),
              /* @__PURE__ */ jsx(
                Select,
                {
                  placeholder: "Select Country",
                  label: "Birth Country*",
                  items: countries,
                  selected: birthCountry,
                  setSelected: setBirthCountry,
                  handleValueChange: updateBirthCountry,
                  error: errors.birth_country,
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                Select,
                {
                  placeholder: "Select Status",
                  label: "Marital Status*",
                  items: maritalStatuses,
                  selected: maritalStatus,
                  setSelected: setMaritalStatus,
                  handleValueChange: updateMaritalStatus,
                  error: errors.marital_status,
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.birth_place,
                  onChange: (e) => setData("birth_place", e.target.value),
                  error: errors.birth_place,
                  id: "birth-place-english",
                  placeholder: "Birth Place English",
                  label: "Birth Place (English)",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.birth_place_arabic,
                  onChange: (e) => setData("birth_place_arabic", e.target.value),
                  error: errors.birth_place_arabic,
                  id: "birth-place-arabic",
                  placeholder: "Birth Place Arabic",
                  label: "Birth Place (Arabic)",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.mother_name,
                  onChange: (e) => setData("mother_name", e.target.value),
                  error: errors.mother_name,
                  id: "mother-english",
                  placeholder: "Mother Name English",
                  label: "Mother Name (English)",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.mother_name_arabic,
                  onChange: (e) => setData("mother_name_arabic", e.target.value),
                  error: errors.mother_name_arabic,
                  id: "mother-arabic",
                  placeholder: "Mother Name Arabic",
                  label: "Mother Name (Arabic)",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.religion,
                  onChange: (e) => setData("religion", e.target.value),
                  error: errors.religion,
                  id: "religion",
                  placeholder: "Religion",
                  label: "Religion",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.faith,
                  onChange: (e) => setData("faith", e.target.value),
                  error: errors.faith,
                  id: "faith",
                  placeholder: "Faith",
                  label: "Faith",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.qualification,
                  onChange: (e) => setData("qualification", e.target.value),
                  error: errors.qualification,
                  id: "qualification",
                  placeholder: "Qualification",
                  label: "Qualification",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  value: data.profession,
                  onChange: (e) => setData("profession", e.target.value),
                  error: errors.profession,
                  id: "profession",
                  placeholder: "Profession",
                  label: "Profession",
                  divClasses: "my-3",
                  defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
                  labelClasses: "text-text-primary"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-1/3", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-success mt-6 text-md mb-5", children: "Documents" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2", children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  PassportInputFile,
                  {
                    defaultClasses: "w-[140px] h-[140px]",
                    placeholder: "Passport Page 1",
                    onChange: handleFileChange,
                    fileType: "passport"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-1 flex-wrap", children: [
                  /* @__PURE__ */ jsx(
                    InputFile,
                    {
                      placeholder: "Photo",
                      onChange: handleFileChange,
                      fileType: "photo"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputFile,
                    {
                      placeholder: "Deposit Paper",
                      onChange: handleFileChange,
                      fileType: "deposit"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputFile,
                    {
                      placeholder: "ID Card",
                      onChange: handleFileChange,
                      fileType: "id"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputFile,
                    {
                      placeholder: "Residence Letter",
                      onChange: handleFileChange,
                      fileType: "residence"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputFile,
                    {
                      placeholder: "Sponsor Letter",
                      onChange: handleFileChange,
                      fileType: "sponsor"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputFile,
                    {
                      placeholder: "Health Insurance",
                      onChange: handleFileChange,
                      fileType: "health"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsx(
                  InputFile,
                  {
                    placeholder: "Return Ticket",
                    onChange: handleFileChange,
                    fileType: "return_ticker"
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputFile,
                  {
                    placeholder: "Bank Statement",
                    onChange: handleFileChange,
                    fileType: "bank"
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputFile,
                  {
                    placeholder: "Proof of Employment",
                    onChange: handleFileChange,
                    fileType: "proof"
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputFile,
                  {
                    placeholder: "Additional Document 1",
                    onChange: handleFileChange,
                    fileType: "additional1"
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputFile,
                  {
                    placeholder: "Additional Document 2",
                    onChange: handleFileChange,
                    fileType: "additional1"
                  }
                )
              ] })
            ] }),
            isPassportRequired && /* @__PURE__ */ jsx("p", { className: "text-warning text-sm my-2", children: "Passport Document is required" }),
            isPhotoRequired && /* @__PURE__ */ jsx("p", { className: "text-warning text-sm", children: "Photo Document is required" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-success mt-2 text-md", children: "Passport Information" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.passport_type,
              onChange: (e) => setData("passport_type", e.target.value),
              error: errors.passport_type,
              id: "passport-type",
              placeholder: "Ex: Ordinary",
              label: "Passport Type",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.passport_no,
              onChange: (e) => setData("passport_no", e.target.value),
              error: errors.passport_no,
              id: "passport-no",
              placeholder: "Passport NO",
              label: "Passport NO*",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.passport_issue_date,
              onChange: (e) => setData("passport_issue_date", e.target.value),
              error: errors.passport_issue_date,
              id: "passport-issue-date",
              placeholder: "Passport Issue Date",
              label: "Passport Issue Date",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "date"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.passport_expire_date,
              onChange: (e) => setData("passport_expire_date", e.target.value),
              error: errors.passport_expire_date,
              id: "passport-expire-date",
              placeholder: "Passport Expire Date",
              label: "Passport Expire Date",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary",
              type: "date"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.passport_issue_place,
              onChange: (e) => setData("passport_issue_place", e.target.value),
              error: errors.passport_issue_place,
              id: "passport-issue-place",
              placeholder: "Passport Issue Place",
              label: "Passport Issue Place*",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.passport_issue_place_arabic,
              onChange: (e) => setData("passport_issue_place_arabic", e.target.value),
              error: errors.passport_issue_place_arabic,
              id: "passport-issue-place-arabic",
              placeholder: "Passport Issue Place Arabic",
              label: "Passport Issue Place(Arabic)*",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Passport Issue Country",
              label: "Passport Issue Country*",
              items: countries,
              selected: passportIssueCountry,
              setSelected: setPassportIssueCountry,
              handleValueChange: updatePassportIssueCountry,
              error: errors.passport_issue_country,
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-success mt-2 text-md", children: "Guarantor Information" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.guarantor_name,
              onChange: (e) => setData("guarantor_name", e.target.value),
              error: errors.guarantor_name,
              id: "guarntor-name",
              placeholder: "Ex: Jhon Deo",
              label: "Name*",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.guarantor_passport_no,
              onChange: (e) => setData("guarantor_passport_no", e.target.value),
              error: errors.guarantor_passport_no,
              id: "guarantor-passport-no",
              placeholder: "Passport NO",
              label: "Passport No",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            Select,
            {
              placeholder: "Select Nationality",
              label: "Nationality*",
              items: countries,
              selected: guarantorNationality,
              setSelected: setGuarantorNationality,
              handleValueChange: updateGuarantorNationality,
              field: "nationality",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.guarantor_phone,
              onChange: (e) => setData("guarantor_phone", e.target.value),
              error: errors.guarantor_phone,
              id: "guarantor-phone",
              placeholder: "Mobile",
              label: "Mobile",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              value: data.guarantor_relation,
              onChange: (e) => setData("guarantor_relation", e.target.value),
              error: errors.guarantor_relation,
              id: "guarantor-relation",
              placeholder: "Relation",
              label: "Relation",
              divClasses: "my-3",
              defaultClasses: "bg-[#E0EBF8] border-l-primary focus:border-l-primary",
              labelClasses: "text-text-primary"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-2", children: /* @__PURE__ */ jsx(
          PrimaryBtn,
          {
            text: "Save",
            disabled: processing,
            type: "submit",
            classes: "w-[200px]",
            onClick: handleSubmit
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  VisaApply as default
};
