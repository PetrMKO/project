
const numberOfFilms = prompt('Сколько фиьмов вы посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const filmName = prompt('один изпросмотренных фильмов',''),
a = prompt('На сколько его оцените',''),
filmName1 = prompt('один изпросмотренных фильмов',''),
b = prompt('На сколько его оцените','');


personalMovieDB.movies[filmName] = a;
personalMovieDB.movies[filmName1] = b;

console.log(personalMovieDB);