class MovieList {
    constructor(rootId, movieArray) {
        this.rootId = rootId;
        this.movieList = movieArray;
        this.refresh();
    }

    // remove all table rows
    removeElements() {
        const root = document.getElementById(this.rootId);
        root.innerHTML = "";
    }

    // generate new row
    movieRow(index, movie) {
        const root = document.getElementById(this.rootId);

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${movie.id}</td>
            <td>${movie.title}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>
                <button class="btn btn-warning btn-sm edit" data-index="${index}">Edit</button>
                <button class="btn btn-danger btn-sm delete" data-index="${index}">Delete</button>
            </td>
        `;

        root.appendChild(tr);
    }

    // generate new list
    genMovieList() {
        this.removeElements();

        for (let i = 0; i < this.movieList.length; i++) {
            this.movieRow(i, this.movieList[i]);
        }
    }

    // refresh
    refresh() {
        this.genMovieList();
    }
    
    // add new movie

    add(id, title, year, rating) {
        this.movieList.push({
            id,
            title,
            year,
            rating,
        });

        this.refresh();
    }

    // update movie

    update(index, id, title, year, rating) {
        this.movieList[index] = {
            id,
            title,
            year,
            rating,
        };

        this.refresh();
    }

    //

    delete(index) {
        this.movieList.splice(index, 1);
        this.refresh();
    }

    // Sorting methods

    sortAZ() {
        this.movieList.sort((a, b) => a.title.localeCompare(b.title));
        this.refresh();
    }

    sortZA() {
        this.movieList.sort((a, b) => b.title.localeCompare(a.title));
        this.refresh();
    }

    sortRatingHighLow() {
        this.movieList.sort((a, b) => b.rating - a.rating);
        this.refresh();
    }

     sortIdDsc() {
        this.movieList.sort((a, b) => a.id - b.id);
        this.refresh();
    }

    // Search method

searchById(idString) {
    const filteredList = [];

    for (let movie of this.movieList) {
        const idMatch = movie.id.toString().includes(idString);
        if (idMatch) {
            filteredList.push(movie);
        }
    }

    this.removeElements();
    for (let i = 0; i < filteredList.length; i++) {
        this.movieRow(i, filteredList[i]);
    }

    return filteredList.length;
}

}
