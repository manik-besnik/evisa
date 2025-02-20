import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-Cp9vKcCn.js";
import { Head, Link } from "@inertiajs/react";
import { F as Footer } from "./Footer-D8ZUUWgW.js";
import "react";
import "./Close-DxNaVPET.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "react-icons/fa6";
import "./index-DbarwM_f.js";
import "./index-B74Y7uk7.js";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "react-toastify";
import "./LabelField-DHhf-wOM.js";
import "./InputBox-BrQDXsyy.js";
import "./Coin-BkXhdH5z.js";
import "./Email-BTwdfxTN.js";
import "./User-Tg_4iFvd.js";
import "./Check-6uFmuQtl.js";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex text-xs leading-[14px] mb-2 md:mb-[30px]", children: [
              /* @__PURE__ */ jsx(Link, { href: "/", className: "text-t-disabled", children: "Home/" }),
              /* @__PURE__ */ jsx(Link, { className: "text-t-secondary", children: "Profile" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              UpdateProfileInformation,
              {
                mustVerifyEmail,
                status,
                className: "max-w-[932px] mb-5 md:mb-[30px]"
              }
            ) }) })
          ] }),
          /* @__PURE__ */ jsx(Footer, {})
        ] })
      ]
    }
  );
}
export {
  Edit as default
};
