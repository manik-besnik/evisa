import { jsx, jsxs } from "react/jsx-runtime";
function AdminGuestLayout({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative min-h-screen bg-[url('/assets/images/admin-login-bg.png')] bg-center bg-contain bg-no-repeat flex justify-center items-center py-6 sm:py-10 bg-main-and-focus",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "max-w-[457px] min-w-[343px] md:w-[457px] bg-white rounded-2xl md:rounded-3xl border border-card-and-hover px-6 py-4 md:px-10 md:py-[30px]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("h4", { className: "text-center text-[20px] leading-[30px] text-text-primary md:text-[30px] font-semibold ", children: "Dubai E-Visa" }) }),
            /* @__PURE__ */ jsx("div", { children })
          ]
        }
      )
    }
  );
}
export {
  AdminGuestLayout as A
};
