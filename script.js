"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function (){
        personalMovieDB.count = prompt('Сколько фиьмов вы посмотрели', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фиьмов вы посмотрели', '');
        }
    }, 
    rememberMyFilms: function (){
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
    },

    detectPersonaLevel: function (){
        if(personalMovieDB.count < 10){
            console.log('Мало фильмов');
        } else if(personalMovieDB.count > 10 && personalMovieDB.movies.count < 30){
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    
    writeYourGenres: function (){
        for(let i = 0; i < 3; i++){
           const a = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if(a != '' && a != null){
                personalMovieDB.genres[i] = a;
            }
            else{
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} – это${item}`);
        });
    },

    showMyDB: function (hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
        else{
            console.log('Error');
        }
    },

    toggleVisibleMyDB: function(){
        
        personalMovieDB.private = !personalMovieDB.private;
        console.log(personalMovieDB.private);
    }


};




personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonaLevel();

personalMovieDB.writeYourGenres();

console.log(personalMovieDB.genres);