"use strict";

/* Практическое задание 
1) Создать переменную numberOfFilms, в нее поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить свойства:
    — count — передается ответ на первый вопрос
    — movies — в это свойство поместить пустой объект
    — actors — тоже поместить пустой объект
    — genres — поместить пустой массив
    — privat — поместить boolean значение false

3) Задайте пользователю по 2 раза вопросы:
    — 'Один из последних просмотренных фильмов?'
    — 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные.
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли
*/

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovieYouWatched = prompt('Один из последних просмотренных фильмов?', '');
const scoreLastMovie = prompt('На сколько оцените его?', '');
const lastMovieYouWatched1 = prompt('Один из последних просмотренных фильмов?', '');
const scoreLastMovie1 = prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastMovieYouWatched] = scoreLastMovie;
personalMovieDB.movies[lastMovieYouWatched1] = scoreLastMovie1;

console.log(personalMovieDB);