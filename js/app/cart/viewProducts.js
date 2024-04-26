import { jsCartAddedList } from "../../utils/elements.js";
import { viewSomeCartItems } from "./viewSomeCartItems.js";

export function viewProducts(cart) {
    // Перевіряємо масив на пустоту
    if (cart.length === 0) {
        console.log("Корзина пуста");
    } else {
        // підраховуємо кількість добавлених товарів
        viewSomeCartItems(cart);

        //Очищуєм блок
        jsCartAddedList.innerHTML = "";

        // Вивід товарыв на сторінку
        cart.forEach((product) => {
            // Отримуємо ключики з об'єкта
            const { id, img, name, price, count } = product;

            // Виводимо поточний  товар
            jsCartAddedList.innerHTML += `<div class="cart-added-list__item">
            <button class="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon">
                <svg class="icon icon-close"><use href="#icon-close"></use></svg>
            </button>
            <img src="img/catalog/${img}" alt="" class="cart-added-list__item-img" />
            <p class="cart-added-list__item-text-hold">
                <a href="#" class="cart-added-list__item-title-link">${name}</a>
                <span class="cart-added-list__item-meta-list">
                    <span class="cart-added-list__item-meta">Ціна: ${price}грн</span>
                </span>
            </p>
            <input type="text" class="cart-added-list__item-count" placeholder="0" value="${count}" />
            <button class="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon"></button>
            <button class="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon"></button>
        </div>`;
        });
    }
}
