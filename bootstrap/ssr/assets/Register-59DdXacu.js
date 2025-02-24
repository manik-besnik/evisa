import { jsxs, jsx } from "react/jsx-runtime";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import { Head } from "@inertiajs/react";
import { S as SearchContainer } from "./SearchContainer-F1-t464e.js";
import "react";
import "react-toastify";
import { U as UserLogin } from "./UserLogin-d-KXvSlY.js";
import "react-icons/fa";
import "./index-B74Y7uk7.js";
import "react-icons/ri";
import "./Search-CxuJE3gW.js";
import "./Select-6VSyQHkQ.js";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
import "./TextInput-DakFYVas.js";
import "./SocialLogin-CUS6pYP4.js";
import "./PrimaryBtn-BeKpKB4W.js";
const Register = () => {
  return /* @__PURE__ */ jsxs(WebLayout, { showBgImage: true, children: [
    /* @__PURE__ */ jsx(Head, { title: "Register | Dubai E-Visa" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-20 w-full h-full", children: [
      /* @__PURE__ */ jsx(SearchContainer, {}),
      /* @__PURE__ */ jsx(UserLogin, { isRegister: true })
    ] }) })
  ] });
};
export {
  Register as default
};
