import { jsx, jsxs } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-BxC39YU8.js";
import { usePage, useForm, Head, router } from "@inertiajs/react";
import { C as Close } from "./Close-DxNaVPET.js";
import { M as Modal } from "./Modal-lsFLvQRk.js";
import { I as InputBox } from "./InputBox-BrQDXsyy.js";
import { toast } from "react-toastify";
import { S as Select } from "./Select-Cr-H89VX.js";
import { useState, useEffect } from "react";
import { FiPlus, FiEdit } from "react-icons/fi";
import { D as DeleteConfirmModal } from "./DeleteConfirmModal-Drh0rErj.js";
import { FaTrashAlt } from "react-icons/fa";
import { D as DangerButton } from "./DangerButton-C_x1CXfY.js";
import "./ArrowRight-DhMzUtK5.js";
import "react-icons/gr";
import "react-icons/pi";
import "react-icons/fa6";
import "./index-DbarwM_f.js";
import "./index-B74Y7uk7.js";
import "@headlessui/react";
import "./Avatar-BwyzJcVZ.js";
import "react-icons/io";
import "./Coin-BkXhdH5z.js";
import "./ArrowDownSolid-8ROrdjAq.js";
const CreateAdminModal = ({ show, setShow }) => {
  const roles = usePage().props.roles;
  const { data, setData, post } = useForm({
    name: "",
    email: "",
    role_id: "",
    role: 1,
    password: ""
  });
  const [adminRole, setAdminRole] = useState(null);
  const handleChangeRole = (role) => {
    setData("role_id", role.id);
  };
  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    post(route("admin.admins.store"), {
      onSuccess: () => {
        toast.success("Admin Added Successfully");
      }
    });
    setShow(false);
  };
  return /* @__PURE__ */ jsx(Modal, { show, maxWidth: "xl", onClose: () => setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "p-[30px] relative", children: [
    /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: () => setShow(false), children: /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("p", { children: "Add Admin" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-2", onSubmit: handleConfirmSubmit, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        InputBox,
        {
          placeholder: "Enter Admin Name",
          value: data.name,
          onChange: (e) => setData("name", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        InputBox,
        {
          placeholder: "Enter Admin Email",
          value: data.email,
          onChange: (e) => setData("email", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        InputBox,
        {
          placeholder: "Enter Admin Password",
          value: data.password,
          onChange: (e) => setData("password", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
        Select,
        {
          items: roles,
          placeholder: "Select Role",
          selected: adminRole,
          setSelected: setAdminRole,
          handleValueChange: handleChangeRole
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
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
const EditAdminModal = ({ admin, show, setShow }) => {
  const roles = usePage().props.roles;
  const { data, setData, put } = useForm({
    name: "",
    email: "",
    role_id: "",
    role: 1
  });
  const [adminRole, setAdminRole] = useState(null);
  const handleChangeRole = (role) => {
    setData("role_id", role.id);
  };
  useEffect(() => {
    setData("id", admin.id);
    setData("name", admin.name);
    setData("email", admin.email);
    setData("role_id", admin.role_id);
    const role = roles.find((item) => item.id === admin.role_id);
    setAdminRole(role);
  }, [JSON.stringify(admin)]);
  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    put(route("admin.admins.update", data.id), {
      onSuccess: () => {
        setShow(false);
        toast.success("Admin Data updated Successfully");
      },
      onError: () => {
        setShow(false);
        toast.error("Admin Data update Failed");
      }
    });
  };
  return /* @__PURE__ */ jsx(Modal, { show, maxWidth: "xl", onClose: () => setShow(false), children: /* @__PURE__ */ jsxs("div", { className: "p-[30px] relative", children: [
    /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 md:right-[30px] md:top-[30px]", onClick: () => setShow(false), children: /* @__PURE__ */ jsx(Close, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("p", { children: "Edit Admin" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-2", onSubmit: handleConfirmSubmit, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        InputBox,
        {
          placeholder: "Enter Admin Name",
          value: data.name,
          onChange: (e) => setData("name", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        InputBox,
        {
          placeholder: "Enter Admin Email",
          value: data.email,
          onChange: (e) => setData("email", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
        Select,
        {
          items: roles,
          placeholder: "Select Role",
          selected: adminRole,
          setSelected: setAdminRole,
          handleValueChange: handleChangeRole
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
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
const Admin = ({ admins }) => {
  const [show, setShow] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const handleEdit = (admin2) => {
    setAdmin(admin2);
    setEditShow(true);
  };
  const handleDelete = (admin2) => {
    setAdmin(admin2);
    setShowDelete(true);
  };
  const confirmDelete = () => {
    router.delete(route("admin.admins.delete", admin == null ? void 0 : admin.id), {
      onSuccess: () => {
        setShowDelete(false);
        toast.success("Admin Delete Successfully");
      },
      onError: () => {
        setShowDelete(false);
        toast.error("Admin Delete Failed");
      }
    });
    setShow(false);
  };
  return /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Admins | Admin Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "", children: "Admins" }),
      /* @__PURE__ */ jsxs("button", { className: "btn-primary", onClick: () => setShow(true), children: [
        /* @__PURE__ */ jsx(FiPlus, {}),
        " Add Admin"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxs("table", { className: "table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "No" }),
        /* @__PURE__ */ jsx("th", { children: "Name" }),
        /* @__PURE__ */ jsx("th", { children: "Role" }),
        /* @__PURE__ */ jsx("th", { children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: admins.length > 0 && admins.map((admin2, index) => {
        var _a;
        return /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: index + 1 }),
          /* @__PURE__ */ jsx("td", { children: admin2.name }),
          /* @__PURE__ */ jsx("td", { children: (_a = admin2.admin_role) == null ? void 0 : _a.name }),
          /* @__PURE__ */ jsxs("td", { className: "flex gap-x-2", children: [
            /* @__PURE__ */ jsx("button", { className: "btn-primary", onClick: () => handleEdit(admin2), children: /* @__PURE__ */ jsx(FiEdit, {}) }),
            /* @__PURE__ */ jsx(DangerButton, { onClick: () => handleDelete(admin2), children: /* @__PURE__ */ jsx(FaTrashAlt, {}) })
          ] })
        ] }, index);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx(CreateAdminModal, { show, setShow }),
    /* @__PURE__ */ jsx(EditAdminModal, { admin, show: editShow, setShow: setEditShow }),
    /* @__PURE__ */ jsx(DeleteConfirmModal, { show: showDelete, setShow: setShowDelete, handleConfirmDelete: confirmDelete })
  ] });
};
export {
  Admin as default
};
