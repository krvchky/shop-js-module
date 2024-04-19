import { apiUrl, getData } from "../api/getData.js";
import { hotOfferProductsHtml } from "../utils/elements.js";

export function viewHotOffer() {
    // Звертаємося до сервера за масивом
    getData(apiUrl.hotOffer).then((catalogList) => {
        // очищуємо блок для виводу
        hotOfferProductsHtml.innerHTML = "";

        // Вивід товарів на сторінку
        catalogList.forEach((product) => {
            // Робимо з ключів об'єкту змінні
            const { name, img, price, oldprice, id } = product;

            // Елемент в який будемо виводити товари
            hotOfferProductsHtml.innerHTML += `<div class="card-product">
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
    });
}
