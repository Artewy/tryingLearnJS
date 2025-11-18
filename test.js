"use strict"

function hello() {
    console.log('hello world');
}

hello();

function hi() {
    console.log('say hi');
}

hi();

const arr = [1, 14, 4, 30, 54, 27, 25, 228],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    console.log(a, b)
    return a - b;
}

console.log(sorted);










/*
1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали
подставлять в неё - результат все время неправильный. 
Необходимо найти причины и исправить.

2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд 
из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).

Сейчас функция работает, но постоянно выдает неправильный результат. 
Ведь из представленного меню сумма двух любых цен всегда будет больше 
20. Необходимо найти причину и исправить.

3) Функция transferWaitors создана для того, чтобы копировать шаблон 
данных и передавать их в другой ресторан. Конечно, в другом ресторане 
будут другие блюда, другие официанты и тп. Сейчас эта функция только в 
начале разработки и должна менять данные про официантов.

Но в нынешнем виде мы обнаружили, что после её запуска не только 
копия данных содержит новых официантов, но и основные данные! 
В restorantData сотрудник Alice исчезает и заменяется Mike! 
Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
*/

/*

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}
isOpen(restorantData.openNow)
//console.log(isOpen(restorantData.openNow))

function compareDishPrices(firstDish, secondDish, averagePrice) {
    const extractPrice = (priceStr) => Number(priceStr.replace('$', ''));
    const firstPrice = extractPrice(firstDish.price);
    const secondPrice = extractPrice(secondDish.price);
    const average = extractPrice(averagePrice);

    const total = firstPrice + secondPrice;
    return total < average ? 'Цена ниже средней' : 'Цена выше средней';
}
compareDishPrices(restorantData.menu[2], restorantData.menu[2], restorantData.averageLunchPrice)
//console.log(compareDishPrices(restorantData.menu[2], restorantData.menu[2], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{ name: 'Mike', age: 32 }];
    return copy;
}
transferWaitors(restorantData);
//console.log(transferWaitors(restorantData));

*/





// перепишем программу, сделая ее лучше

// 1) переписан тернарный оператор
// 2) улучшено чтение функции сравнения цен блюд со средней ценой

/*
Дополнительный вариант решения:

function compareDishPrices(firstDish, secondDish, averagePrice) {
    const extractPrice = (priceStr) => Number(priceStr.replace('$', ''));
    const firstPrice = extractPrice(firstDish.price);
    const secondPrice = extractPrice(secondDish.price);
    const average = extractPrice(averagePrice);
    
    const total = firstPrice + secondPrice;
    return total < average ? 'Цена ниже средней' : 'Цена выше средней';
}

*/

// 3) изменено копирование массива
// вывод через консоль в браузере

const restorantData1 = {
    menu: [
        { name: 'Salad Caesar', price: '14$' },
        { name: 'Pizza Diavola', price: '9$' },
        { name: 'Beefsteak', price: '17$' },
        { name: 'Napoleon', price: '7$' }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: false
};

function getRestaurantStatus(isOpen) {
    return isOpen ? 'Открыто' : 'Закрыто';
}

console.log(getRestaurantStatus(restorantData1.openNow))

function isAverageLunchPriceTrue(firstDish, secondDish, averagePrice) {
    const firstPrice = Number(firstDish.price.slice(0, -1));
    const secondPrice = Number(secondDish.price.slice(0, -1));
    const average = Number(averagePrice.slice(0, -1));

    const total = firstPrice + secondPrice;

    return total < average ? 'Цена ниже средней' : 'Цена выше средней';
}

console.log(isAverageLunchPriceTrue(restorantData1.menu[2], restorantData1.menu[2], restorantData1.averageLunchPrice));

function transferWaitors(data) {
    const copy = {
        ...data, waitors: [{ name: 'Alex', age: 1488 }]
    };
    return copy;
}

console.log(transferWaitors(restorantData1.waitors));
