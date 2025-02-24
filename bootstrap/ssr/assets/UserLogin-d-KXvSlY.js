import { jsxs, jsx } from "react/jsx-runtime";
import { e as assetUrl } from "./index-B74Y7uk7.js";
import { T as TextInput } from "./TextInput-DakFYVas.js";
import { S as SocialLogin, a as Switch } from "./SocialLogin-CUS6pYP4.js";
import { useForm, Link } from "@inertiajs/react";
import { P as PrimaryBtn } from "./PrimaryBtn-BeKpKB4W.js";
import "react";
const UserLogin = ({ isRegister = false }) => {
  const { data, setData, post, errors } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const handleRemember = (value) => {
    setData("remember", value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      post(route("register.store"));
      return;
    }
    post(route("user.login.store"));
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-black/70 w-1/2 pr-5 pt-3 pb-8", style: { minHeight: "calc(100vh - 140px)" }, children: [
    /* @__PURE__ */ jsx("img", { className: "w-full h-auto", src: `${assetUrl + "images/sign-in.png"}`, alt: "" }),
    /* @__PURE__ */ jsx(SocialLogin, {}),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "pl-5", children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          label: "Username*",
          id: "username",
          placeholder: "Username",
          value: data.email,
          onChange: (e) => setData("email", e.target.value),
          error: errors.email
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          divClasses: "my-2",
          label: "Password*",
          type: "password",
          id: "password",
          placeholder: "Password",
          value: data.epasswordmail,
          onChange: (e) => setData("password", e.target.value),
          error: errors.password
        }
      ),
      /* @__PURE__ */ jsx(
        Switch,
        {
          classes: " justify-end mr-1 mt-4",
          value: data.remember,
          onChange: handleRemember
        }
      ),
      /* @__PURE__ */ jsx(Link, { href: route("home"), className: "block mt-4 text-sm font-semibold text-white", children: "Forget Password" }),
      isRegister && /* @__PURE__ */ jsx(PrimaryBtn, { classes: "mt-3", type: "submit", text: "Next", onClick: handleSubmit }),
      !isRegister && /* @__PURE__ */ jsx(PrimaryBtn, { classes: "mt-3", type: "submit", text: "Login", onClick: handleSubmit })
    ] })
  ] });
};
export {
  UserLogin as U
};
