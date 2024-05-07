import { apiUrl, getData } from "../api/getData.js";
import { catalogProductsHtml, searchInput } from "../utils/elements.js";
import { viewProduct, viewSomeProducts } from "../utils/utils.js";

// Функція для отримання товарів відповідно до введеного користувачем тексту категорії
export function searchProducts() {
    const searchText = searchInput.value.trim().toLowerCase();

    // Формуємо URL для пошуку категорій
    const url = apiUrl.search + searchText;

    // Звертаємось до сервера, щоб отримати товари відповідно до категорії
    getData(url).then((productList) => {
        // Перевіряємо чи є масив товарів
        if (productList === "Not found") {
            // Повідомляємо користувача про пусте значення
            catalogProductsHtml.innerHTML = "<h1>Товари не знайдено</h1>";

            // Виводимо к-ть товарів
            viewSomeProducts(0);
        } else {
            // очищуємо блок для виводу
            catalogProductsHtml.innerHTML = "";

            // Виводимо к-ть товарів
            viewSomeProducts(productList.length);

            // Вивід товарів на сторінку
            productList.forEach((product) => {
                // Елемент в який будемо виводити товари
                catalogProductsHtml.innerHTML += viewProduct(product);
            });
        }
    });
}
