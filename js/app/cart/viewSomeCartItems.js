import { cartSumm } from "../../utils/elements.js";

export function viewSomeCartItems(cart) {
    // Формуємо к-ть товарів
    const cartLength = cart.length;

    // Вивід в html
    cartSumm.forEach((element) => {
        element.innerHTML = cartLength;
        element.classList.add("show-num");
    });
}
