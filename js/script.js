import { addProducts } from "./app/cart/addProducts.js";
import { cart } from "./app/cart/cart.js";
import { deleteCartProduct } from "./app/cart/deleteButton.js";
import { minusCartProduct } from "./app/cart/minusCartProduct.js";
import { plusCartProduct } from "./app/cart/plusCartProduct.js";
import { viewProducts } from "./app/cart/viewProducts.js";
import { searchProducts } from "./app/search.js";
import { sendOrderForm } from "./app/sendOrderForm.js";
import { showCartStatus } from "./app/showCartStatus.js";
import { viewCatalog } from "./app/viewCatalog.js";
import { viewCategory } from "./app/viewCategory.js";
import { viewHotOffer } from "./app/viewHotOffer.js";
import { categoryListHtml, searchButton, catalogProductsHtml, deleteButtonHtml, bodyHtml, cartSumm, summNumber, formOrder } from "./utils/elements.js";
import { viewCartSummOrder } from "./utils/utils.js";

// Вивід товарів корзини
viewProducts(cart);

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
if (catalogProductsHtml) {
    catalogProductsHtml.onclick = (e) => {
        e.preventDefault();

        if (e.target.classList.contains("card-product__btn-add")) {
            addProducts(e.target.dataset);
        }
    };
}

// Вішаєм подію кліку на кнопку 'Видалити'
if (deleteButtonHtml) {
    deleteButtonHtml.onclick = (e) => {
        e.preventDefault();

        // Достукуємся до кнопки видалення
        if (e.target.classList.contains("cart-added-list__item-btn-delete")) {
            deleteCartProduct(e.target.dataset.id);
            viewCartSummOrder();
        }

        // Достукуємся до кнопок підрахунків
        if (e.target.classList.contains("cart-added-list__item-btn-plus")) {
            plusCartProduct(e.target.dataset.id);
            viewCartSummOrder();
        }

        // Достукуємся до кнопок підрахунків (-)
        if (e.target.classList.contains("cart-added-list__item-btn-minus")) {
            minusCartProduct(e.target.dataset.id);
            viewCartSummOrder();
        }
    };
}

// Відносно розділу викликаєио якусь функцію
const pageType = bodyHtml.dataset.type;

if (pageType !== undefined) {
    switch (pageType) {
        case "home":
            // Виводимо категорію сторінки
            viewCategory();

            // Виводимо товари сторінки
            viewCatalog();

            // Вивід акційних товарів
            viewHotOffer();

            break;

        case "order":
            // Підрахунок замовлення
            viewCartSummOrder();

            // Слідкуємо за відправкою форми
            formOrder.onsubmit = sendOrderForm;

            // Показати блоки відповідно до наповненості корзини
            showCartStatus();
            break;
    }
}
