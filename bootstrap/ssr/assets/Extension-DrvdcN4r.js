import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Head } from "@inertiajs/react";
const Extension = () => {
  useEffect(() => {
    const handleMessage = async (event) => {
      const { type, payload } = event.data;
      if (type === "MAKETOP_TASK_COMPLETED") {
        alert(payload);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Extension" }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center text-center", children: /* @__PURE__ */ jsx("div", { className: "p-5 max-w-[440px] select-none", children: "Welcome To Maketop" }) })
  ] });
};
export {
  Extension as default
};
