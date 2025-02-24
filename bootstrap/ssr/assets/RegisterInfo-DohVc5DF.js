import { jsxs, jsx } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { usePage, useForm, Head } from "@inertiajs/react";
import { S as SearchContainer } from "./SearchContainer-F1-t464e.js";
import { e as assetUrl } from "./index-B74Y7uk7.js";
import { T as TextInput } from "./TextInput-DakFYVas.js";
import { P as PrimaryBtn } from "./PrimaryBtn-BeKpKB4W.js";
import { useState } from "react";
import { S as Select } from "./Select-6VSyQHkQ.js";
import { toast } from "react-toastify";
import "react-icons/fa";
import "react-icons/ri";
import "./Search-CxuJE3gW.js";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
const UserRegister = () => {
  const countries = usePage().props.countries;
  const languages = usePage().props.languages;
  const [nationality, setNationality] = useState(null);
  const [language, setLanguage] = useState(null);
  const [country, setCountry] = useState(null);
  const { data, setData, put, errors } = useForm({
    name: "",
    profession: "",
    phone: "",
    email: "",
    preffer_language: "",
    nationality: "",
    living_country: "",
    city: ""
  });
  const updateNationality = (value) => {
    setData("nationality", value.id);
  };
  const updateLanguage = (value) => {
    setData("preffer_language", value.id);
  };
  const updateLivingCountry = (value) => {
    setData("living_country", value.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("user.info.store"), {
      onSuccess: () => {
        toast("Your Information saved successfully");
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-[60%]", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-black/70 px-5 pb-5", children: /* @__PURE__ */ jsx("img", { className: "w-3/4 h-auto", src: `${assetUrl + "images/logo.png"}`, alt: "" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "px-5 pt-4 pb-5 bg-primary h-[90.6%]", children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          divClasses: "mb-2",
          id: "name",
          placeholder: "Name",
          inputClasses: "text-xs",
          value: data.name,
          onChange: (e) => setData("name", e.target.value),
          error: errors.name
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          divClasses: "mb-2",
          id: "profession",
          placeholder: "Profession",
          inputClasses: "text-xs",
          value: data.profession,
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
          value: data.phone,
          onChange: (e) => setData("phone", e.target.value),
          error: errors.phone
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          divClasses: "mb-2",
          id: "phone",
          placeholder: "Email Address",
          inputClasses: "text-xs",
          value: data.email,
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
          error: errors.nationality,
          placeholder: "Nationality",
          field: "nationality"
        }
      ),
      /* @__PURE__ */ jsx(
        Select,
        {
          classes: "my-2 sm:text-xs",
          items: languages,
          selected: language,
          setSelected: setLanguage,
          handleValueChange: updateLanguage,
          error: errors.preffer_language,
          placeholder: "Preffered Language"
        }
      ),
      /* @__PURE__ */ jsx(
        Select,
        {
          classes: "my-2 sm:text-xs",
          items: countries,
          selected: country,
          setSelected: setCountry,
          handleValueChange: updateLivingCountry,
          error: errors.living_country,
          placeholder: "Living Country"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "city",
          placeholder: "Enter City",
          inputClasses: "text-xs",
          value: data.city,
          onChange: (e) => setData("city", e.target.value),
          error: errors.city
        }
      ),
      /* @__PURE__ */ jsx(PrimaryBtn, { classes: "w-full mt-3", type: "submit", text: "Register", onClick: handleSubmit })
    ] })
  ] });
};
const RegisterInfo = () => {
  return /* @__PURE__ */ jsxs(WebLayout, { showBgImage: true, children: [
    /* @__PURE__ */ jsx(Head, { title: "Register | Dubai E-Visa" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-20 w-full h-full", children: [
      /* @__PURE__ */ jsx(SearchContainer, {}),
      /* @__PURE__ */ jsx(UserRegister, {})
    ] }) })
  ] });
};
export {
  RegisterInfo as default
};
