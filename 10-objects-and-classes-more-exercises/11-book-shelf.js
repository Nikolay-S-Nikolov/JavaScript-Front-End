function bookShelf(inputArr) {
    let shelf = {};
    let books = {};

    for (let info of inputArr) {

        if (info.includes(' -> ')) {
            let [id, shelfGenre] = info.split(' -> ');

            if (!(id in shelf)) {
                shelf[id] = shelfGenre;
            }

        } else if (info.includes(': ')) {
            let [bookTitle, info1] = info.split(': ');
            let [bookAuthor, bookGenre] = info1.split(', ');

            if (Object.values(shelf).includes(bookGenre)) {

                if (!(bookGenre in books)) {
                    books[bookGenre] = []
                }

                books[bookGenre].push([bookTitle, bookAuthor])
            }
        }
    }

    let sortedBooks = Object.entries(books).sort(
        (a, b) => b[1].length - a[1].length
    );

    for (let[genre,info2] of sortedBooks){
        let shelfId = Object.entries(shelf).filter((x)=>x[1]==genre)[0][0];

        console.log(`${shelfId} ${genre}: ${info2.length}`);
        info2 = info2.sort((a,b)=>a[0].localeCompare(b[0]));
        
        for (let [title,author] of info2){
            console.log(`--> ${title}: ${author}`);
        }
    }
    
}