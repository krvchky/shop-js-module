import { apiUrl, getData } from "../api/getData.js";
import { catalogProductsHtml } from "../utils/elements.js";
import { viewProduct, viewSomeProducts } from "../utils/utils.js";

export function viewCatalog(catid = "0") {
    // Формумо змінну з посилання на відповідну силку
    const url = catid === "0" ? apiUrl.catalog : apiUrl.catalogByCatid + catid;

    if (catalogProductsHtml) {
        // Звертаємося до сервера за масивом
        getData(url).then((catalogList) => {
            // Перевіряємо чи є масив товарів
            if (catalogList === "Not found") {
                // Повідомляємо користувача про пусте значення
                catalogProductsHtml.innerHTML = "<h1>Товари не знайдено</h1>";
            } else {
                // очищуємо блок для виводу
                catalogProductsHtml.innerHTML = "";

                // Виводимо к-ть товарів
                viewSomeProducts(catalogList.length);

                // Вивід товарів на сторінку
                catalogList.forEach((product) => {
                    // Елемент в який будемо виводити товари
                    catalogProductsHtml.innerHTML += viewProduct(product);
                });
            }
        });
    }
}
