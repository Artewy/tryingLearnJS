// const btnss = document.querySelector('button'),
//     overlay = document.querySelector('.overlay');
// // способы назначения (комментарий ниже. КРАТКО -- НЕ ОЧЕНЬ)
// btn.onclick = function () {
//     alert('Click');
// }
// const deleteElementt = (e) => {
//     console.log(e.target);
//     console.log(e.type);
// };
// btn.addEventListener('click', deleteElementt);
// overlay.addEventListener('click', deleteElementt);




const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

console.dir(box);

// inline styles

//box.style.backgroundColor = 'blue';
//box.style.width = '500px' // не сработает, CSS не знает, что такое 500,
// нужно указать В ВИДЕ СТРОКИ'500px'

// как назначить несколько Inline стилей? есть свойство -- css text

box.style.cssText = 'background-color: blue; width: 500px';
// на практике этот метод позволяет быстро сформировать Inline-styles, к тому же сюда можно вставлять любые переменные в бэктиках
// box.style.cssText = `background-color: blue; width: ${number}px`;

btns[1].style.borderRadius = '100%';

// обращение к псевдомассиву circles -- ошибка. ПСЕВДОМАССИВ ПРОСТО СОДЕРЖИТ ЭЛЕМЕНТЫ
//circles.style.backgroundColor = 'red' // ошибка, псевдомассив не знает об объекте 'style'
circles[0].style.backgroundColor = 'red' // good

// если нужно провести одни и те же действия над разными элементами? Цикл, for of, forEach (работает если используем querySelectorAll)

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// перебирающие методы:

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
})

// методы для работы с элементами страницы

const div = document.createElement('div'); // существует только внутри файла
// создадим текстовой узел (элемент без оболочки тега)
//const text = document.createTextNode('tut bil ya');

// Добавим визуал (если целиком менять элемент -- меняем/модицифируем классы, а не добавляем кучу стилей)

div.classList.add('black');
document.body.append(div); // берем тег body, в самый конец помещаем элемент div

// document.querySelector('.wrapper').append(div); если не нужно снова обращаться к нему, в противном случае
// помещаем его в константы и получаем
wrapper.append(div);
// Обратный метод -- Prepend, вставляет в начало
// еще 2 метода -- before/after -- вставить перед/после чего-то

hearts[0].before(div); // перед первым сердечком вставляем div

// удалим элемент -- remove

circles[0].remove();

// replacewith -- заменить элемент на другой

hearts[0].replaceWith(circles[0]); // заменить сердечко на кружочек

// устаревшие конструкции, но встречающиеся в коде
// сейчас append -- раньше было appendChild
// сейчас prepend/before/after -- раньше было insertBefore (вставить перед):
// wrapper.insertBefore(div, hearts[0]) то что вставляем; перед каким элементом вставляем
// сейчас remove -- раньше было removeChild:
// wrapper.removeChild(hearts[1]);
// сейчас replaceWith -- раньше было replaceChild:
// wrapper.replaceChild(circles[0], hearts[0]); ставлю кружочек вместо сердечка

// впишем текст в элемент
div.innerHTML = '<h6>hello world</h6>';
// второй вариант
div.textContent = 'hello'; // ТОЛЬКО ТЕКСТ, БЕЗ ХТМЛ СТРУКТУРЫ




// как вставить кусок ХТМЛ кода перед/после определенных тегов? insertAdjacentHTML
// указываем элемент, который редактируем
div.insertAdjacentHTML('beforebegin', '<h6>hi</h6>');
// beforebegin перед элементом
// afterbegin в начало нашего элемента
// beforeend в конец нашего элемента (перед концом)
// afterend после нашего элемента

// можно получать данные, которые подойдут по селектору и находятся внутри определенного элемента, то есть
// wrapper = document.querySelector('.wrapper'),
// hearts = wrapper.querySelectorAll('.heart'),
// oneHeart = wrapper.querySelector('.heart');