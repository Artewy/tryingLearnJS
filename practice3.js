"use strict"

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство private. Если 
стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres, в которой пользователь будет 3 раза
отвечать на вопрос "Ваш любимый персонаж под номером ${номер по порядку}".
Каждый ответ записывается в массив данных genres
P.S.: функции вызывать необязательно */


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы хороший зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('произошла ошибка')
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый персонаж под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
        // либо можно записать вот так: 
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый персонаж под номером ${i}`);
    }
}

writeYourGenres();
