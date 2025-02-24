import { jsx, jsxs } from "react/jsx-runtime";
import "react";
function ErrorField({ content, ...props }) {
  return content ? /* @__PURE__ */ jsx("label", { ...props, className: `${props.className} mb-[14px] inline-block text-warning text-[12px] font-medium leading-[14px]`, children: content }) : null;
}
function Lock(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M13.6862 7.87276V6.08359C13.6862 3.98942 11.9878 2.29105 9.89366 2.29105C7.79949 2.28192 6.09449 3.97192 6.08533 6.06692V6.08359V7.87276", stroke: "#556575", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.0693 17.7067H6.70184C4.95684 17.7067 3.54184 16.2925 3.54184 14.5467V10.9725C3.54184 9.22667 4.95684 7.8125 6.70184 7.8125H13.0693C14.8143 7.8125 16.2293 9.22667 16.2293 10.9725V14.5467C16.2293 16.2925 14.8143 17.7067 13.0693 17.7067Z", stroke: "#556575", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M9.88574 11.8359V13.6868", stroke: "#556575", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function Email(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M17.5 12.5783C17.5 14.8827 15.9627 16.7557 13.6819 16.75H6.31811C4.0373 16.7557 2.5 14.8827 2.5 12.5783V7.4273C2.5 5.12541 4.0373 3.25 6.31811 3.25H13.6819C15.9627 3.25 17.5 5.12541 17.5 7.4273V12.5783Z", stroke: "#556575", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M14.427 7.63867L11.0946 10.3484C10.467 10.8471 9.57756 10.8471 8.94998 10.3484L5.58917 7.63867", stroke: "#556575", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
export {
  Email as E,
  Lock as L,
  ErrorField as a
};
