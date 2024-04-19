import { apiUrl, getData } from "../api/getData.js";
import { catalogProductsHtml } from "../utils/elements.js";
import { viewSomeProducts } from "../utils/utils.js";

export function viewCatalog(catid = 0) {
    // Формумо змінну з посилання на відповідну силку
    const url = catid === 0 ? apiUrl.catalog : apiUrl.catalogByCatid + catid;

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
                // Робимо з ключів об'єкту змінні
                const { name, img, price, oldprice, id } = product;

                // Елемент в який будемо виводити товари
                catalogProductsHtml.innerHTML += `<div class="card-product">
                        <div class="card-product__img-hold">
                            <img src="img/catalog/${img}" alt="" class="card-product__img" />
                        </div>
                        <div class="card-product__text-hold">
                            <a href="#" class="card-product__title-link">${name}</a>
                            <span class="card-product__price">${price}грн <small>${oldprice}грн</small></span>
                            <a href="#" class="card-product__btn-add">
                                <svg class="icon icon-cart"><use href="#icon-cart-add"></use></svg>
                            </a>
                        </div>
                    </div>`;
            });
        }
    });
}
