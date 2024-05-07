import { cartAddedItems, jsCartAddedList } from "../../utils/elements.js";
import { formatPrice } from "../../utils/utils.js";
import { viewSomeCartItems } from "./viewSomeCartItems.js";

export function viewProducts(cart) {
    // Вибираємо блок для виводу
    const viewBox = cartAddedItems ?? jsCartAddedList;

    // Пеервіряємо елемент на існування
    if (viewBox) {
        // підраховуємо кількість добавлених товарів
        viewSomeCartItems(cart);

        // Зберігаєм корзину в local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Перевіряємо масив на пустоту
        if (cart.length === 0) {
            viewBox.innerHTML = `<span class="no-result no-result--inline">
                                            <img src="img/no-result/no-result-v2.png" alt="No results" class="no-result__img" />
                                            <span class="no-result__title">Корзина пуста!</span>
                                        </span>`;
        } else {
            //Очищуєм блок
            viewBox.innerHTML = "";

            // Вивід товарыв на сторінку
            cart.forEach((product, index) => {
                // Отримуємо ключики з об'єкта
                const { id, img, name, price, count } = product;

                // Виводимо поточний  товар
                viewBox.innerHTML += `<div class="cart-added-list__item">
                <button class="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon" data-id="${id}">
                    <svg class="icon icon-close"><use href="#icon-close"></use></svg>
                </button>
                <img src="img/catalog/${img}" alt="" class="cart-added-list__item-img" />
                <p class="cart-added-list__item-text-hold">
                    <a href="#" class="cart-added-list__item-title-link">${name}</a>
                    <span class="cart-added-list__item-meta-list">
                        <span class="cart-added-list__item-meta">Ціна: ${formatPrice(price)}</span>
                    </span>
                </p>
                <input type="text" class="cart-added-list__item-count" placeholder="0" value="${count}" />
                <button class="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon"  data-id="${id}"></button>
                <button class="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon" data-id="${id}"></button>
            </div>`;
            });
        }
    }
}
