function availableMovies(inputArr) {
    let movies = [];

    for (data of inputArr) {

        if (data.includes('addMovie')) {
            movies.push({ name: data.split('addMovie ')[1] });

        } else if (data.includes('directedBy')) {
            let [movieName, movieDirector] = data.split(' directedBy ')

            if (movies.filter((x) => x.name == movieName)[0]) {
                movies.filter((x) => x.name == movieName)[0]['director'] = movieDirector;
            }

        } else if (data.includes('onDate')) {
            let [movieName, movieDate] = data.split(' onDate ')

            if (movies.filter((x) => x.name == movieName)[0]) {
                movies.filter((x) => x.name == movieName)[0]['date'] = movieDate;
            }
        }


    }

    movies.filter((x) => x.name && x.date && x.director).forEach((m) => console.log(JSON.stringify(m)));

}

// availableMovies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]
// );
// availableMovies(['addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo']
// );