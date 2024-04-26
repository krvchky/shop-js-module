import { addProducts } from "./app/cart/addProducts.js";
import { searchProducts } from "./app/search.js";
import { viewCatalog } from "./app/viewCatalog.js";
import { viewCategory } from "./app/viewCategory.js";
import { viewHotOffer } from "./app/viewHotOffer.js";
import { categoryListHtml, searchButton, catalogProductsHtml, deleteButtonHtml } from "./utils/elements.js";

// Виводимо категорію сторінки
viewCategory();

// Виводимо товари сторінки
viewCatalog();

// Вивід акційних товарів
viewHotOffer();

// Пошук товарів

// Виводимо товари по категорії
if (categoryListHtml) {
    categoryListHtml.onclick = (e) => {
        e.preventDefault();

        // Отримуємо id категорії
        const id = e.target.getAttribute("href");

        // Виводимо товари по категорії
        viewCatalog(id);
    };
}

// Слідкуємо за подією кліку на кнопці "Шукати"
if (searchButton) {
    searchButton.addEventListener("click", () => {
        searchProducts();
    });
}

// Добавляємо товар в корзину
catalogProductsHtml.onclick = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("card-product__btn-add")) {
        addProducts(e.target.dataset);
    }
};

// Вішаєм подію кліку на кнопку 'Видалити'

deleteButtonHtml.onclick = (e) => {
    // console.log("click ");
    e.preventDefault();
    if (e.target.classList.contains("cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon")) {
        console.log("Це кнопка для видалення товару");
    } else {
        console.log("Це не кнопка для видалення товару");
    }
};
