import { apiUrl, getData } from "../api/getData.js";
import { categoryListHtml } from "../utils/elements.js";

export function viewCategory() {
    // Звертаємся до сервера щоб отримати категорії
    if (categoryListHtml) {
        getData(apiUrl.category).then((categoryList) => {
            // Виводимо категорії до html
            categoryList.forEach(({ id, title }) => {
                categoryListHtml.innerHTML += `<a href="${id}" class="dropdown-item">${title}</a>`;
            });
        });
    }
}
