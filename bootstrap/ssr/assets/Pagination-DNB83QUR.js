import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import "react";
function ArrowLong(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M13.1667 7.81824L3.16666 7.81824", stroke: "#556575", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M9.13346 3.80196L13.1668 7.81796L9.13346 11.8346", stroke: "#556575", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
const pagiClasses = "bg-side-and-button hover:bg-card-and-hover rounded-md px-2.5 h-[30px] flex items-center text-xs text-text-primary";
const Pagination = ({ links }) => {
  if (links.length <= 3) return null;
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: links.map((link, index) => {
    if (link.label.includes("&laquo;")) {
      return /* @__PURE__ */ jsx(
        Link,
        {
          href: (link == null ? void 0 : link.url) || "#",
          className: `${pagiClasses} ${!(link == null ? void 0 : link.url) ? "opacity-60" : ""}`,
          children: /* @__PURE__ */ jsx(ArrowLong, { className: "rotate-180" })
        },
        index
      );
    }
    if (link.label.includes("Next")) {
      return /* @__PURE__ */ jsx(
        Link,
        {
          href: (link == null ? void 0 : link.url) || "#",
          className: `${pagiClasses} ${!(link == null ? void 0 : link.url) ? "opacity-60" : ""}`,
          children: /* @__PURE__ */ jsx(ArrowLong, {})
        },
        index
      );
    }
    return /* @__PURE__ */ jsx(
      Link,
      {
        href: (link == null ? void 0 : link.url) || "#",
        className: `${pagiClasses} ${(link == null ? void 0 : link.active) ? "bg-card-and-hover" : ""}`,
        dangerouslySetInnerHTML: { __html: link.label }
      },
      index
    );
  }) });
};
export {
  Pagination as P
};
