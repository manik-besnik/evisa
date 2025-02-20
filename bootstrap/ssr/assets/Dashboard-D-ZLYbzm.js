import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { Head } from "@inertiajs/react";
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
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
