let form = document.querySelector('form');
let name = document.querySelector('.name');
let tel = document.querySelector('.tel');
let message = document.querySelector('.message');
let error = document.querySelector('.error');

form.addEventListener("submit", function (event) {
    if (name.value.length < 3 || name.value.length == 0) {
        error.innerHTML = "Введите Имя";
        event.preventDefault();
    } else if (tel.value.length < 10 || tel.value.length == 0) {
        error.innerHTML = "Введите Телефон";
        event.preventDefault();
    } else if (message.value.length < 10 || message.value.length == 0) {
        error.innerHTML = "Введите Сообщение";
        event.preventDefault();
    }
});
