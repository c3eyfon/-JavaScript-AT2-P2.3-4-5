class Movie {
    constructor(movieID, title, year, rating){
        this.movieID = movieID;
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}

console.log(Movie);

// Movie list

let movies = [
  new Movie(5, "Police Story", 1985, 8.9),
  new Movie(2, "Hard Boiled", 1992, 8.7),
  new Movie(0, "Infernal Affairs", 2002, 9.1),
  new Movie(1, "Shaolin Soccer", 2001, 8.0),
  new Movie(9, "Ip Man", 2008, 8.6),
  new Movie(3, "SPL: Sha Po Lang", 2005, 7.8),
  new Movie(7, "Rumble in the Bronx", 1995, 7.6),
  new Movie(4, "A Better Tomorrow", 1986, 8.5),
  new Movie(8, "Flash Point", 2007, 7.9),
  new Movie(6, "The Raid: Redemption", 2011, 8.8)
];

console.log(movies);
// Sort movieID ascending

let sortedMovies = movies.sort((a,b) => a.movieID - b.movieID);

console.log(sortedMovies);

// Binary search method to 
// find if the middle value in each finding matches the targetID 
// returns the targetID found

function binarySearch(arraySearch, targetID){
    let start = 0;
    let end = arraySearch.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arraySearch[mid].movieID === targetID) {
            return mid;
        } else if (arraySearch[mid].movieID < targetID) {
            start = mid + 1; 
        } else {
            end = mid - 1;
        }
    }
    return null;
}

// Define the key and result var

let key = 20;
const result = binarySearch(sortedMovies, key);

// Output results

if (result === null) {
    console.log(`The key ${key} was not found`);
} else {
    console.log(`The key ${key} was found at index ${result}`);
}
