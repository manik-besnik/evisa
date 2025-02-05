export const getFormattedDate = (dateTime) => {
    const date = new Date(dateTime);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;

}

export const getValue = (items, id) => {
    return items.find(item => item.id === id)?.name
}
