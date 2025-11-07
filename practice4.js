"use strict"

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта
personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. 
Если оно false - он переключает егo в true, если true - переключает в false. 
Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять
пустую строку. Если он это сделал - возвращать его к этому же вопросу. 
После того, как все жанры введены - при помощи метода forEach вывести в консоль 
сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() { // '=>' 'function' синонимы
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastMovieYouWatched1 = prompt('Один из последних просмотренных фильмов?', '');
            const scoreLastMovie1 = prompt('На сколько оцените его?', '');

            if (lastMovieYouWatched1 != null & scoreLastMovie1 != null && lastMovieYouWatched1 != '' && scoreLastMovie1 != '' && lastMovieYouWatched1.length < 50) {
                personalMovieDB.movies[lastMovieYouWatched1] = scoreLastMovie1;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы хороший зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('произошла ошибка')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
// personalMovieDB.start(); -- Запуск
// personalMovieDB.toggleVisibleDB(); -- включить приватность
// personalMovieDB.showMyDB(personalMovieDB.private); -- undefined (приватная БД)
            personalMovieDB.private = true; 
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // const genres = prompt(`Ваш любимый персонаж под номером ${i}`);

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genres;
            // }

        const genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

        if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
// регистр влияет на сортировку на кириллице -- используй toLowerCase                
                personalMovieDB.genres.sort(', ');
            }

        }
        personalMovieDB.genres.forEach((item, i) => { // item -- каждый элемент в массиве, i -- # по порядку
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }    
};

