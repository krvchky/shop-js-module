import { items } from "./elements.js";

// Вивід к-ті товарів
export function viewSomeProducts(num = 0) {
    // Виводимо цифру в елемент
    items.innerHTML = num;
}
