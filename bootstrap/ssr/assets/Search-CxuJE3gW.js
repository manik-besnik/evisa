import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { e as assetUrl } from "./index-B74Y7uk7.js";
import { usePage, router } from "@inertiajs/react";
import { S as Select } from "./Select-6VSyQHkQ.js";
const Search = () => {
  const { countries } = usePage().props;
  const [passportNo, setPassportNo] = useState("");
  const [country, setCountry] = useState("");
  const handleSearch = () => {
    router.get(route("visa-apply.index"), { passport_no: passportNo, current_nationality: country == null ? void 0 : country.id });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-1 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-primary p-2.5 text-2xl text-white", children: /* @__PURE__ */ jsx("img", { className: "w-7 h-7", src: `${assetUrl}images/livechat.svg`, alt: "Live chat" }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-primary p-2.5 text-2xl text-white", children: /* @__PURE__ */ jsx("img", { className: "w-7 h-7", src: `${assetUrl}images/whatsapp.svg`, alt: "Live chat" }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-primary p-2.5 text-2xl text-white", children: /* @__PURE__ */ jsx("img", { className: "w-7 h-7", src: `${assetUrl}images/call.svg`, alt: "Live chat" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 bg-[#767A7C] p-1.5", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          value: passportNo,
          onChange: (e) => setPassportNo(e.target.value),
          className: "w-28 p-1 text-sm rounded-md placeholder:text-sm border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300",
          placeholder: "Passport No",
          type: "text"
        }
      ),
      /* @__PURE__ */ jsx(
        Select,
        {
          items: countries,
          selected: country,
          setSelected: setCountry,
          placeholder: "Select Country",
          defaultClasses: "rounded-md placeholder:text-sm border border-transparent bg-white"
        }
      ),
      /* @__PURE__ */ jsx("button", { onClick: handleSearch, className: "text-2xl text-white", children: /* @__PURE__ */ jsx(FaSearch, {}) })
    ] })
  ] }) });
};
export {
  Search as S
};
