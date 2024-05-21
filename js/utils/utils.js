import { cart } from "../app/cart/cart.js";
import { changeCurrencyItems, items, summNumber } from "./elements.js";

// Вивід к-ті товарів
export function viewSomeProducts(num = 0) {
    // Виводимо цифру в елемент
    items.innerHTML = num;
}

// Підрахунок суми замовлення
export function viewCartSummOrder() {
    if (summNumber) {
        // Підрахунок суми
        let sum = 0;

        // Перераховуємо суму всіх товарів з корзини
        cart.forEach((el) => {
            sum = sum + el.count * Number(el.price);
        });

        summNumber.innerHTML = `(${cart.length}) ${formatPrice(sum)}`;
    }
}

// Присвоюємо ціну і текст для валюти
const currency = {
    uah: {
        text: "грн",
        num: 1,
    },
    usd: {
        text: "дол",
        num: 39.5,
    },
    eur: {
        text: "євр",
        num: 41.9,
    },
};

// Форматуємо ціну перед виводом
export function formatPrice(price) {
    // отримуємо з локал сторедж значення
    const value = JSON.parse(localStorage.getItem("currency")) ?? "uah";

    // Отримуємо об'єкт відносно валюти з об'єкту currency
    const curObj = currency[value];

    // - Переформатуємо змінну price
    price = price / curObj.num;

    const priceText = Number(price).toLocaleString("uk-UA", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return `<span class="view-currency" data-price="${price}">${priceText} ${curObj.text}</span>`;
}

// Ввиід ціни у валюті
export function formatPriceCurrency(price, сurrencyText = "грн") {
    const priceText = Number(price).toLocaleString("uk-UA", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return `${priceText} ${сurrencyText}`;
}

// Повертаємо карточку товару
export function viewProduct(product) {
    // Робимо з ключів об'єкту змінні
    const { name, img, price, oldprice, id } = product;

    return `<div class="card-product">
                <div class="card-product__img-hold">
                    <img src="img/catalog/${img}" alt="" class="card-product__img" />
                </div>
                <div class="card-product__text-hold">
                    <a href="#" class="card-product__title-link">${name}</a>
                    <span class="card-product__price">${formatPrice(price)} <small>${formatPrice(oldprice)}</small></span>
                    
                    <a href="#" class="card-product__btn-add" data-id="${id}" data-name="${name}" data-img="${img}" data-price="${price}" data-count="1">
                        <svg class="icon icon-cart"><use href="#icon-cart-add"></use></svg>
                    </a>
                </div>
            </div>`;
}

export function currencyExchange() {
    // Перевірка на існування
    if (changeCurrencyItems) {
        // Перебираємо кожен об'єкт
        changeCurrencyItems.forEach((item) => {
            // Вішаємл подію кліку
            item.onclick = (e) => {
                e.preventDefault();

                // Отримуємо значення атрибута "href"
                const currencyKey = item.getAttribute("href");

                // Отримати цифру валюти з об'єкту currency
                const currencyObj = currency[currencyKey];

                // отримати всі елементи з ціною
                const priceList = document.querySelectorAll(".view-currency");

                // Формуємо localStorage
                localStorage.setItem("currency", JSON.stringify(currencyKey));

                // Перебираємо кожен елемент
                priceList.forEach((item) => {
                    // Отримуємо з елемента його data atribute price та присвоємо в змінну elPrice
                    const elPrice = Number(item.getAttribute("data-price"));

                    // Переводимо ціну відносно валюти і присвому в змінун newPrice
                    const newPrice = Math.floor(elPrice / currencyObj.num);

                    // Виводимо валюту
                    item.innerHTML = formatPriceCurrency(newPrice, currencyObj.text);
                });
            };
        });
    }
}
currencyExchange();
