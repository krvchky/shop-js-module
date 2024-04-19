import { viewCatalog } from "./app/viewCatalog.js";
import { viewCategory } from "./app/viewCategory.js";
import { viewHotOffer } from "./app/viewHotOffer.js";
import { categoryListHtml } from "./utils/elements.js";

// Виводимо категорію сторінки
viewCategory();

// Виводимо товари сторінки
viewCatalog();

// Вивід акційних товарів
viewHotOffer();

// Виводимо товари по категорії
categoryListHtml.onclick = (e) => {
    e.preventDefault();

    // Отримуємо id категорії
    const id = e.target.getAttribute("href");

    // Виводимо товари по категорії
    viewCatalog(id);
};
