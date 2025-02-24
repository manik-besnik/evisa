import { jsx, jsxs } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { usePage, useForm, Head } from "@inertiajs/react";
import { S as SearchContainer } from "./SearchContainer-F1-t464e.js";
import { T as TextInput } from "./TextInput-DakFYVas.js";
import { P as PrimaryBtn } from "./PrimaryBtn-BeKpKB4W.js";
import { useState } from "react";
import { S as Select } from "./Select-6VSyQHkQ.js";
import { toast } from "react-toastify";
import "react-icons/fa";
import "./index-B74Y7uk7.js";
import "react-icons/ri";
import "./Search-CxuJE3gW.js";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
const AgencyRegisterInfo = () => {
  const countries = usePage().props.countries;
  const languages = usePage().props.languages;
  const { data, setData, post, errors } = useForm({
    company_name: "",
    person_name: "",
    profession: "",
    phone: "",
    email: "",
    nationality: "",
    preffer_language: "",
    living_country: "",
    city: "",
    eid_no: "",
    passport_no: "",
    uid_no: "",
    bank_details: "",
    nominee_name: "",
    nominee_passport: ""
  });
  const [nationality, setNationality] = useState({});
  const [prefferLanguage, setPrefferLanguage] = useState({});
  const [livingCountry, setLivingCountry] = useState({});
  const updateNationality = (value) => {
    setData("nationality", value.id);
  };
  const updatePrefferLanguage = (value) => {
    setData("preffer_language", value.id);
  };
  const updateLivingCountry = (value) => {
    setData("living_country", value.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("agency.register.agency-info.store"), {
      onSuccess: () => {
        toast.success("Your Agency Account Registration Completed");
      }
    });
  };
  return /* @__PURE__ */ jsx("div", { style: { height: `calc(100vh - 140px)` }, className: "w-[60%] bg-black/70 px-5 overflow-y-scroll", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      TextInput,
      {
        divClasses: "mb-2 mt-5",
        id: "name",
        placeholder: "Name | Company Name",
        inputClasses: "text-xs",
        onChange: (e) => setData("company_name", e.target.value),
        error: errors.company_name
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        divClasses: "mb-2",
        id: "contact-person",
        placeholder: "Contact Person",
        inputClasses: "text-xs",
        onChange: (e) => setData("person_name", e.target.value),
        error: errors.person_name
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        divClasses: "mb-2",
        id: "profession",
        placeholder: "Profession",
        inputClasses: "text-xs",
        onChange: (e) => setData("profession", e.target.value),
        error: errors.profession
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        divClasses: "mb-2",
        id: "phone",
        placeholder: "Whatsapp | Mobile With Country Code",
        inputClasses: "text-xs",
        onChange: (e) => setData("phone", e.target.value),
        error: errors.phone
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        divClasses: "mb-2",
        id: "email",
        placeholder: "Email Address",
        inputClasses: "text-xs",
        onChange: (e) => setData("email", e.target.value),
        error: errors.email
      }
    ),
    /* @__PURE__ */ jsx(
      Select,
      {
        classes: "my-2 sm:text-xs",
        items: countries,
        selected: nationality,
        setSelected: setNationality,
        handleValueChange: updateNationality,
        placeholder: "Nationality",
        field: "nationality",
        error: errors.nationality
      }
    ),
    /* @__PURE__ */ jsx(
      Select,
      {
        classes: "my-2 sm:text-xs",
        items: languages,
        selected: prefferLanguage,
        setSelected: setPrefferLanguage,
        handleValueChange: updatePrefferLanguage,
        placeholder: "Preffered Language",
        error: errors.preffer_language
      }
    ),
    /* @__PURE__ */ jsx(
      Select,
      {
        classes: "my-2 sm:text-xs",
        items: countries,
        selected: livingCountry,
        setSelected: setLivingCountry,
        handleValueChange: updateLivingCountry,
        placeholder: "Living Country",
        error: errors.living_country
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        id: "city",
        placeholder: "Enter City",
        inputClasses: "text-xs",
        onChange: (e) => setData("city", e.target.value),
        error: errors.city
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-white text-md mt-3", children: "Inside UAE" }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        id: "eid",
        placeholder: "EID No.",
        inputClasses: "text-xs",
        onChange: (e) => setData("eid_no", e.target.value),
        error: errors.eid_no
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        id: "passport-no",
        placeholder: "Passport No",
        inputClasses: "text-xs",
        onChange: (e) => setData("passport_no", e.target.value),
        error: errors.passport_no
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        id: "uid",
        placeholder: "UID No",
        inputClasses: "text-xs",
        onChange: (e) => setData("uid_no", e.target.value),
        error: errors.uid_no
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-white text-md mt-3", children: "BANK Account Details" }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        id: "eid",
        placeholder: "EID No.",
        inputClasses: "text-xs h-20",
        onChange: (e) => setData("bank_details", e.target.value),
        error: errors.bank_details
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-white text-md mt-3", children: "Nominee" }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        id: "nominee-name",
        placeholder: "Name",
        inputClasses: "text-xs",
        onChange: (e) => setData("nominee_name", e.target.value),
        error: errors.nominee_name
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        id: "nominee-passport-no",
        placeholder: "Passport No",
        inputClasses: "text-xs",
        onChange: (e) => setData("nominee_passport", e.target.value),
        error: errors.nominee_passport
      }
    ),
    /* @__PURE__ */ jsx(PrimaryBtn, { text: "Register", type: "submit", btnClasses: "uppercase mt-2 mb-5" })
  ] }) });
};
const AgencyInfo = () => {
  return /* @__PURE__ */ jsxs(WebLayout, { showBgImage: true, children: [
    /* @__PURE__ */ jsx(Head, { title: "Agency Register | Dubai E-Visa" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-20", children: [
      /* @__PURE__ */ jsx(SearchContainer, {}),
      /* @__PURE__ */ jsx(AgencyRegisterInfo, {})
    ] }) })
  ] });
};
export {
  AgencyInfo as default
};
