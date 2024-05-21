import { holdOrderForm, titleCartSuccess } from "../utils/elements.js";
import { cart } from "./cart/cart.js";

// Функція для заміни шаблонних записів у HTML
function replaceTemplatePlaceholders(template, data) {
    return template.replace(/{(\w+)}/g, (_, key) => {
        return data[key] || `{${key}}`;
    });
}

// Функція для формування тексту з масиву корзини
function setCartText(cart) {
    return cart.map((item) => `${item.name} (${item.count})`).join(" <br /> ");
}

// Формуємо html імейл лист
async function setOrderEmail(formData) {
    // Отримуємо імейл html шаблону
    // const res = await fetch("../emailSendOrder.html");
    const res = await fetch("../emailyana.html");
    const htmlEmail = await res.text();

    // Перетворення formData у звичайний об'єкт
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Добавлямо підрахунок замовлених товарів
    formDataObject["numCartAdded"] = cart.length;

    // Наповнюємо лист товарами
    formDataObject["cartItems"] = setCartText(cart);

    // Заміняємо спосіб оплати на текстовий
    switch (formDataObject["payment"]) {
        case "1":
            formDataObject["payment"] = "Оплайн оплата";
            break;

        default:
            formDataObject["payment"] = "Невідомий";
            break;
    }
    console.log("formDataObject: ", formDataObject);

    const newHtmlEmail = replaceTemplatePlaceholders(htmlEmail, formDataObject);

    return newHtmlEmail;
}

// Обробка замовлення
export async function sendOrderForm(e) {
    e.preventDefault();

    // Зібрати дані з форми
    const formData = new FormData(e.target);

    // Формуємо email лист
    const message = await setOrderEmail(formData);
    console.log("message: ", message);

    formData.append("to", "kravchukyana05@gmail.com");
    formData.append("subject", "Тема листа");
    formData.append("message", message);

    // Відправляємо дані на пошту
    fetch("https://api.inderio.com/send-email", {
        body: formData,
        method: "post",
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("data: ", data);

            // Приховуємо форму
            holdOrderForm.classList.add("hidden");

            // Показуємо повідомлення про успішне відправлення
            titleCartSuccess.classList.remove("hidden");

            // Очищуємо масив корзини
            cart.length = 0;
            localStorage.removeItem("cart");
        });
}
