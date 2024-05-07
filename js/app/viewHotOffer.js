import { apiUrl, getData } from "../api/getData.js";
import { hotOfferProductsHtml } from "../utils/elements.js";
import { viewProduct } from "../utils/utils.js";

export function viewHotOffer() {
    // очищуємо блок для виводу
    if (hotOfferProductsHtml) {
        // Звертаємося до сервера за масивом
        getData(apiUrl.hotOffer).then((catalogList) => {
            hotOfferProductsHtml.innerHTML = "";

            // Вивід товарів на сторінку
            catalogList.forEach((product) => {
                // Елемент в який будемо виводити товари
                hotOfferProductsHtml.innerHTML += viewProduct(product);
            });
        });
    }
}
