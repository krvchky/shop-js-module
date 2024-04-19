// Функція добавлення класу активності
function setActive(e) {
    // Отримуємо блок з яким потрібно працювати
    const box = e.target.getAttribute("data-box-toggle");

    // Добавляємо або забираємо клас активності
    document.querySelector(box).classList.toggle("show");

    // Добавляємо кнопці клас актисності
    e.target.classList.toggle("active");
}
