import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { C as Checkbox } from "./Checkbox-9lVmrZpR.js";
import { useForm, Head } from "@inertiajs/react";
import { L as LabelField } from "./LabelField-DHhf-wOM.js";
import { I as InputBox } from "./InputBox-BrQDXsyy.js";
import { E as Email, a as ErrorField, L as Lock } from "./Email-BTwdfxTN.js";
import { A as AdminGuestLayout } from "./AdminGuestLayout-CiwbI_-s.js";
import "./Coin-BkXhdH5z.js";
function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(AdminGuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Agency Login | Dubai E-visa" }),
    /* @__PURE__ */ jsx("h3", { className: "text-center text-[25px] leading-[30px] text-text-primary mb-5 md:text-[43px] md:leading-[51px] md:mb-[30px] font-semibold ", children: "Welcome Back" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(LabelField, { htmlFor: "email", content: "Email Address" }),
        /* @__PURE__ */ jsx(
          InputBox,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            iconPrev: /* @__PURE__ */ jsx(Email, { className: "h-4 sm:h-5" }),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(ErrorField, { className: "mt-[14px]", content: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 md:mt-5", children: [
        /* @__PURE__ */ jsx(LabelField, { htmlFor: "password", content: "Password" }),
        /* @__PURE__ */ jsx(
          InputBox,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value),
            iconPrev: /* @__PURE__ */ jsx(Lock, { className: "h-4 sm:h-5" })
          }
        ),
        /* @__PURE__ */ jsx(ErrorField, { className: "mt-[14px]", content: errors.password })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-4 mt-4 md:mt-5", children: /* @__PURE__ */ jsx("div", { className: "block", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm text-text-primary font-medium ms-2", children: "Remember me" })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4 md:mt-5", children: /* @__PURE__ */ jsx(
        "button",
        {
          disabled: processing,
          className: "w-full rounded md:rounded-md bg-text-primary py-[7px] md:py-2 text-white text-xs md:text-sm ",
          children: "Sign In"
        }
      ) })
    ] })
  ] });
}
export {
  Login as default
};
