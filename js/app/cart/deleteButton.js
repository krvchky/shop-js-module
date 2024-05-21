import { showCartStatus } from "../showCartStatus.js";
import { cart } from "./cart.js";
import { viewProducts } from "./viewProducts.js";

export const deleteCartProduct = function (id) {
    // Знайти товар в корзині по id
    const keyProduct = cart.findIndex((item) => item.id == id);

    // Видаляємо запис з масиву по індексу методом splice()
    cart.splice(keyProduct, 1);

    // Оновити корзину
    viewProducts(cart);

    // Виклик функції на сторінці замовлення
    showCartStatus();
};
