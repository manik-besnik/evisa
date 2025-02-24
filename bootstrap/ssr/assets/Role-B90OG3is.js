import { jsx, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { C as Close } from "./Close-DxNaVPET.js";
import { M as Modal } from "./Modal-lsFLvQRk.js";
import { I as InputBox } from "./InputBox-BrQDXsyy.js";
import { useForm, Head } from "@inertiajs/react";
import { h as permissions } from "./index-B74Y7uk7.js";
import { C as Checkbox } from "./Checkbox-9lVmrZpR.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FiPlus, FiEdit } from "react-icons/fi";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "react-icons/fa6";
import "./index-DbarwM_f.js";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "./Coin-BkXhdH5z.js";
const CreateRoleModal = ({ show, setShow }) => {
  const { data, setData, post } = useForm({
    name: "",
    permissions: []
  });
  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    post(route("admin.roles.store"), {
      onSuccess: () => {
        toast.success("Role Added Successfully");
      }
    });
    setShow(false);
  };
  return /* @__PURE__ */ jsx(Modal, { show, maxWidth: "2xl", onClose: () => setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "p-[30px] relative min-h-[400px]", children: [
    /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: () => setShow(false), children: /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("p", { children: "Add Role" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col", onSubmit: handleConfirmSubmit, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        InputBox,
        {
          placeholder: "Enter Role",
          value: data.name,
          onChange: (e) => setData("name", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "h-[360px] grid grid-cols-3 gap-x-2 gap-y-1 mt-3", children: permissions.map((permission, index) => /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: `add-permission-${index}`,
          className: "flex cursor-pointer items-center space-x-1",
          children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: `add-permission-${index}`,
                checked: data.permissions.includes(permission.value),
                onChange: (e) => {
                  if (e.target.checked) {
                    setData("permissions", [...data.permissions, permission.value]);
                  } else {
                    setData("permissions", data.permissions.filter((p) => p !== permission.value));
                  }
                }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: permission.name })
          ]
        },
        index
      )) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4 absolute bottom-[30px] right-[30px]", children: [
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
const EditRoleModal = ({ role, show, setShow }) => {
  const { data, setData, put } = useForm({
    id: null,
    name: "",
    permissions: []
  });
  useEffect(() => {
    var _a;
    setData("permissions", []);
    setData("id", role.id);
    setData("name", role.name);
    if ((_a = role.permissions) == null ? void 0 : _a.length) {
      setData("permissions", role.permissions);
    }
  }, [JSON.stringify(role)]);
  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    put(route("admin.roles.update", data.id), {
      onSuccess: () => {
        setShow(false);
        toast.success("Role updated Successfully");
      },
      onError: () => {
        toast.error("Role update Failed");
      }
    });
  };
  return /* @__PURE__ */ jsx(Modal, { show, maxWidth: "2xl", onClose: () => setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "p-[30px] relative min-h-[400px]", children: [
    /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: () => setShow(false), children: /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("p", { children: "Edit Role" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col", onSubmit: handleConfirmSubmit, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(InputBox, { value: data.name, onChange: (e) => setData("name", e.target.value) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "h-[360px] grid grid-cols-3 gap-x-2 gap-y-1 mt-3", children: permissions.map((permission, index) => {
        var _a;
        return /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: `permission-${index}`,
            className: "flex cursor-pointer items-center space-x-1",
            children: [
              /* @__PURE__ */ jsx(
                Checkbox,
                {
                  id: `permission-${index}`,
                  checked: (_a = data.permissions) == null ? void 0 : _a.includes(permission.value),
                  onChange: (e) => {
                    var _a2;
                    if (e.target.checked) {
                      setData("permissions", [...data.permissions, permission.value]);
                    } else {
                      setData("permissions", (_a2 = data.permissions) == null ? void 0 : _a2.filter((p) => p !== permission.value));
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: permission.name })
            ]
          },
          index
        );
      }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4 absolute bottom-[30px] right-[30px]", children: [
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
const Role = ({ roles }) => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [role, setRole] = useState({});
  const handleEdit = (role2) => {
    setRole(role2);
    setEditShow(true);
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Role | Admin Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "", children: "Roles" }),
      /* @__PURE__ */ jsxs("button", { className: "btn-primary", onClick: () => setShow(true), children: [
        /* @__PURE__ */ jsx(FiPlus, {}),
        "Add New Role"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxs("table", { className: "table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "No" }),
        /* @__PURE__ */ jsx("th", { children: "Name" }),
        /* @__PURE__ */ jsx("th", { children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: roles.length > 0 && roles.map((role2, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: index + 1 }),
        /* @__PURE__ */ jsx("td", { children: role2.name }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("button", { className: "btn-primary", onClick: () => handleEdit(role2), children: /* @__PURE__ */ jsx(FiEdit, {}) }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx(CreateRoleModal, { show, setShow }),
    /* @__PURE__ */ jsx(EditRoleModal, { role, show: editShow, setShow: setEditShow })
  ] });
};
export {
  Role as default
};
