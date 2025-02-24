import { jsxs, jsx } from "react/jsx-runtime";
import { Link, Head } from "@inertiajs/react";
import { e as assetUrl } from "./index-B74Y7uk7.js";
import { S as Search } from "./Search-CxuJE3gW.js";
import { W as WebLayout } from "./WebLayout-DC5r9kpE.js";
import "react-icons/fa";
import "react";
import "./Select-6VSyQHkQ.js";
import "@headlessui/react";
import "./ArrowDownSolid-8ROrdjAq.js";
import "react-toastify";
import "react-icons/ri";
const services = [
  {
    title: "Visa Apply",
    img: "images/visa-apply.png",
    link: "visa-apply.create"
  },
  {
    title: "Job Apply",
    img: "images/job-apply.png",
    link: "job-posts.create"
  },
  {
    title: "Job Demand",
    img: "images/job-demand.png",
    link: "job-demand"
  },
  {
    title: "Business",
    img: "images/business.png",
    link: "home"
  },
  {
    title: "Agency",
    img: "images/agency.png",
    link: "agency.register"
  },
  {
    title: "Others",
    img: "images/others.png",
    link: "others"
  }
];
const ServiceCard = ({ img, title, link }) => {
  return /* @__PURE__ */ jsx(Link, { href: route(link), children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center w-[100px] h-[100px] bg-primary text-center text-white rounded-sm shadow-md hover:bg-primary-dark transition",
      children: [
        /* @__PURE__ */ jsx("img", { className: "w-10 h-10 mb-2", src: assetUrl + img, alt: title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs font-medium", children: title })
      ]
    }
  ) });
};
const Hero = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "hero-top flex", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: `${assetUrl + "images/hero1.png"}`, alt: "hero" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0", children: /* @__PURE__ */ jsx(Search, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: `${assetUrl + "images/hero2.png"}`, alt: "hero" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 mt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "ml-20 w-56 relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-[240px] absolute -left-8 -top-1/2",
          src: `${assetUrl + "images/hero-welcome.png"}`,
          alt: "welcome to dubai e-visa"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "flex 2xl:justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex gap-x-2 2xl:ml-52", children: services.map((service, i) => /* @__PURE__ */ jsx(ServiceCard, { title: service.title, img: service.img, link: service.link }, i)) }) })
    ] })
  ] });
};
function Home() {
  return /* @__PURE__ */ jsxs(WebLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home | Dubai E-Visa" }),
    /* @__PURE__ */ jsx(Hero, {})
  ] });
}
export {
  Home as default
};
