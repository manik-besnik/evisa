import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { toast, ToastContainer } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import { usePage, Link, router } from "@inertiajs/react";
import { e as assetUrl } from "./index-B74Y7uk7.js";
import { useEffect } from "react";
import { RiHome2Fill } from "react-icons/ri";
const RightNoneAuthPart = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center", children: [
      /* @__PURE__ */ jsx("img", { className: "w-20", src: `${assetUrl + "images/logo2.png"}`, alt: "logo" }),
      /* @__PURE__ */ jsxs("p", { className: "flex items-center ml-6", children: [
        /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-success" }),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "600555555" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 text-primary", children: [
        /* @__PURE__ */ jsx("span", { className: "border-r border-primary pr-2", children: "عربي" }),
        /* @__PURE__ */ jsx("span", { children: "English" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Link, { href: route("register"), className: "pr-2", children: "Register" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "bg-primary px-4 py-1 text-2xl rounded font-semibold text-white ",
            children: "Login"
          }
        )
      ] })
    ] })
  ] });
};
const RightAuthPart = ({ user }) => {
  var _a;
  const logOut = () => {
    router.post(route("logout"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center gap-x-2 text-text-primary", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          user == null ? void 0 : user.name,
          " | ",
          user == null ? void 0 : user.profession
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Address: ",
          user == null ? void 0 : user.city,
          ", ",
          (_a = user == null ? void 0 : user.living_country) == null ? void 0 : _a.name
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: logOut,
          className: "bg-primary px-4 py-1 text-2xl rounded font-semibold text-white ",
          children: "Logout"
        }
      )
    ] })
  ] });
};
const Topbar = () => {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center py-2", children: [
    /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx("img", { className: "w-4/6", src: `${assetUrl + "images/logo.png"}`, alt: "logo" }) }),
    (auth == null ? void 0 : auth.user) ? /* @__PURE__ */ jsx(RightAuthPart, { user: auth == null ? void 0 : auth.user }) : /* @__PURE__ */ jsx(RightNoneAuthPart, {})
  ] }) });
};
const Navbar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center bg-primary text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => window.history.back(), className: "relative flex items-center bg-warning text-white pl-20 py-2 pr-4", children: [
        /* @__PURE__ */ jsx("span", { className: "p-1 bg-warning rounded-full border border-white", children: /* @__PURE__ */ jsx(RiHome2Fill, {}) }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-warning z-[100]" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: route("visa-apply.create"), className: "relative flex items-center bg-primary text-white pl-10 py-3 pr-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Apply Visa" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[100]" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { className: "relative flex items-center bg-primary-dark text-white pl-10 pr-8 py-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Ticket" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary-dark z-[1000000]" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: route("visa-apply.index"), className: "relative flex items-center bg-primary text-white pl-10 pr-8 py-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Search Visa" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[1000000]" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: route("visa-apply.index"), className: "relative flex items-center bg-primary-dark text-white pl-10 pr-8 py-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Reports" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary-dark z-[1000000]" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: route("job-apply.list"), className: "relative flex items-center bg-primary text-white pl-10 pr-8 py-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Job Apply List" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[1000000]" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pr-32", children: /* @__PURE__ */ jsx("span", { className: "block", children: "CV Create" }) })
  ] });
};
const ServiceImage = () => {
  return /* @__PURE__ */ jsx("img", { className: "w-[180px] h-auto", src: `${assetUrl + "images/services.png"}`, alt: "welcome to dubai e-visa" });
};
function WebLayout({ children, showServiceImage = true, showBgImage = false }) {
  const { flash, errors } = usePage().props;
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      toast(flash.success);
    }
    if (flash == null ? void 0 : flash.error) {
      toast.error(flash.error);
    }
    if (errors == null ? void 0 : errors.message) {
      toast.error(errors.message);
    }
  }, [flash, errors]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Topbar, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          backgroundImage: showBgImage ? `url(${assetUrl}images/bg.png)` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        children: [
          children,
          showServiceImage && /* @__PURE__ */ jsx("div", { className: "container relative", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-5 right-0", children: /* @__PURE__ */ jsx(ServiceImage, {}) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] });
}
export {
  WebLayout as W
};
