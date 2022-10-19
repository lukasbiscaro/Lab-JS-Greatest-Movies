// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayDirectors = moviesArray.map(directors => directors.director)
    return arrayDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;

    let avgScore = moviesArray.reduce((a, b) => {
        if (b.score) {
            return a + b.score;
        } else {
            return a;
        }
    }, 0);

    return Number((avgScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaTotal = moviesArray.filter(dramaTheme => dramaTheme.genre.includes('Drama'))
    if (!dramaTotal.length) {
        return 0
    } else {
        let dramaScores = dramaTotal.map(cond1 => cond1.score)
        let total = dramaScores.reduce((num1, num2) => (num1 + num2));
        let finalData = total / dramaTotal.length
        let finalScore2 = (Math.round(finalData * 100)) / 100
        return finalScore2
    }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray]
    newArray.sort((a, b) => {
        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
        if (a.title > b.title) return 1
        else if (a.title < b.title) return -1
        else return 0
    })
    return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => movie.title).sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
