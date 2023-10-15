// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const onlyDirectors = movies.map (movies1 => {
    return {
     director: movies1.director,
    }
  }
    )
  return onlyDirectors
} 

console.log('Get all directors', getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length===0){
    return 0
  }

 const spielbergMovies = movies.filter (spielberg => {
  return (
    spielberg.director === 'Steven Spielberg' && spielberg.genre.includes('Drama')
  )

 }  )

 return spielbergMovies.length
}

console.log('how many movies',howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let sumOfScores = movies.reduce((accumulator, currentValue) => {
    if (currentValue.score === undefined) {
      return accumulator;
    } else {
      return accumulator + currentValue.score;
    }
  }, 0);

  let avgOfScores = sumOfScores / movies.length;

  return avgOfScores.toFixed(2);
}

console.log("scores average",scoresAverage(movies))

//   const sumOfScores = movies.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue.score
//   }, 0 )

// const avgOfScores = sumOfScores/movies.length

// return avgOfScores.toFixed(2)




// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

  const dramaArray = movies.filter(drama => drama.genre.includes('Drama')) 

  console.log("drama scores average",scoresAverage(dramaArray))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {   
  const moviesByYear = [...movies]; // spread operator, need to copy the whole structure

  moviesByYear.sort ((a,b) =>  { // sort
    if (a.year-b.year !==0){  // checks that it's not 0, which means that next line is executed
      return a.year - b.year;  // if a-b is >0 sort b before a IF <0 sort a before b
    } else {   //
        if (a.title < b.title) {
      return -1;   // -1 indicates that a should come before b 
      } else if (a.title >b.title){
        return 1; // 1  indicates that a should come after b
      } else {
        return 0 // no change
      }
      }
    }) 

    return moviesByYear
  }

//console.log ('order by year', orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  const moviesByTitle = [...movies];

  moviesByTitle.sort ((a,b) => {
    if (a.title < b.title) {
      return -1;   // -1 indicates that a should come before b 
      } else if (a.title >b.title){
        return 1; // 1  indicates that a should come after b
      } else {
        return 0 // no change
      }
  
    })
  return moviesByTitle.slice(0,20)
}

console.log ('Order Alphabetically', orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
