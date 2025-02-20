import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { usePage, Link, router } from "@inertiajs/react";
import { L as Logo } from "./Logo-BrIzKzpY.js";
function SideNav({ toggleSideNav, useToggleSideNav }) {
  var _a, _b;
  const admin = usePage().props.admin;
  const mainLogo = ((_b = (_a = usePage().props) == null ? void 0 : _a.setting_data) == null ? void 0 : _b.logo) ?? null;
  const handleLogout = () => {
    router.delete(route("admin.logout"));
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-col w-full p-4 lg:p-5 min-h-full gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "h-full", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center p-[10px] mb-5 lg:mb-[30px]", children: mainLogo ? /* @__PURE__ */ jsx("img", { className: "w-[180px] h-auto", src: mainLogo, alt: "Logo" }) : /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("admin.index"),
            className: `${route().current("admin.index") && "bg-card-and-hover"} flex items-center gap-[10px] rounded px-3 py-2 mb-0.5 text-sm text-text-primary font-medium hover:bg-card-and-hover`,
            children: "Users"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("admin.tasks.index"),
            className: `${route().current("admin.tasks.index") && "bg-card-and-hover"} flex items-center gap-[10px] rounded px-2.5 py-2 mb-0.5 text-sm text-text-primary font-medium hover:bg-card-and-hover`,
            children: "Task"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("admin.setting.index"),
            className: `${route().current("admin.setting.index") && "bg-card-and-hover"} flex items-center gap-[10px] rounded px-2.5 py-2 mb-0.5 text-sm text-text-primary font-medium hover:bg-card-and-hover`,
            children: "Setting"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 items-center", children: [
        /* @__PURE__ */ jsx("img", { src: "/" + (admin == null ? void 0 : admin.avatar), className: "w-9 h-9 rounded", alt: "admin-avatar" }),
        /* @__PURE__ */ jsx("p", { children: admin == null ? void 0 : admin.name })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleLogout, children: /* @__PURE__ */ jsxs(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.456C4.422 2.77148 2.772 4.42148 2.772 6.45648V17.5865C2.772 19.6215 4.422 21.2715 6.456 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545",
                stroke: "#556575",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M21.8095 12.0215H9.76849",
                stroke: "#556575",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M18.8812 9.1062L21.8092 12.0212L18.8812 14.9372",
                stroke: "#556575",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ]
        }
      ) })
    ] }) }) })
  ] });
}
function Authenticated({ header, children }) {
  usePage().props.auth.user;
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [toggleSideNav, useToggleSideNav] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `bg-side-and-button max-w-[268px] min-w-[242px] relative lg:block border-r border-r-[#C7BDA8] transition-all duration-900 h-screen overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent`,
        children: /* @__PURE__ */ jsx(
          SideNav,
          {
            toggleSideNav,
            useToggleSideNav
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full bg-main-and-focus h-screen overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent",
        children: /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-6", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[21px] leading-[25px] mb-6 font-semibold text-text-primary", children: "Dashboard" }),
          children
        ] })
      }
    )
  ] });
}
export {
  Authenticated as A
};
