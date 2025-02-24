import { jsx, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { T as TopSection } from "./TopSection-CKNLCvmW.js";
import { V as VisaDetails } from "./VisaDetails-B4-YyPQ7.js";
import { i as isPermitted } from "./index-DbarwM_f.js";
import { p as permissionEnums } from "./index-B74Y7uk7.js";
import { useState } from "react";
import { C as Close } from "./Close-DxNaVPET.js";
import { I as InputBox } from "./InputBox-BrQDXsyy.js";
import { M as Modal } from "./Modal-lsFLvQRk.js";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "./InfoItem-B7VJ6rrj.js";
import "./Select-Cr-H89VX.js";
import "./ArrowDownSolid-8ROrdjAq.js";
import "react-icons/md";
import "./DangerButton-C_x1CXfY.js";
import "./DeleteConfirmModal-Drh0rErj.js";
import "./Coin-BkXhdH5z.js";
const InputFile = ({
  classes = "",
  placeholder = "",
  onChange,
  fileType = "",
  error = ""
}) => {
  const [fileName, setFileName] = useState(placeholder);
  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg", "image/webp", "image/jpg", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        setFileName(placeholder);
        return;
      }
      onChange(fileType, file);
      setFileName(file.name);
    } else {
      setFileName(placeholder);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `${classes} bg-side-and-button placeholder:text-t-secondary rounded sm:rounded-[6px] p-2`, children: /* @__PURE__ */ jsxs(
    "label",
    {
      className: "flex items-center justify-center w-full cursor-pointer",
      htmlFor: `file-upload-${fileType}`,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            onChange: (e) => handleUploadFile(e),
            id: `file-upload-${fileType}`,
            type: "file",
            accept: ".pdf,.png,.jpg,.jpeg,.webp",
            className: "hidden"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs break-words", children: fileName ? fileName : placeholder }),
        error && /* @__PURE__ */ jsx("p", { className: "text-xs text-warning", children: error })
      ]
    }
  ) });
};
const AddDocumentsModal = ({ show, setShow }) => {
  const { visa_apply, errors } = usePage().props;
  const { data, setData, post } = useForm({
    documents: [
      {
        name: "",
        file: null
      }
    ]
  });
  const addNewDocument = () => {
    const document = {
      name: "",
      file: ""
    };
    const documents = [
      ...data.documents,
      document
    ];
    setData("documents", documents);
  };
  const deleteDocument = (i) => {
    setData("documents", data.documents.filter((_, index) => index !== i));
  };
  const updateDocuments = (index, key, value) => {
    const updatedDocuments = [...data.documents];
    updatedDocuments[index] = {
      ...updatedDocuments[index],
      [key]: value
    };
    setData("documents", updatedDocuments);
  };
  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    post(route("admin.visa-applies.add-document", visa_apply.id), {
      onError: (errors2) => {
        toast.error("Something is Missing");
      },
      onSuccess: () => {
        setShow(false);
        setData("documents", [
          {
            name: "",
            file: null
          }
        ]);
      }
    });
  };
  return /* @__PURE__ */ jsx(Modal, { show, maxWidth: "2xl", onClose: () => setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "p-[30px] relative", children: [
    /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: () => setShow(false), children: /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex justify-between mr-10", children: [
      /* @__PURE__ */ jsx("p", { children: "Add Documents" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: addNewDocument,
          className: "btn-primary",
          children: [
            /* @__PURE__ */ jsx(FaPlus, {}),
            " Add New Document"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col", onSubmit: handleConfirmSubmit, children: [
      /* @__PURE__ */ jsx("div", { children: data.documents.map((item, i) => {
        var _a;
        return /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-11/12 grid grid-cols-1 md:grid-cols-2 items-end gap-x-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "block text-sm mb-1", children: "Name*" }),
              /* @__PURE__ */ jsx(
                InputBox,
                {
                  placeholder: "EX: Visa Document",
                  classes: "h-26 py-1",
                  label: "Name",
                  value: item.name,
                  onChange: (e) => updateDocuments(i, "name", e.target.value),
                  error: (errors == null ? void 0 : errors.documents) ? (_a = errors == null ? void 0 : errors.documents[i]) == null ? void 0 : _a.name : ""
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              InputFile,
              {
                fileType: `${i}-file`,
                classes: "w-full h-9",
                placeholder: "Select File",
                onChange: (fileType, file) => updateDocuments(i, "file", file)
              }
            )
          ] }),
          i > 0 && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => deleteDocument(i),
              className: "bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-7 flex item-center justify-between rounded",
              children: /* @__PURE__ */ jsx(FaTrashAlt, {})
            }
          )
        ] }, i);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4 mt-4", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShow(false), className: "app-btn", children: "Cancel" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            onClick: handleConfirmSubmit,
            className: "app-btn bg-card-and-hover",
            children: "Save"
          }
        )
      ] })
    ] }) })
  ] }) });
};
const Show = () => {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Visa Details" }),
    /* @__PURE__ */ jsx(TopSection, { title: "Visa Details", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2", children: [
      isPermitted(permissionEnums.ADD_DOCUMENT_TO_VISA) && /* @__PURE__ */ jsx("button", { onClick: () => setShow(true), type: "button", className: "btn-primary", children: "Add Documents" }),
      /* @__PURE__ */ jsx(Link, { href: route("admin.visa-applies.index"), className: "btn-primary", children: "View Application List" })
    ] }) }),
    /* @__PURE__ */ jsx(VisaDetails, { isAdmin: true }),
    /* @__PURE__ */ jsx(AddDocumentsModal, { show, setShow })
  ] });
};
export {
  Show as default
};
