// Получение элементов со страницы

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button')[1]; // конкретная кнопка -- вторая
console.log(btns); // второй вариант console.log(btns[1])
// если переменная одна -- все равно будет HTMLCollection [button]

const circles = document.getElementsByClassName('circle'); // получи элементы через Класс
console.log(circles);


// современные методы

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});


const oneHeart = document.querySelector('.heart'); // первый элемент при помощи CSS селектора
console.log(oneHeart);