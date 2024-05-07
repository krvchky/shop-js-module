import { cart } from "./cart.js";
import { viewProducts } from "./viewProducts.js";

export const minusCartProduct = function (id) {
    const keyProduct = cart.findIndex((item) => item.id == id);

    if (cart[keyProduct].count > 1) cart[keyProduct].count--;

    viewProducts(cart);
};
