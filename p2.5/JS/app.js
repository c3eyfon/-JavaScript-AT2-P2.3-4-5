
// Show Alerts
function showAlert(msg, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(msg));

  const container = document.querySelector(".container");
  const main = document.querySelector(".main");

  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert")?.remove(), 3000);
}

const movieList = new MovieList("movie-list", [
    { id: 1, title: "Police Story", year: 1985, rating: 8.9 },
    { id: 2, title: "Hard Boiled", year: 1992, rating: 8.7 },
    { id: 3, title: "Infernal Affairs", year: 2002, rating: 9.1 },
    { id: 4, title: "Shaolin Soccer", year: 2001, rating: 8.0 },
    { id: 5, title: "Ip Man", year: 2008, rating: 8.6 },
    { id: 6, title: "SPL: Sha Po Lang", year: 2005, rating: 7.8 },
    { id: 7, title: "Rumble in the Bronx", year: 1995, rating: 7.6},
    { id: 8, title: "A Better Tomorrow", year: 1986, rating: 8.5},
    { id: 9, title: "Flash Point", year: 2007, rating: 7.9 },
    { id: 10, title: "The Raid: Redemption", year: 2011, rating: 8.8 },
]);

let selectedIndex = null;

// Add function
document.querySelector("#movie-form").addEventListener("submit", (evt) => {
    evt.preventDefault();

    const id = document.querySelector("#movieID").value.trim();
    const title = document.querySelector("#movieTitle").value.trim();
    const year = document.querySelector("#movieYear").value.trim();
    const rating = document.querySelector("#movieRating").value.trim();

    if (!id || !title || !year || !rating) {
        showAlert("Please fill in all fields", "danger");
        return;
    }

    if (selectedIndex === null) {
        movieList.add(id, title, year, rating);
    } else {
        movieList.update(selectedIndex, id, title, year, rating);
        selectedIndex = null;
    }

    document.querySelector("#movie-form").reset();
});


// Edit & Delete Event Delegation
document.getElementById("movie-list").addEventListener("click", (evt) => {
    if (evt.target.classList.contains("edit")) {
        selectedIndex = evt.target.dataset.index;

        const movie = movieList.movieList[selectedIndex];

        document.querySelector("#movieID").value = movie.id;
        document.querySelector("#movieTitle").value = movie.title;
        document.querySelector("#movieYear").value = movie.year;
        document.querySelector("#movieRating").value = movie.rating;
    }

    if (evt.target.classList.contains("delete")) {
        const index = evt.target.dataset.index;
        movieList.delete(index);
    }
});


// Sorting button
document.querySelector("#sortAZ").addEventListener("click", () => movieList.sortAZ());
document.querySelector("#sortZA").addEventListener("click", () => movieList.sortZA());
document.querySelector("#sortRateHigh").addEventListener("click", () => movieList.sortRatingHighLow());

// Search button

document.getElementById("searchIdForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const value = document.getElementById("searchById").value.trim();

    if (value === "") {
        showAlert("Please enter a Movie ID", "warning");
        return;
    }

    const count = movieList.searchById(value);

    showAlert(`${count} result(s) found`, count > 0 ? "success" : "danger");
});

// Refresh button

document.getElementById("refreshBtn").addEventListener("click", () => {
    movieList.sortIdDsc();
});
