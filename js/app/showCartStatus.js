import { holdOrderForm, titlCartEmpty } from "../utils/elements.js";
import { cart } from "./cart/cart.js";

export function showCartStatus() {
    // Перевіряти чи є щось у корзині
    if (holdOrderForm && titlCartEmpty) {
        if (cart.length === 0) {
            // Якщо нема - корзина пуста
            holdOrderForm.classList.add("hidden");
            titlCartEmpty.classList.remove("hidden");
        } else {
            // Якщо є щось у корзині тоді показувати форму
            holdOrderForm.classList.remove("hidden");
            titlCartEmpty.classList.add("hidden");
        }
    }
}
