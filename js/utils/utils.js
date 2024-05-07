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

// Форматуємо ціну перед виводом
export function formatPrice(price) {
    const priceText = Number(price).toLocaleString("uk-UA", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return `<span class="view-currency" data-price="${price}">${priceText} грн</span>`;
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
                    <a href="#" class="card-product__btn-add">
                        <svg class="icon icon-cart"><use href="#icon-cart-add"></use></svg>
                    </a>
                </div>
            </div>`;
}

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

if (changeCurrencyItems) {
    changeCurrencyItems.forEach((item) => {
        item.onclick = (e) => {
            e.preventDefault();
            const currency = item.getAttribute("href"); // Отримуємо значення атрибута "href"
            console.log(currency);
        };
    });
}
// const getCurrency = "usd";
// const currencyObj = currency[getCurrency];
// console.log(currencyObj.text, currencyObj.num);
// console.log(formatPrice(39999));
// console.log(formatPriceCurrency(39999 / currencyObj.num, currencyObj.text));

// Отримати кнопки валют з footer ✅
// Повісити на них подію кліку ✅
// - prevetnDefsult ✅
// - При кліку отримати вибрану валюту з атрибута href✅
// - Отримати цифру валюти з об'єкту currency
// - отримати всі елементи з ціною document.querySelectorAll('.view-currency')
// - Робимо forEach з конкретною ціною
// - - Отримуємо з елемента його data atribute price та присвоємо в змінну elPrice
// - - Переводимо ціну відносно валюти і присвому в змінун newPrice
// - - Берем поточний елемент і в його innerHtml виводимо ціну функцією formatPriceCurrency
