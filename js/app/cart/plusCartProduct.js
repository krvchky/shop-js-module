import { cart } from "./cart.js";
import { viewProducts } from "./viewProducts.js";

export const plusCartProduct = function (id) {
    // Знайти товар в масиві cart по id
    const keyProduct = cart.findIndex((item) => item.id == id);

    //Змінити ключик count
    cart[keyProduct].count++;

    // Повідомити html
    viewProducts(cart);
};
