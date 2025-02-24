import { jsx, jsxs } from "react/jsx-runtime";
import { C as Close } from "./Close-DxNaVPET.js";
import { M as Modal } from "./Modal-lsFLvQRk.js";
const DeleteConfirmModal = ({
  show,
  setShow,
  handleConfirmDelete,
  title = "Delete Item",
  subTitle = "Are you sure want to delete this item?"
}) => {
  return /* @__PURE__ */ jsx(Modal, { show, maxWidth: "sm", onClose: () => setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "p-[30px] relative", children: [
    /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: () => setShow(false), children: /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("p", { children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2", children: subTitle })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShow(false), className: "app-btn", children: "Cancel" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleConfirmDelete,
          className: "app-btn bg-card-and-hover",
          children: "Confirm Delete"
        }
      )
    ] })
  ] }) });
};
export {
  DeleteConfirmModal as D
};
