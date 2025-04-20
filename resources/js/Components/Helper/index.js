import {usePage} from "@inertiajs/react";

export const getFormattedDate = (dateTime) => {
    const date = new Date(dateTime);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;

}

export const getValue = (items, id) => {
    return items.find(item => item.id === id)?.name ?? ''
}
export const isPermitted = (permission) => {
    const role = usePage().props?.admin_role;

    if (!role) return false;

    return role.is_super_admin || role.permissions.includes(permission);
};

export const visaDocuments = (docs) => {
    if (!docs) {
        return []
    }

    try {
        return JSON.parse(docs)
    } catch (e) {
        if (typeof docs === "string") {
            return [
                {
                    name: '',
                    url: docs
                }
            ]
        }
        return []
    }
}
