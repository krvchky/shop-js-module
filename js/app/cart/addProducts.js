import { cart } from "./cart.js";
import { viewProducts } from "./viewProducts.js";

export function addProducts(product) {
    // Перевірка наявності товару в корзині за допомогою методу some()
    const keyProduct = cart.findIndex((item) => item.id == product.id);

    // перевірка товару на існування
    if (keyProduct == -1) {
        cart.push(product);
    } else {
        cart[keyProduct].count++;
    }

    // Виводимо товари, які є в корзині
    viewProducts(cart);
}
