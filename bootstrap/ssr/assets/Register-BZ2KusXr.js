import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Link, Head } from "@inertiajs/react";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { S as SearchContainer } from "./SearchContainer-F1-t464e.js";
import { T as TextInput } from "./TextInput-DakFYVas.js";
import { S as SocialLogin, a as Switch } from "./SocialLogin-CUS6pYP4.js";
import { P as PrimaryBtn } from "./PrimaryBtn-BeKpKB4W.js";
import { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import "react-toastify";
import "./index-B74Y7uk7.js";
import "react-icons/ri";
import "./Search-CxuJE3gW.js";
import "./Select-6VSyQHkQ.js";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
const AgencyRegister = () => {
  const { data, setData, post, errors } = useForm({
    username: "",
    password: "",
    remember: false,
    avatar: null
  });
  const [avatar, setAvatar] = useState("");
  const handleRemember = (value) => {
    setData("remember", value);
  };
  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setAvatar("");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      setData("avatar", file);
      reader.readAsDataURL(file);
    } else {
      setAvatar("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("agency.register.store"));
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-black/70 w-1/2 p-5 min-h-[72vh]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 text-white", children: [
      /* @__PURE__ */ jsxs("h4", { className: "text-white min-w-max", children: [
        "Agency",
        /* @__PURE__ */ jsx("br", {}),
        "Register"
      ] }),
      /* @__PURE__ */ jsxs("label", { htmlFor: "avatar", className: "cursor-pointer", children: [
        avatar && /* @__PURE__ */ jsx("img", { className: "h-28 w-28 rounded-full", src: avatar, alt: "preview-avatar" }),
        !avatar && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-center flex-col bg-[#1E374A] h-28 w-28 rounded-full",
            children: [
              /* @__PURE__ */ jsx(FaCameraRetro, { size: 42 }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px]", children: "Upload Your Photo" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("input", { id: "avatar", onChange: (e) => handleUploadFile(e), type: "file", className: "hidden" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SocialLogin, {}),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          label: "Username*",
          id: "username",
          value: data.username,
          placeholder: "Username",
          onChange: (e) => setData("username", e.target.value)
        }
      ),
      errors.username && /* @__PURE__ */ jsx("p", { className: "text-red-500 my-1 text-xs", children: errors.username }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          divClasses: "my-2",
          label: "Password*",
          type: "password",
          id: "password",
          placeholder: "Password",
          onChange: (e) => setData("password", e.target.value)
        }
      ),
      errors.password && /* @__PURE__ */ jsx("p", { className: "text-red-500 my-1 text-xs", children: errors.password }),
      /* @__PURE__ */ jsx(Switch, { classes: " justify-end mr-1 mt-4", value: data.remember, onChange: handleRemember }),
      /* @__PURE__ */ jsx(Link, { href: route("home"), className: "block mt-4 text-sm font-semibold text-white", children: "Forget Password" }),
      /* @__PURE__ */ jsx(PrimaryBtn, { classes: "mt-3", type: "submit", text: "Next", onClick: handleSubmit })
    ] })
  ] });
};
function Register() {
  return /* @__PURE__ */ jsxs(WebLayout, { showBgImage: true, children: [
    /* @__PURE__ */ jsx(Head, { title: "Agency Register | Dubai E-Visa" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-20", children: [
      /* @__PURE__ */ jsx(SearchContainer, {}),
      /* @__PURE__ */ jsx(AgencyRegister, {})
    ] }) })
  ] });
}
export {
  Register as default
};
