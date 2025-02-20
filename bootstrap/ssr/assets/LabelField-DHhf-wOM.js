import { jsx } from "react/jsx-runtime";
import "react";
function LabelField({ content, ...props }) {
  return content ? /* @__PURE__ */ jsx("label", { ...props, className: "mb-[10px] sm:mb-[14px] inline-block text-t-secondary text-[10px] sm:text-[12px] font-medium leading-[12px] sm:leading-[14px] ", children: content }) : null;
}
export {
  LabelField as L
};
