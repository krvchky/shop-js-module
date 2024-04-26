// Отримуємо відпові від сервера
export function getData(url = "") {
    return fetch(url).then((res) => res.json());
}

// Об'єкт для посилань до різних api
export const apiUrl = {
    category: "https://6622700f27fcd16fa6c9d44f.mockapi.io/category",
    catalog: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog",
    catalogByCatid: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog?catid=",
    hotOffer: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog?hotoffer=yes",
    search: "https://6622700f27fcd16fa6c9d44f.mockapi.io/catalog?name=",
};
