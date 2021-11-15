
'use strict';

var numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "0");

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

var nameFilm = prompt("Один из последних просмотренных фильмов?");
var markFilm = prompt("Оценка фильма?", "0");
personalMovieDB.movies[nameFilm] = markFilm;
personalMovieDB.movies = markFilm;
console.log(personalMovieDB);