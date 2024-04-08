// Отримання посилання на лого сайту
const logo = document.querySelector('#logo');

// Отримання модального вікна
const modal = document.querySelector('#modal');

// Отримання елемента для закриття модального вікна
const closeBtn = document.querySelector('.close');

// Показати модальне вікно при наведенні на лого
logo.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Приховати модальне вікно при кліку на кнопку закриття
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Приховати модальне вікно при кліку поза вікном
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
