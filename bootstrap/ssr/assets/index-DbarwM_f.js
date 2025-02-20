import { usePage } from "@inertiajs/react";
const getFormattedDate = (dateTime) => {
  const date = new Date(dateTime);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
const getValue = (items, id) => {
  var _a;
  return (_a = items.find((item) => item.id === id)) == null ? void 0 : _a.name;
};
const isPermitted = (permission) => {
  var _a;
  const role = (_a = usePage().props) == null ? void 0 : _a.admin_role;
  if (!role) return false;
  return role.is_super_admin || role.permissions.includes(permission);
};
const visaDocuments = (docs) => {
  if (!docs) {
    return [];
  }
  try {
    return JSON.parse(docs);
  } catch (e) {
    if (typeof docs === "string") {
      return [
        {
          name: "",
          url: docs
        }
      ];
    }
    return [];
  }
};
export {
  getValue as a,
  getFormattedDate as g,
  isPermitted as i,
  visaDocuments as v
};
