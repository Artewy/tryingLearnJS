// Практика, ч.2, применяем условия и циклы
/* 
Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)

3) При помощи условий проверить personalMovieDB count, и если он меньше 10 - вывести
сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический
больше - зритель", а если "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способамиж/
'use strict';
const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?","

было:

df 


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    private: false
};

const lastMovieYouWatched1 = prompt('Один из последних просмотренных фильмов?', '');
const scoreLastMovie1 = prompt('На сколько оцените его?', '');
const lastMovieYouWatched2 = prompt('Один из последних просмотренных фильмов?', '');
const scoreLastMovie2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovieYouWatched1] = scoreLastMovie1;
personalMovieDB.movies[lastMovieYouWatched2] = scoreLastMovie2;

console.log(personalMovieDB);



стало:
*/

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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

console.log(personalMovieDB);