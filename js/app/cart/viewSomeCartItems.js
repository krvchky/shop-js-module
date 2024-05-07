import { cartSumm } from "../../utils/elements.js";

export function viewSomeCartItems(cart) {
    // Формуємо к-ть товарів
    const cartLength = cart.length;

    // Вивід в html
    cartSumm.forEach((element) => {
        element.innerHTML = cartLength;

        if (cartLength == 0) {
            element.classList.remove("show-num");
        } else {
            element.classList.add("show-num");
        }
    });
}
