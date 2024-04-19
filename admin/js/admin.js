function readURL(input) {
    // Перевірка, чи передано файл та чи вибраний перший файл
    if (input.files && input.files[0]) {
        // Створення об'єкта FileReader
        const reader = new FileReader();

        // Отримання id елементу, в який треба вивести прев'ю, з атрибуту data-preview-id
        const previewId = input.getAttribute('data-preview-id');

        // Обробник події завантаження файлу
        reader.onload = function (e) {
            // Задання шляху до зображення як джерела даних для елемента з визначеним id
            document.getElementById(previewId).src = e.target.result;
        }

        // Читання файлу як URL-адреси даних
        reader.readAsDataURL(input.files[0]);
    }
}

// Подія зміни вибору файлу для елементів вводу типу "file"
document.querySelectorAll("input[type='file']").forEach(function (fileInput) {
    fileInput.addEventListener('change', function () {
        // Виклик функції readURL з передачею обраного елементу вводу файлу
        readURL(this);
    });
});
