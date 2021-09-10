"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фиьмов вы посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фиьмов вы посмотрели', '');
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

function rememberMyFilms(){
    for(let i = 0; i < 3 ; i++){
        const filmName  = prompt('один изпросмотренных фильмов',''),
        a = prompt('На сколько его оцените','');

        if (filmName != null && filmName.length < 50 && filmName != '' && a != null && a != ''){
            personalMovieDB.movies[filmName] = a;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
    }
}  

rememberMyFilms();

function detectPersonaLevel(){
    if(personalMovieDB.count < 10){
        console.log('Мало фильмов');
    } else if(personalMovieDB.count > 10 && personalMovieDB.movies.count < 30){
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30){
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonaLevel();

function showMyDB(){
    if(!personalMovieDB.private){
        console.log(personalMovieDB);
    }
    else{
        console.log('Error');
    }
}

showMyDB();
