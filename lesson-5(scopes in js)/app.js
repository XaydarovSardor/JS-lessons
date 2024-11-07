let isPublic;
while (isPublic !== "true" && isPublic !== "false") {
    isPublic = prompt("Is public? (true or false)")
}
let numberOfBooks;
do {
    numberOfBooks = Number(prompt("Nechta kitob o'qidingiz?").trim())
} while (numberOfBooks == 0 || isNaN(numberOfBooks) || numberOfBooks < 0);
isPublic = isPublic === "true"
let booksDB = {
    count: numberOfBooks,
    books: {},
    authors: {},
    genres: [],
    isPublic: isPublic,
}
for (let i = 1; i <= numberOfBooks; i++) {
    let kitobNomi;
    let ball;
    let author;
    let janr;
    do {
        kitobNomi = prompt(`${i}-qaysi kitobni o'qidingiz?`).trim()
} while (kitobNomi==0 || !isNaN(kitobNomi));
    do {
        author = prompt(`${i}-o'qigan kitobingizning muallifi kim?`).trim()
    } while (author==0 || !isNaN(author));
    do {
        janr = prompt(`${i}-kitobingiz qanday janrda?`).trim()
    } while (kitobNomi==0 || !isNaN(kitobNomi));
    do {
    ball = Number(prompt(`${i}-o'qigan kitobingizga nechi ball berasiz?`).trim())
    } while (isNaN(ball) || ball===null || ball=="" || ball<0);
    booksDB.books[`${kitobNomi}`] =ball
    booksDB.genres[`${kitobNomi}`] =janr
    booksDB.authors[`${kitobNomi}`] =author
    
    if (booksDB.isPublic == true) {
        console.log(booksDB);
        console.log(`Sizning ${i}-o'qigan kitobingiz nomi - (${kitobNomi}), uning muallifi - (${author}), u - (${janr}) janrida va unga - (${ball}) ball berdingiz`);
        let kitoblarSoni = booksDB.count
        if (kitoblarSoni > 5) {
            console.log("Siz kitobxon ekansiz");
        } else if (kitoblarSoni < 5 && kitoblarSoni >= 3) {
            console.log("Siz bazida kitob o'qir ekansiz");
        } else if (kitoblarSoni < 3) {
            console.log("Siz kam kitob o'qir ekansiz");
        }
    } else {
        console.log("Qiymatlar chiqishi uchun isPublicga (true) qiymatini kiritishingiz kerak");
    }
}


